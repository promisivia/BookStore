package com.bookstore.service;

import com.bookstore.dto.CartDto;
import com.bookstore.dto.OrderRequestDto;
import com.bookstore.dto.OrderResponseDto;
import com.bookstore.dto.ProductDto;
import com.bookstore.exception.OutOfStockException;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface OrderService {
    List<OrderResponseDto> getOrder(Long userId, String query, Date start, Date end);
    List<OrderResponseDto> getAllOrder(String query, Date start, Date end);
    List<CartDto> addOrder(OrderRequestDto orderRequestDto) throws OutOfStockException;
}
