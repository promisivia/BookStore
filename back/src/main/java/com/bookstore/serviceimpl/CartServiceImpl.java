package com.bookstore.serviceimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.dao.CartDao;
import com.bookstore.dto.BookDto;
import com.bookstore.dto.CartDto;
import com.bookstore.entity.CartItem;
import com.bookstore.service.BookService;
import com.bookstore.service.CartService;
import com.bookstore.utils.multikeys.CartMultiKeys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    private final CartDao cartDao;
    private final BookService bookService;

    @Autowired
    public CartServiceImpl(CartDao cartDao, BookService bookService) {
        this.cartDao = cartDao;
        this.bookService = bookService;
    }

    @Override
    public List<CartDto> getCart(Long userId){
        List<CartItem> cartList = cartDao.findAll(userId);
        List<CartDto> cart = new ArrayList<>();
        for(CartItem item:cartList){
            Long bookId = item.getBookId();
            BookDto book = bookService.getBook(bookId);
            if(book.getInventory() > item.getQuantity()){
                cart.add(new CartDto(item,book));
            }else if(book.getInventory()!=0){
                item.setQuantity(book.getInventory());
                cart.add(new CartDto(item,book));
            }
        }
        return cart;
    }

    @Override
    public List<CartDto> addItem(Long userId, Long bookId, Long quantity, Boolean selected){
        CartItem item = cartDao.findOne(userId,bookId);
        if(item == null) {
            cartDao.addItem(new CartItem(userId,bookId,quantity,selected));
        } else{
            item.setQuantity(item.getQuantity() + 1);
            item.setSelected(item.getSelected());
            cartDao.addItem(item);
        }
        return getCart(userId);
    }

    @Override
    public List<CartDto> updateItem(Long userId, Long bookId, Long quantity, Boolean selected){
        cartDao.addItem(new CartItem(userId,bookId,quantity,selected) );
        return getCart(userId);
    }

    @Override
    public List<CartDto> deleteItem(Long userId, Long bookId){
        cartDao.deleteItem(userId, bookId);
        return getCart(userId);
    }
}
