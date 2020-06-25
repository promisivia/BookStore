import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import NOT_FOUND from "../../assets/notFound.jpg"
import LOADING from "../../assets/loading.jpg"
import TO_ADD from "../../assets/addItem.jpg"

export default function InfoBar({type}){
    let image, context;
    switch (type) {
        case 'NOT_FOUND':
            context = "没有符合条件的宝贝，请尝试其他搜索条件";
            image = NOT_FOUND
            break;
        case 'LOADING':
            context = "";
            image = LOADING
            break;
        case 'TO_ADD':
            context = "购物车空空如也，快去浏览哦";
            image = TO_ADD
            break;
        case 'NO_ORDER':
            context = "您目前还没有订单记录，快去逛逛吧";
            image = TO_ADD
            break;
        default:
            break;
    }
    return(
        <Paper>
            <Grid container direction="row" justify="center" alignItems="center">
                <img alt={type} src={image} style={{marginBottom:"10%"}}/>
                <Typography center>{context}</Typography>
            </Grid>
        </Paper>
    )
}