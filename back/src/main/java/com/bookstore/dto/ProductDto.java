package com.bookstore.dto;

public class ProductDto {
    BookDto book;
    Long quantity;

    public ProductDto() {
    }

    public ProductDto(BookDto book, Long quantity) {
        this.book = book;
        this.quantity = quantity;
    }

    public BookDto getBook() {
        return book;
    }

    public void setBook(BookDto book) {
        this.book = book;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
