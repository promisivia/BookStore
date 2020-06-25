package com.bookstore.repository;

import com.bookstore.document.BookDetail;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookDetailRepository extends MongoRepository<BookDetail, Long> {
    BookDetail getById(Long id);
}
