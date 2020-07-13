package com.bookstore.controller;

import com.bookstore.dto.CartDto;
import com.bookstore.entity.CartItem;
import com.bookstore.service.CartService;
import com.bookstore.utils.multikeys.CartMultiKeys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @RequestMapping(value = "/cart/get")
    public List<CartDto> getCart(@RequestParam("id") Long userId){
        return cartService.getCart(userId);
    }

    @RequestMapping(value = "/cart/add")
    public List<CartDto> addItem(@RequestParam("userId") Long userId,
                                 @RequestParam("bookId") Long bookId,
                                 @RequestParam("quantity") Long quantity,
                                 @RequestParam("selected") Boolean selected) {
        return cartService.addItem(userId,bookId,quantity,selected);
    }

    @RequestMapping(value = "/cart/update")
    public List<CartDto> updateItem(@RequestParam("userId") Long userId,
                                    @RequestParam("bookId") Long bookId,
                                    @RequestParam("quantity") Long quantity,
                                    @RequestParam("selected") Boolean selected) {
        return cartService.updateItem(userId,bookId,quantity,selected);
    }

    @RequestMapping(value = "/cart/delete")
    public @ResponseBody List<CartDto> deleteItem(CartMultiKeys keys){
        return cartService.deleteItem(keys.getUserId(),keys.getBookId());
    }
}
