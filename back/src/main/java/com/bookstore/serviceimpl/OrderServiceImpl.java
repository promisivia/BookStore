package com.bookstore.serviceimpl;

import com.bookstore.dao.*;
import com.bookstore.dto.*;
import com.bookstore.entity.*;
import com.bookstore.exception.OutOfStockException;
import com.bookstore.service.BookService;
import com.bookstore.service.CartService;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.*;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
    private final OrderDao orderDao;
    private final BookService bookService;
    private final CartService cartService;
    private final EntityManager entityManager;

    @Autowired
    public OrderServiceImpl(OrderDao orderDao, BookService bookService, CartService cartService, EntityManager entityManager) {
        this.orderDao = orderDao;
        this.bookService = bookService;
        this.cartService = cartService;
        this.entityManager = entityManager;
    }

    protected List<OrderResponseDto> setProduct(List<Order> orderList){
        List<OrderResponseDto> res =  new ArrayList<>();
        // set book info of every order item
        for( Order order:orderList) {
            List<ProductDto> productList = new ArrayList<>();
            Date date = order.getDate();
            for(OrderItem item:order.getBookList()){
                BookDto book = bookService.getOldBook(item.getBookId(),date);
                ProductDto product = new ProductDto(book,item.getQuantity());
                productList.add(product);
            }
            res.add(new OrderResponseDto(order,productList));
        }
        return res;
    }

    @Override
    public List<OrderResponseDto> getOrder(Long userId){
        List<Order> orderList =  orderDao.getOrder(userId);
        return setProduct(orderList);
    }

    @Override
    public List<OrderResponseDto> getAllOrder(){
        List<Order> orderList =  orderDao.getAllOrder();
        return setProduct(orderList);
    }

    @Override
    @Transactional
    public List<CartDto> addOrder(OrderRequestDto orderRequestDto) throws OutOfStockException {
        Long userId = orderRequestDto.getUserId();
        Double price = orderRequestDto.getPrice();
        Boolean payed = orderRequestDto.getPayed();
        List<IdAndQuantity> productList = orderRequestDto.getProductList();
        // add order
        Order order = orderDao.addOrder(new Order(userId, price, payed));
        Long orderId = order.getOrderId();

        // fro every product in order
        for(IdAndQuantity product: productList){
            Long bookId = product.getBookId();
            Long quantity = product.getQuantity();

            // update inventory
            Long oldInventory = bookService.getInventory(bookId);
            long newInventory =  oldInventory - quantity;
            if( newInventory < 0){
                throw new OutOfStockException();
            }
            bookService.setInventory(bookId, newInventory);

            // add every order item
            orderDao.addOrderItem(new OrderItem(orderId, bookId, quantity));

            // delete from cart
            cartService.deleteItem(userId,bookId);
        }
        this.entityManager.flush();
        this.entityManager.clear();
        return cartService.getCart(userId);
    }

    @Override
    @Transactional
    public void delete(Long id){
        orderDao.deleteWithBookId(id);
    }
}
