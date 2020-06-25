package com.bookstore.document;

import com.bookstore.dto.BookDto;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Document(collection="BOOK_DETAIL")
public class BookDetail {
    private Long id;
    private String description;
    private String image;

    public BookDetail(){}

    public BookDetail(Long id, String description, String image) {
        this.id = id;
        this.description = description;
        this.image = image;
    }
    public BookDetail(BookDto bookDto) {
        this.id = bookDto.getId();
        this.description = bookDto.getDescription();
        this.image = bookDto.getImage();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
