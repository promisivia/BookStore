import React from 'react'
import {useLocation} from "react-router-dom";
import { Descriptions, Button, Modal} from 'antd';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import { ShoppingCartOutlined } from '@ant-design/icons';

import { addItem } from "../services/CartService"
import { addOrder, BookListItem, Order} from "../services/OrderService";
import { getBook } from "../services/BookService";
import { getUserId } from "../utils/StorageUtils"

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: 300,
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    button: {
        padding: theme.spacing(3),
    },
    description: {
        fontSize: 12,
        color: 'grey',
    },
    price: {
        color: '#F11727',
    },
    author: {
        fontSize: 14,
    }
}));

export default function BookDetail(){
    const classes = useStyles();
    const [info, setData] = React.useState([]);
    const bookId = parseInt(useLocation().search.split('=')[1]);

    React.useEffect(() => {
        getBook(bookId,(data)=>setData(data)).catch();
    }, [bookId]);

    function addToCart(){
        let userId = getUserId();
        addItem(userId, info.id).catch();
    }

    function buyNow() {
        Modal.confirm({
            content: '确认下单？',
            onOk(){
                let productList = [];
                productList.push(new BookListItem(info.id,1));
                let order = new Order(getUserId(),info.price,true,productList);
                addOrder(order,null).catch();
            }
        });
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <img alt={info.name} src={info.image} className={classes.image}/>
            </Grid>
            <Grid item xs={8}>
                <Descriptions className={classes.paper}>
                    <Descriptions.Item className={classes.title} span={3}>
                        <Typography variant="h6" gutterBottom>{info.name}</Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label={"作者"} span={3}>
                        <Typography gutterBottom>{info.author}</Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label={"ISBN"} span={3}>
                        <Typography gutterBottom>{info.isbn}</Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label={"分类"} span={3}>
                        {info.type}
                    </Descriptions.Item>
                    <Descriptions.Item label={"定价"} span={3}>
                        <Typography className={classes.price}>￥{info.price}</Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label={"状态 "} span={3}>
                        {info.inventory !== 0?
                            <span>有货<span className={"inventory"}>库存{info.inventory}件</span></span> :
                            <span className={"status"}>无货</span>}
                    </Descriptions.Item>
                    <Descriptions.Item label={"作品简介"} span={3}>
                        <Typography className={classes.description} align='justify'>{info.description}</Typography>
                    </Descriptions.Item>
                </Descriptions>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="baseline"
                    className={classes.button}
                >
                    <Button
                        type="danger"
                        size={"large"}
                        icon={<ShoppingCartOutlined/>} ghost
                        onClick={addToCart}
                        disabled={info.inventory === 0}
                    >
                        加入购物车
                    </Button>
                    <Button type="danger" size={"large"} onClick={buyNow} disabled={info.inventory === 0}>
                        立即购买
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}