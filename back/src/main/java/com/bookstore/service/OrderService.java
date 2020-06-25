package com.bookstore.service;

import com.bookstore.dto.CartDto;
import com.bookstore.dto.OrderRequestDto;
import com.bookstore.dto.OrderResponseDto;
import com.bookstore.dto.ProductDto;
import com.bookstore.exception.OutOfStockException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    List<OrderResponseDto> getOrder(Long userId);
    List<OrderResponseDto> getAllOrder();
    List<CartDto> addOrder(OrderRequestDto orderRequestDto) throws OutOfStockException;
    void delete(Long id);
}
