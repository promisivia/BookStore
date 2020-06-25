import React from "react";
import {Modal} from "antd";
import {Grid, makeStyles, Paper, Button, Typography} from "@material-ui/core";
import {CartItem} from "./CartItem";
import {OrderItem} from "./OrderItem";
import InfoBar from "./base/InfoBar";
import {addOrder, Order, BookListItem} from "../services/OrderService"
import {getUser, getUserId} from "../utils/StorageUtils";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "1% 0",
        padding: "1%"
    },
    word: {
        margin: "0 1%",
    },
    price: {
        color: '#F11727',
        fontSize: 25,
        fontWeight: "bolder",
    },
    tag: {
        fontSize: 20,
    },
}));

export default function CartList({props}) {
    const classes = useStyles();
    const userId = getUserId();
    const [visible, setVisible] = React.useState(false);
    const {cartList, setCartList} = props;

    const totalPrice = () => {
        let totalPrice = 0;
        if (cartList === null) return totalPrice;
        cartList.forEach(item => {
            if (item.selected === true) totalPrice += item.book.price * item.quantity;
        })
        return totalPrice.toFixed(2);
    }

    const isDisable = () => {
        return totalPrice() - 0 === 0
    }

    const onOrderSubmit = () => {
        let totalPrice = 0;
        let productList = [];
        cartList.forEach(item => {
            const book = item.book;
            if (item.selected === true) {
                totalPrice += book.price * item.quantity;
                productList.push(new BookListItem(book.id, item.quantity));
            }
        })
        let order = new Order(userId, totalPrice, true, productList);
        addOrder(order,
            (data) => setCartList(data)).catch();
    }

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    return (cartList.length === 0) ?
        <InfoBar type="TO_ADD"/> :
        <Grid>
            {cartList.map(item => {
                return <CartItem key={item.id} props={{item, userId, setCartList}}/>;
            })}
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >
                    <Grid container className={classes.word} direction="row" justify="flex-end" alignItems="center">
                        总计:
                        <Typography className={classes.tag}>￥</Typography>
                        <Typography className={classes.price}>{totalPrice()}</Typography>
                        <Button className={classes.word} variant="outlined" onClick={showModal}
                                disabled={isDisable()}>结算</Button>
                    </Grid>
                    <Modal
                        title="确认订单信息"
                        visible={visible}
                        onOk={onOrderSubmit}
                        onCancel={hideModal}
                        okText="确认"
                        cancelText="取消"
                        width={800}
                    >
                        <Grid
                            container
                            direction="column"
                            justify="flex-end"
                        >
                            {cartList.map(product => {
                                return product.selected ? <OrderItem props={{product}}/> : null
                            })}
                            <Grid container alignItems="flex-end">
                                <Typography>收货人：{getUser().username}</Typography>
                                <Grid container direction="row" alignItems="center">
                                    实付款：
                                    <Typography className={classes.tag}>￥</Typography>
                                    <Typography className={classes.price}>{totalPrice()}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>
                </Grid>
            </Paper>
        </Grid>
}