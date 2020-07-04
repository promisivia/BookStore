package com.bookstore.serviceimpl;

import com.bookstore.dao.StatisticDao;
import com.bookstore.dto.*;
import com.bookstore.entity.Consume;
import com.bookstore.service.BookService;
import com.bookstore.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class StatisticServiceImpl implements StatisticService {
    private BookService bookService;
    private StatisticDao statisticDao;

    @Autowired
    public StatisticServiceImpl(BookService bookService, StatisticDao statisticDao) {
        this.bookService = bookService;
        this.statisticDao = statisticDao;
    }

    @Override
    public List<SaleRecordDto> findSaleRecordList(Date start, Date end){
        List<IdAndQuantity> IdAndQuantityList = statisticDao.findSaleList(start, end);
        List<SaleRecordDto> recordDtoList = new ArrayList<>();
        for(IdAndQuantity product :IdAndQuantityList){
            BookDto book = bookService.getBook(product.getBookId());
            SaleRecordDto record = new SaleRecordDto(book, product.getQuantity());
            recordDtoList.add(record);
        }
        return recordDtoList;
    }

    @Override
    public List<Consume> findAllConsumeRecord(Date start, Date end){
        return statisticDao.findAllConsumeRecord(start, end);
    }

    @Override
    public Consume findOwnConsumeRecord(Date start, Date end, Long userId){
        Consume consume = statisticDao.findOwnConsumeRecord(start, end, userId);
        if(consume.getUserId() == null){
            return  new Consume(userId, (long) 0, 0.00);
        }else{
            return consume;
        }
    }

    @Override
    public List<TypeAndQuantity> findOwnBookList(Date start, Date end, Long userId){
        return statisticDao.findOwnBookList(start, end, userId);
    }
}
