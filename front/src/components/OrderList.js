import React from 'react';
import {OrderItem} from './OrderItem'
import {Grid,Paper,Typography,makeStyles} from '@material-ui/core';
import {Card} from "antd";

const useStyles = makeStyles((theme) => ({
    time: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        fontWeight: "bold",
        fontSize: 16
    },
    normal: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

export default function OrderList({props}) {
    const classes = useStyles();
    const { filteredData } = props;
    return(
        filteredData.map((item)=> {
            const date = new Date(item.date).toLocaleString('zh');
            return (
                <Paper style={{padding:"2%"}}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Typography className={classes.time}>{date}</Typography>
                        <Typography className={classes.normal}>订单号:{item.orderId}</Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="stretch"
                        className={classes.normal}
                    >
                        <Grid item xs={9} >
                            {item.productList.map((product)=>{
                                return <OrderItem props={{product}}/>;
                            })}
                        </Grid>
                        <Grid item xs>
                            <Card type="inner" style={{height:"100%",textAlign:"center"}}>
                                <Typography className={classes.time}>￥{item.price}</Typography>
                                <Typography>(含运费)</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card type="inner" style={{height:"100%"}}>
                                <Typography>{(item.payed)?"交易成功":"等待付款"}</Typography>
                                <Typography>订单详情</Typography>
                                <Typography>查看物流</Typography>
                                <Typography>投诉商家</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            )
        })
    )
}