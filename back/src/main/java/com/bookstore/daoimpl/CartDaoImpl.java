package com.bookstore.daoimpl;

import com.bookstore.dao.CartDao;
import com.bookstore.entity.CartItem;
import com.bookstore.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {
    CartRepository cartRepository;

    @Autowired
    public CartDaoImpl(CartRepository cartRepository){
        this.cartRepository = cartRepository;
    }

    @Override
    public List<CartItem> findAll(Long userId){
        return cartRepository.findByUserId(userId);
    }

    @Override
    public CartItem findOne(Long userId, Long bookId){
        return cartRepository.findByUserIdAndBookId(userId, bookId);
    }

    @Override
    public void addItem(CartItem item){
        cartRepository.save(item);
    }

    @Override
    @Modifying
    @Transactional
    public void deleteItem(Long userId, Long bookId){
        cartRepository.deleteAllByUserIdAndBookId(userId, bookId);
    }
}
