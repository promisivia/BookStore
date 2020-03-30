import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";
import { getBooks } from "../services/bookService";

const { Meta } = Card;

export class BookList extends React.Component{
    render(){
        let itemList = getBooks().map(product=>{
            return(
                <div className="item" key={product.id}>
                    <Link to={{pathname: '/details', search: '?id=' + product.id, target:"_blank"}} >
                        <Card
                            hoverable
                            style={{ width: "18rem" }}
                            cover={<img alt="book" src={product.img} />}
                        >
                            <Meta title={product.name} description={'￥'+ product.price} />
                            {/*<Button to="/" type="primary" shape="circle">+</Button>*/}
                        </Card>
                    </Link>
                </div>
            )
        });

        return(
            <div className="grid">
                {itemList}
            </div>
        )
    }
}