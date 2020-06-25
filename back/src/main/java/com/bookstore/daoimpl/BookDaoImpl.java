package com.bookstore.daoimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.dto.BookDto;
import com.bookstore.entity.Book;
import com.bookstore.document.BookDetail;
import com.bookstore.entity.BookPrice;
import com.bookstore.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {
    private BookRepository bookRepository;
    private BookDetailRepository bookDetailRepository;
    private BookPriceRepository bookPriceRepository;

    @Autowired
    public BookDaoImpl(BookRepository bookRepository, BookDetailRepository bookDetailRepository, BookPriceRepository bookPriceRepository){
        this.bookRepository = bookRepository;
        this.bookDetailRepository = bookDetailRepository;
        this.bookPriceRepository = bookPriceRepository;
    }

    @Override
    public void saveBookAttribute(BookDetail detail, BookPrice price){
        bookDetailRepository.save(detail);
        if(price!=null)bookPriceRepository.save(price);
    }

    @Override
    public Book saveBook(Book book){
        return bookRepository.save(book);
    }

    @Override
    @Modifying
    @Transactional
    public void deleteBook(Long id) {
        bookRepository.deleteBook(id);
    }

    @Override
    public BookDto findOne(Long id){
        Book book = bookRepository.getOne(id);
        BookDetail detail = bookDetailRepository.getById(id);
        Double price = bookPriceRepository.getCurrentPrice(id);
        return new BookDto(book,detail,price);
    }

    @Override
    public BookDto findOneWithDate(Long id, Date date) {
        Book book = bookRepository.getOne(id);
        BookDetail detail = bookDetailRepository.getById(id);
        Double price = bookPriceRepository.getPriceWithDate(id,date);
        return new BookDto(book,detail,price);
    }

    @Override
    public Double getCurrentPrice(Long id){
        return bookPriceRepository.getCurrentPrice(id);
    }

    @Override
    public Double getOldPrice(Long id, Date date){
        return bookPriceRepository.getPriceWithDate(id, date);
    }

    @Override
    public List<BookDto> findAll() {
        List<Book> bookList = bookRepository.getAll();
        List<BookDto> bookDtoList = new ArrayList<>();
        for(Book book: bookList){
            BookDetail detail = bookDetailRepository.getById(book.getId());
            Double price = bookPriceRepository.getCurrentPrice(book.getId());
            bookDtoList.add(new BookDto(book,detail,price));
        }
        return bookDtoList;
    }

    @Override
    public Long getInventory(Long id){ return bookRepository.getOne(id).getInventory();}

    @Modifying
    @Override
    @Transactional
    public void setInventory(Long bookId, Long inventory){
        bookRepository.setInventory(bookId,inventory);
    }
}
