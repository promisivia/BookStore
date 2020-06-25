package com.bookstore.dto;

public class SaleRecordDto extends BookDto{
    Long quantity;

    public SaleRecordDto(){
    }

    public SaleRecordDto(Long quantity) {
        this.quantity = quantity;
    }

    public SaleRecordDto(BookDto bookDto, Long quantity) {
        super(bookDto.getId(), bookDto.getIsbn(), bookDto.getName(), bookDto.getType(), bookDto.getAuthor(),
                bookDto.getPrice(), bookDto.getInventory(), bookDto.getImage(), bookDto.getDescription());
        this.quantity = quantity;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}

