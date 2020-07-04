import React from 'react'
import { Grid, CardActionArea, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import InfoBar from './base/InfoBar'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        width: 250,
        margin: "2%"
    },
    media: {
        height: 300,
    },
    price: {
        color: '#F11727',
    },
    title: {
        fontSize: 16,
        display: '-webkit-box',
        overflow: 'hidden',
        webkitBoxOrient: 'vertical',
        webkitLineClamp: 1,
    },
    author: {
        fontSize: 14,
    }
});

export default function BookList({props}){
    const classes = useStyles();
    const data = props.data;
    return(
        data.length === 0?
            <InfoBar type="NOT_FOUND"/> :
            <Grid container className={classes.root} justify="flex-start" spacing={2}>
                {data.map((product,key)=>{
                    return(
                        <Link
                            className={classes.card}
                            key={key}
                            to={{pathname: '/details', search: '?id=' + product.id, target:"_blank"}}
                        >
                            <Card variant={"outlined"}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.image}
                                        title={product.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" className={classes.price}>
                                            ￥{product.price}
                                        </Typography>
                                        <Typography className={classes.title}>
                                            {product.name}
                                        </Typography>
                                        <Typography className={classes.author} color={"textSecondary"}>
                                            作者:{product.author}
                                        </Typography>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="space-between"
                                            alignItems="baseline"
                                        >
                                            <Typography className={classes.author} color={"textSecondary"}>
                                                ISBN:{product.isbn}
                                            </Typography>
                                            <Typography className={classes.author} color={"textSecondary"}>
                                                库存:{product.inventory}
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    )})}
            </Grid>
    )
}