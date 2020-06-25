package com.bookstore.service;

import com.bookstore.entity.Consume;
import com.bookstore.dto.SaleRecordDto;
import com.bookstore.dto.TypeAndQuantity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface StatisticService {
    Consume findOwnConsumeRecord(Date start, Date end, Long userId);
    List<Consume> findAllConsumeRecord(Date start, Date end);
    List<SaleRecordDto> findSaleRecordList(Date start, Date end);
    List<TypeAndQuantity> findOwnBookList(Date start, Date end, Long userId);
}
