package com.bookstore.dao;

import com.bookstore.entity.Consume;
import com.bookstore.dto.TypeAndQuantity;
import com.bookstore.dto.IdAndQuantity;

import java.util.Date;
import java.util.List;

public interface  StatisticDao {
    Consume findOwnConsumeRecord(Date start, Date end, Long userId);
    List<Consume> findAllConsumeRecord(Date start, Date end);
    List<IdAndQuantity> findSaleList(Date start, Date end);
    List<TypeAndQuantity> findOwnBookList(Date start, Date end, Long userId);
}
