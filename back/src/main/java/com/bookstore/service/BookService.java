package com.bookstore.service;

import com.bookstore.dto.BookDto;
import com.bookstore.entity.Book;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface BookService {
    List<BookDto> getBooks();
    BookDto getBook(Long id);
    BookDto getOldBook(Long id, Date date);
    BookDto editBook(BookDto book);
    BookDto addBook(BookDto book);
    void deleteBook(Long id);
    void setInventory(Long bookId, Long inventory);
    Long getInventory(Long id);
}
