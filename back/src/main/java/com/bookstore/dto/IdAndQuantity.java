package com.bookstore.dto;

public class IdAndQuantity {
    Long bookId;
    Long quantity;

    public IdAndQuantity(){}

    public IdAndQuantity(Long bookId, Long quantity) {
        this.bookId = bookId;
        this.quantity = quantity;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
