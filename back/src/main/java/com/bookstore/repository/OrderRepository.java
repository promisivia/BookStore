package com.bookstore.repository;

import com.bookstore.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query(value="select o from Order o " +
            "where o.date between :start and :end and o.userId=:userId " +
            "order by o.date desc")
    List<Order> findByUserId(@Param("userId") Long userId, @Param("start") Date start, @Param("end") Date end);

    @Query(value="select o from Order o " +
            "where o.date between :start and :end order by o.date desc")
    List<Order> findAll(@Param("start") Date start, @Param("end") Date end);
}
