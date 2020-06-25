package com.bookstore.utils.response;

import com.bookstore.constant.ResponseCode;

import java.io.Serializable;

public class HttpResponse implements Serializable {
    private Integer status;
    private String message;
    private Object data;

    public HttpResponse(){}

    public HttpResponse(ResponseCode code, Object data) {
        this.status = code.status();
        this.message = code.message();
        this.data = data;
    }

    public static HttpResponse success(){
        HttpResponse response = new HttpResponse();
        response.setResponseCode(ResponseCode.SUCCESS);
        return response;
    }

    public static HttpResponse success(Object data){
        return new HttpResponse(ResponseCode.SUCCESS, data);
    }

    public static HttpResponse fail(ResponseCode code){
        HttpResponse response = new HttpResponse();
        response.setResponseCode(code);
        return response;
    }

    public void setResponseCode(ResponseCode code) {
        this.status = code.status();
        this.message = code.message();
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
