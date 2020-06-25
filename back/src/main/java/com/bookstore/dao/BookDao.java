package com.bookstore.dao;

import com.bookstore.dto.BookDto;
import com.bookstore.entity.Book;
import com.bookstore.document.BookDetail;
import com.bookstore.entity.BookPrice;
import org.springframework.data.jpa.repository.Modifying;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface BookDao {
    List<BookDto> findAll();
    BookDto findOne(Long id);
    BookDto findOneWithDate(Long id, Date date);
    Double getCurrentPrice(Long id);
    Double getOldPrice(Long id, Date date);
    Long getInventory(Long id);
    @Modifying
    @Transactional
    void setInventory(Long bookId, Long inventory);
    Book saveBook(Book book);
    void saveBookAttribute(BookDetail detail, BookPrice price);
    @Modifying
    @Transactional
    void deleteBook(Long id);
}
