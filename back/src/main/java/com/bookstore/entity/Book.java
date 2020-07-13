package com.bookstore.entity;

import com.bookstore.dto.BookDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "book")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Book {
    private Long id;
    private String isbn;
    private String name;
    private String type;
    private String author;
    private Long inventory;
    private Boolean exist;
    private List<BookPrice> priceList;

    public Book() { }

    public Book(String isbn, String name, String type, String author, Long inventory) {
        this.isbn = isbn;
        this.name = name;
        this.type = type;
        this.author = author;
        this.inventory = inventory;
        this.exist = true;
    }

    public Book(BookDto bookDto) {
        this.id = bookDto.getId();
        this.isbn = bookDto.getIsbn();
        this.name = bookDto.getName();
        this.type = bookDto.getType();
        this.author = bookDto.getAuthor();
        this.inventory = bookDto.getInventory();
        this.exist = true;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
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

    public Long getInventory() {
        return inventory;
    }

    public Boolean getExist() { return exist; }

    public void setExist(Boolean exist) { this.exist = exist; }

    public void setInventory(Long inventory) {
        this.inventory = inventory;
    }

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name="id")
    @Transient
    public List<BookPrice> getPriceList() {
        return priceList;
    }

    public void setPriceList(List<BookPrice> priceList) {
        this.priceList = priceList;
    }
}
