import axios from "axios";
import qs from "qs";
import {history} from "../utils/HistoryUtils";
import {message} from "antd";

export function Order(userId,price,payed,productList) {
    this.userId = userId;
    this.price = price;
    this.payed = payed;
    this.productList = productList;
}

export function BookListItem(bookId,quantity) {
    this.bookId = bookId;
    this.quantity = quantity;
}

export const addOrder = async (order,setData)=> {
    let requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(order),
        redirect: 'follow'
    };
    fetch("http://localhost:8814/order/add", requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result);
            if(result.status === 200){
                message.success("添加订单成功")
                history.push('./orders');
            }else{
                setData(result.data);
                console.log(result.data)
                message.error(result.message);
            }
        })
        .catch(error => console.log(error));
}

export const getOrder = async (id,setData)=> {
    axios.post("http://localhost:8814/order/get/one", qs.stringify({userId: id}))
        .then(response => {
            setData(response.data)
        })
        .catch(error => console.log(error));
}

export const getAllOrder = async (setData)=> {
    axios.post("http://localhost:8814/order/get/all")
        .then(response => {
            setData(response.data)
        })
        .catch(error => console.log(error));
}
