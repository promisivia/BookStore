package com.bookstore.repository;

import com.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query("select b from Book b where b.exist = true")
    List<Book> getAll();

    @Transactional
    @Modifying
    @Query("update Book set inventory=:inventory where id = :bookId")
    void setInventory(@Param("bookId")Long bookId, @Param("inventory") Long inventory);

    @Transactional
    @Modifying
    @Query("update Book set exist = false where id = :bookId")
    void deleteBook(@Param("bookId") Long bookId);
}
