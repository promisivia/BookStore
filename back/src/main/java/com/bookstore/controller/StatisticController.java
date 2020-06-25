package com.bookstore.controller;

import com.bookstore.constant.ResponseCode;
import com.bookstore.entity.Consume;
import com.bookstore.service.StatisticService;
import com.bookstore.utils.response.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class StatisticController {
    @Autowired
    private StatisticService statisticService;

    @RequestMapping(value="/statistic/sale")
    public Object getSaleRecord(@RequestParam("start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start,
                                @RequestParam("end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end){
        try{
            return statisticService.findSaleRecordList(start,end);
        }catch (Exception e){
            return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
        }
    }

    @RequestMapping(value="/statistic/consume/all")
    public List<Consume> getConsumeRecords(@RequestParam("start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  Date start,
                                           @RequestParam("end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  Date end){
        return statisticService.findAllConsumeRecord(start,end);
    }

    @RequestMapping(value="/statistic/consume/own")
    public Consume getConsumeRecord(@RequestParam("id") Long id,
                                    @RequestParam("start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  Date start,
                                    @RequestParam("end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  Date end){
        return statisticService.findOwnConsumeRecord(start,end,id);
    }

    @RequestMapping(value="/statistic/consume/book")
    public Object getBookConsumeRecord(@RequestParam("id") Long id,
                                       @RequestParam("start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start,
                                       @RequestParam("end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end){
        return statisticService.findOwnBookList(start,end,id);
    }

}
