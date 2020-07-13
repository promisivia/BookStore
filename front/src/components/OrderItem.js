import React from 'react';
import {Card, Col, Row} from 'antd'
import {Typography} from '@material-ui/core';
import {Link} from "react-router-dom";

export function OrderItem({props}) {
    const { product } = props;
    const book = product.book;

    return(
        <Card key={book.id} type="inner">
            <Row>
                <Col span={4}>
                    <Link key={book.id} to={{pathname: '/details', search: '?id=' + book.id, target:"_blank"}} >
                        <img src={book.image} alt="book" height="65"/>
                    </Link>
                </Col>
                <Col span={10} className={{padding:"3%"}}>
                    <Typography>{book.name}</Typography>
                    <Typography>作者：{book.author}</Typography>
                </Col>
                <Col span={4}>
                    <Typography>￥{book.price}</Typography>
                </Col>
                <Col span={4}>
                    <Typography>购买数量：{product.quantity}</Typography>
                </Col>
            </Row>
        </Card>
    )
}