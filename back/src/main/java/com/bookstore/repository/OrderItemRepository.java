package com.bookstore.repository;

import com.bookstore.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
    @Transactional
    @Modifying
    @Query("delete from OrderItem where bookId = :bookId")
    void deleteByBookId(@Param("bookId") Long bookId);
}
