package com.bookstore.repository;

import com.bookstore.document.Avatar;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AvatarRepository extends MongoRepository<Avatar, Long> {
    Avatar getById(Long id);
}
