package com.bookstore.repository;

import com.bookstore.entity.Consume;
import com.bookstore.dto.IdAndQuantity;
import com.bookstore.dto.TypeAndQuantity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface StatisticRepository extends CrudRepository<Consume,Long> {
    @Query(value = "select new com.bookstore.dto.IdAndQuantity(oi.bookId, sum(oi.quantity)) " +
            "from Order o join OrderItem oi on o.orderId = oi.orderId  " +
            "where o.date between :start and :end " +
            "group by oi.bookId order by sum(oi.quantity) desc " )
    List<IdAndQuantity> findSaleList(@Param("start") Date start, @Param("end") Date end);

    @Query(value = "select new com.bookstore.dto.TypeAndQuantity(b.type, sum(oi.quantity)) " +
            "from OrderItem oi join Book b on b.id = oi.bookId " +
            "where oi.orderId in " +
            "(select o.orderId from Order o " +
            "where o.userId = :userId and o.date between :start and :end) " +
            "group by b.type order by sum(oi.quantity) desc " )
    List<TypeAndQuantity> findOwnBookList(@Param("start") Date start, @Param("end") Date end, @Param("userId") Long userId);

    @Query(value = "select new Consume(o.userId, sum(c.totalQuantity), sum(c.totalMoney)) " +
            "from Order o join Consume c on o.orderId = c.orderId " +
            "where o.date between :start and :end " +
            "group by c.userId order by sum(c.totalQuantity) desc")
    List<Consume> findAllConsumeRecord(@Param("start") Date start, @Param("end") Date end);

    @Query(value = "select new Consume(o.userId, sum(c.totalQuantity), sum(c.totalMoney)) " +
            "from Order o join Consume c on o.orderId = c.orderId " +
            "where o.date between :start and :end and o.userId = :userId ")
    Consume findOwnConsumeRecord(@Param("start") Date start, @Param("end") Date end, @Param("userId") Long userId);
}
