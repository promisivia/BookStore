package com.bookstore.entity;

import com.bookstore.utils.multikeys.CartMultiKeys;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "CART")
@IdClass(CartMultiKeys.class)
@JsonIgnoreProperties(value = {"userId","bookId","hibernateLazyInitializer","fieldHandler"})
public class CartItem extends BaseItem {
    private Long userId;
    private Long bookId;
    private Boolean selected;

    public CartItem(){}

    public CartItem(Long userId, Long bookId, Long quantity, Boolean selected) {
        this.userId = userId;
        this.bookId = bookId;
        this.quantity = quantity;
        this.selected = selected;
    }

    @Id
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Id
    @Column(name="book_id", insertable = false, updatable = false)
    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public Boolean getSelected() {
        return selected;
    }

    public void setSelected(Boolean selected) {
        this.selected = selected;
    }
}
