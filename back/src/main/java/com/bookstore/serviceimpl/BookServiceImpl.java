package com.bookstore.serviceimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.dto.BookDto;
import com.bookstore.entity.Book;
import com.bookstore.document.BookDetail;
import com.bookstore.entity.BookPrice;
import com.bookstore.service.BookService;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    private BookDao bookDao;

    @Autowired
    public BookServiceImpl(BookDao bookDao){
        this.bookDao = bookDao;
    }

    @Override
    public BookDto getBook(Long id){
        return bookDao.findOne(id);
    }

    @Override
    public BookDto getOldBook(Long id, Date date){ return bookDao.findOneWithDate(id,date);}

    @Override
    public List<BookDto> getBooks(String query) {
        return bookDao.findAll(query);
    }

    @Override
    public BookDto editBook(BookDto bookDto){
        Long bookId = bookDto.getId();

        // save book
        Book book = new Book(bookDto);
        BookDetail detail = new BookDetail(bookDto);

        // if price change, add mew item
        BookPrice price = null;
        Double oldPrice = bookDao.getCurrentPrice(bookId);
        Double newPrice = bookDto.getPrice();
        if(!oldPrice.equals(newPrice)){
            price = new BookPrice(bookId,newPrice);
        }
        bookDao.saveBook(book);
        bookDao.saveBookAttribute(detail,price);
        return bookDto;
    }

    @Override
    public BookDto addBook(BookDto bookDto){
        Book book = new Book(bookDto);
        Book newBook = bookDao.saveBook(book);
        bookDto.setId(newBook.getId());
        BookDetail detail = new BookDetail(bookDto);
        BookPrice price = new BookPrice(bookDto.getId(),bookDto.getPrice());
        bookDao.saveBookAttribute(detail,price);
        return bookDto;
    }

    @Override
    public void deleteBook(Long id){ bookDao.deleteBook(id); }

    @Override
    public void setInventory(Long bookId, Long inventory){
        bookDao.setInventory(bookId,inventory);
    }

    @Override
    public Long getInventory(Long id){return bookDao.getInventory(id);}
}
