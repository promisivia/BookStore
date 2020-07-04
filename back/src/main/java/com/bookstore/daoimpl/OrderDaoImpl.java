package com.bookstore.daoimpl;

import com.bookstore.dao.OrderDao;
import com.bookstore.entity.Order;
import com.bookstore.entity.OrderItem;
import com.bookstore.repository.OrderItemRepository;
import com.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {
    OrderRepository orderRepository;
    OrderItemRepository orderItemRepository;

    @Autowired
    public OrderDaoImpl(OrderRepository orderRepository, OrderItemRepository orderItemRepository){
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public List<Order> getOrder(Long userId, Date start, Date end){
        return orderRepository.findByUserId(userId, start, end);
    }

    @Override
    public List<Order> getAllOrder(Date start, Date end){
        return orderRepository.findAll(start, end);
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void addOrderItem(OrderItem orderItem){
        orderItemRepository.save(orderItem);
    }

    @Override
    public void deleteWithBookId(Long id){
        orderItemRepository.deleteByBookId(id);
    }
}
