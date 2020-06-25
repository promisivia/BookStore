import React from 'react';
import {getOrder} from '../services/OrderService'
import UserStorage from "../utils/StorageUtils";

export default function OrderList() {
    let [data, setData] = React.useState([])

    React.useEffect(() => {
        getOrder(getUserId(), (data) => {setData(data)}).catch();
    }, []);

    let listItem = (orderInfo) => {
        let title = " 订单号:" + orderInfo.orderId + "  成交日期" + orderInfo.date;
        let orderItem = orderInfo.bookList.map((order)=>{
            return bookItem(order);
        })
        return(
            <Card title={title}>
                <Row>
                    <Col span={16}>{orderItem}</Col>
                    <Col span={8} style={{"textAlign": "center"}}>
                        <span key="1">交易状态：{(orderInfo.payed)?"已付款":"待付款"}</span><br/>
                        <span key="2">成交总价：{orderInfo.price}</span>
                    </Col>
                </Row>
            </Card>
        );
    }

    let bookItem = (order) =>{
        const book = order.book;
        return(
            <Card key={book.id} type="inner" style={{"textAlign": "center"}}>
                <Row>
                    <Link key={book.id} to={{pathname: '/details', search: '?id=' + book.id, target:"_blank"}} >
                        <Col span={8}><img src={book.image} alt="book" height="65"/></Col>
                    </Link>
                    <Col span={10}>
                        <span>{book.name}</span><br/>
                        <span>作者：{book.author}</span>
                    </Col>
                    <Col span={4}>
                        <span>￥{book.price}</span>
                    </Col>
                    <Col span={4}>
                        <span>购买数量：{order.quantity}</span>
                    </Col>
                </Row>
            </Card>
        )
    }

    return(
        data.map(item =>{
            return listItem(item);
        })
    )
}