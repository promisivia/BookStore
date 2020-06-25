package com.bookstore.entity;

import com.bookstore.dto.BookDto;
import com.bookstore.utils.multikeys.BookPriceMultiKeys;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BOOK_PRICE")
@IdClass(BookPriceMultiKeys.class)
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class BookPrice {
    private Long id;
    private Double price;
    private Date date;

    public BookPrice(){}

    public BookPrice(Long id, Double price) {
        this.id = id;
        this.price = price;
    }

    public void setAll(BookDto dto){
        this.id = dto.getId();
        this.price = dto.getPrice();
    }

    @Id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Id
    @CreatedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
