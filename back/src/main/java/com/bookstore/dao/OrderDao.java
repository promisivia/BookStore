package com.bookstore.dao;

import com.bookstore.entity.Order;
import com.bookstore.entity.OrderItem;

import java.util.List;

public interface OrderDao {
    List<Order> getOrder(Long userId);
    List<Order> getAllOrder();
    Order addOrder(Order order);
    void addOrderItem(OrderItem orderItem);
    void deleteWithBookId(Long id);
}
