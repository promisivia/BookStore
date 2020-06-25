package com.bookstore.daoimpl;

import com.bookstore.dao.StatisticDao;
import com.bookstore.entity.Consume;
import com.bookstore.dto.TypeAndQuantity;
import com.bookstore.repository.StatisticRepository;
import com.bookstore.dto.IdAndQuantity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class StatisticDaoImpl implements StatisticDao {
    StatisticRepository statisticRepository;

    @Autowired
    public StatisticDaoImpl(StatisticRepository statisticRepository){
        this.statisticRepository = statisticRepository;
    }

    @Override
    public Consume findOwnConsumeRecord(Date start, Date end, Long userId){
        return statisticRepository.findOwnConsumeRecord(start, end, userId);
    }

    @Override
    public List<Consume> findAllConsumeRecord(Date start, Date end){
        return statisticRepository.findAllConsumeRecord(start, end);
    }

    @Override
    public List<IdAndQuantity> findSaleList(Date start, Date end){
        return statisticRepository.findSaleList(start, end);
    }

    @Override
    public List<TypeAndQuantity> findOwnBookList(Date start, Date end, Long userId){
        return statisticRepository.findOwnBookList(start, end, userId);
    }
}
