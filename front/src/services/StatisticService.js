import axios from "axios";
import qs from "qs";

export function getSaleList(start, end, setData){
    axios.post("http://localhost:8814/statistic/sale",
        qs.stringify({start: start, end: end}))
        .then(response => {
            console.log(response)
            setData(response.data)
        })
        .catch(error => console.log(error));
}

export function getOwnConsumeRecord(id, start, end, setData, setTotal) {
    axios.post("http://localhost:8814/statistic/consume/own",
        qs.stringify({id: id, start: start, end: end}))
        .then(response => {
            setTotal({
                price: response.data.totalMoney,
                quantity: response.data.totalQuantity,
            });
        }).catch(error => console.log(error));
    axios.post("http://localhost:8814/statistic/consume/book",
        qs.stringify({id: id, start: start, end: end}))
        .then(response => {
            setData(response.data);
        }).catch(error => console.log(error));
}

export function getAllConsumeRecord(start, end, setData){
    axios.post("http://localhost:8814/statistic/consume/all",
        qs.stringify({start: start, end: end}))
        .then(response => {
            setData(response.data);
        }).catch(error => console.log(error));
}