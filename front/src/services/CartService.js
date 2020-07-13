import axios from "axios";
import qs from "qs";
import {message} from "antd";

export function Item(userId,bookId,quantity,selected){
    this.userId = userId;
    this.bookId = bookId;
    this.quantity = quantity;
    this.selected = selected;
}

export const getCart = async (id,setData)=>{
    axios.post("http://localhost:8814/cart/get", qs.stringify({ id: id }))
        .then(response =>setData(response.data))
        .catch(error=>console.log(error));
};

export const addItem = async (userId,bookId)=>{
    axios.post("http://localhost:8814/cart/add",
        qs.stringify({userId:userId, bookId:bookId, quantity:1, selected: true}))
        .then(response =>{
            message.success("成功加入");
        })
        .catch(error=>console.log(error));
};

export const updateItem = async (item,setData)=>{
    axios.post("http://localhost:8814/cart/update",
        qs.stringify(item))
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error=>console.log(error));
};

export const deleteItem = async (userId,bookId,setData)=>{
    axios.post("http://localhost:8814/cart/delete",
        qs.stringify({userId:userId, bookId:bookId}))
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error=>console.log(error));
};

