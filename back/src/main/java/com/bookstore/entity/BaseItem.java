package com.bookstore.entity;

import javax.persistence.*;

@MappedSuperclass
public class BaseItem {
    protected Long quantity;
    protected Book book;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name="book_id",referencedColumnName ="id")
    @Transient
    public Book getBook() {
        return book;
    }

    public void setBook(Book product) {
        this.book = product;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
