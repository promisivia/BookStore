package com.bookstore.controller;
import com.bookstore.constant.ResponseCode;
import com.bookstore.dto.BookDto;
import com.bookstore.entity.Book;
import com.bookstore.service.BookService;
import com.bookstore.utils.response.HttpResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/book/get/all")
    public List<BookDto> getBooks(@RequestParam("query") String query) {
        return bookService.getBooks(query);
    }

    @RequestMapping(value = "/book/get/one")
    public BookDto getBook(@RequestParam("id") Long id) {
        return bookService.getBook(id);
    }

    @RequestMapping(value = "/book/edit")
    public @ResponseBody Object editBook(BookDto book){
        try{
            return HttpResponse.success(bookService.editBook(book));
        } catch (Exception e){
            Throwable cause = e.getCause();
            if (cause instanceof SQLIntegrityConstraintViolationException){
                return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
            }
        }
        return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
    }

    @RequestMapping(value = "/book/add")
    public @ResponseBody Object addBook(BookDto book){
        try{
            return HttpResponse.success(bookService.addBook(book));
        } catch (Exception e){
            Throwable cause = e.getCause();
            if (cause instanceof SQLIntegrityConstraintViolationException){
                return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
            }
        }
        return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
    }

    @RequestMapping(value = "/book/delete")
    public Object deleteBook(@RequestParam("id") Long id){
        try{
            bookService.deleteBook(id);
        }catch (Exception e){
            return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
        }
        return HttpResponse.fail(ResponseCode.PARAM_IS_INVALID);
    }
}
