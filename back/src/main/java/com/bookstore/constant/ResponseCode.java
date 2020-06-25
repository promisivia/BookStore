package com.bookstore.constant;

public enum ResponseCode {
    /* success */
    SUCCESS(200,"成功"),

    /* parameter fail */
    PARAM_IS_INVALID(0,"参数无效"),

    /* auth fail */
    USER_ALREADY_REGISTERED(1001,"用户名已被注册"),
    USER_NOT_REGISTERED(1002,"用户名未注册"),
    USER_LOGIN_ERROR(1003,"用户名或密码错误"),
    USER_ACCOUNT_FORBIDDEN(1004,"您的账号已经被禁用"),

    /* order and cart */
    OUT_OF_STOCK(2001,"部分商品缺货,提交订单失败");

    private final Integer status;
    private final String message;

    ResponseCode(Integer status, String message){
        this.message = message;
        this.status = status;
    }

    public Integer status() {
        return status;
    }

    public String message() {
        return message;
    }

}
