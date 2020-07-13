package com.bookstore.document;

import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Document(collection="USER_AVATAR")
public class Avatar {
    private Long id;
    private String avatar;

    public Avatar(){
    }

    public Avatar(Long userId, String avatar) {
        this.id = userId;
        this.avatar = avatar;
    }
    @Id
    public Long getUserId() {
        return id;
    }

    public void setUserId(Long userId) {
        this.id = userId;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
