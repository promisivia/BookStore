package com.bookstore.dao;

import com.bookstore.entity.Order;
import com.bookstore.entity.OrderItem;

import java.util.Date;
import java.util.List;

public interface OrderDao {
    List<Order> getOrder(Long userId, Date start, Date end);
    List<Order> getAllOrder(Date start, Date end);
    Order addOrder(Order order);
    void addOrderItem(OrderItem orderItem);
    void deleteWithBookId(Long id);
}
