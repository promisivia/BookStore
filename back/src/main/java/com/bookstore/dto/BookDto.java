package com.bookstore.dto;

import com.bookstore.entity.Book;
import com.bookstore.document.BookDetail;

public class BookDto {
    private Long id;
    private String isbn;
    private String name;
    private String type;
    private String author;
    private Double price;
    private Long inventory;
    private String image;
    private String description;

    public BookDto(){
    }

    public BookDto(Long id, String isbn, String name, String type, String author, Double price, Long inventory, String image, String description) {
        this.id = id;
        this.isbn = isbn;
        this.name = name;
        this.type = type;
        this.author = author;
        this.price = price;
        this.inventory = inventory;
        this.image = image;
        this.description = description;
    }

    public BookDto(Book book, BookDetail detail, Double price) {
        this.id = book.getId();
        this.isbn = book.getIsbn();
        this.name = book.getName();
        this.type = book.getType();
        this.author = book.getAuthor();
        this.price = price;
        this.inventory = book.getInventory();
        this.image = detail.getImage();
        this.description = detail.getDescription();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getInventory() {
        return inventory;
    }

    public void setInventory(Long inventory) {
        this.inventory = inventory;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
