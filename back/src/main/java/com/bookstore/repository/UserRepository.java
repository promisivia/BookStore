package com.bookstore.repository;

import com.bookstore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User,Long>{
    User findByUsername(String username);

    User findByUserId(Long userId);

    @Transactional
    @Modifying
    @Query("update User set disable=:status where userId = :userId")
    void setStatus(@Param("userId")Long userId, @Param("status") Boolean status);
}
