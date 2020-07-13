package com.bookstore.repository;

import com.bookstore.entity.BookPrice;
import com.bookstore.utils.multikeys.BookPriceMultiKeys;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;

public interface BookPriceRepository extends JpaRepository<BookPrice, BookPriceMultiKeys> {
    @Query(value = "select s.price from BookPrice s where s.id = :id and s.date = " +
            "(select max(t.date) from BookPrice t where t.id = :id and t.date<:date) ")
    Double getPriceWithDate(@Param("id")Long id, @Param("date") Date date);

    @Query(value = "select s.price from BookPrice s where s.id = :id and s.date = " +
            "(select max(t.date) from BookPrice t where t.id = :id) ")
    Double getCurrentPrice(@Param("id")Long id);
}
