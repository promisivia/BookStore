package com.bookstore.service;

import com.bookstore.dto.CartDto;
import com.bookstore.utils.multikeys.CartMultiKeys;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    List<CartDto> getCart(Long userId);
    List<CartDto> addItem(Long userId, Long bookId, Long quantity, Boolean selected);
    List<CartDto> updateItem(Long userId, Long bookId, Long quantity, Boolean selected);
    List<CartDto> deleteItem(Long userId, Long bookId);
}
