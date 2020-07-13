package com.bookstore.repository;

import com.bookstore.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartRepository extends JpaRepository<CartItem,Long> {
    List<CartItem> findByUserId(Long userId);
    void deleteAllByUserIdAndBookId(Long userId, Long bookId);
    CartItem findByUserIdAndBookId(Long userId, Long bookId);
}
