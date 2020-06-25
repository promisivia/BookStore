package com.bookstore.dao;

import com.bookstore.entity.CartItem;
import org.springframework.data.jpa.repository.Modifying;

import javax.transaction.Transactional;
import java.util.List;

public interface CartDao {
    List<CartItem> findAll(Long userId);
    CartItem findOne(Long userId, Long bookId);
    void addItem(CartItem item);
    @Modifying
    @Transactional
    void deleteItem(Long userId, Long bookId);
}