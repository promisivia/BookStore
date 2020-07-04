package com.bookstore.dto;

import com.bookstore.entity.CartItem;

public class CartDto extends ProductDto{
    private Boolean selected;

    public CartDto(CartItem item, BookDto book) {
        this.quantity = item.getQuantity();
        this.selected = item.getSelected();
        this.book = book;
    }

    public Boolean getSelected() {
        return selected;
    }

    public void setSelected(Boolean selected) {
        this.selected = selected;
    }
}
