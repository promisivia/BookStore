import axios from "axios";
import qs from "qs";
import {message} from "antd";

export const getBook = async (id,setData)=>{
    axios.post("http://localhost:8814/book/get/one", qs.stringify({ id: id }))
        .then(response =>setData(response.data))
        .catch(error=>console.log(error));
};

export const getBooks = async (query, setData)=>{
    axios.post("http://localhost:8814/book/get/all", qs.stringify({ query: query }))
        .then(response =>setData(response.data))
        .catch(error=>console.log(error));
};

export const editBook = async (book,setData)=>{
    axios.post("http://localhost:8814/book/edit",
        qs.stringify(book))
        .then(response => {
            if(response.data.status === 200){
                setData(response.data.data);
                message.success("修改成功")
            }else{
                message.error(response.data.message);
            }
        })
        .catch(error=>console.log(error));
};

export const addBook = async (book,setData)=>{
    axios.post("http://localhost:8814/book/add",
        qs.stringify(book))
        .then(response => {
            if(response.data.status === 200){
                setData(response.data.data);
                message.success("添加成功")
            }else{
                message.error(response.data.message);
            }
        })
        .catch(error=>console.log(error));
};

export const deleteBook = async (id)=>{
    axios.post("http://localhost:8814/book/delete",
        qs.stringify({id:id}))
        .then()
        .catch(error=>console.log(error));
};

export const checkBook = (book) => {
    const regExp = /^\+?[1-9][0-9]*$/
    for (const attribute in book){
        if(book[attribute] === null || book[attribute] === undefined || book[attribute]==="" ){
            message.error("字段"+attribute+"不能为空");
            return false;
        }
        if(!regExp.test(book["isbn"])){
            message.error("isbn必须是正整数");
            return false;
        }
        if(book["price"] <= 0){
            message.error("价格必须大于零");
            return false;
        }
        if(!regExp.test(book["inventory"]) && !(book["inventory"]===0)){
            message.error("库存必须是非负整数");
            return false;
        }
    }
    return true;
}