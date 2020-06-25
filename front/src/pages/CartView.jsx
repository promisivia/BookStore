import React from 'react';
import '../css/Home.css'
import NavBar from '../components/base/NavBar'
import SideBar from '../components/base/SideBar'
import FootBar from "../components/base/FootBar";
import CartList from "../components/CartList";
import { Layout } from 'antd'
import {CircularProgress, Grid, Paper, Typography} from "@material-ui/core";
import {getUserId} from "../utils/StorageUtils";
import {getCart} from "../services/CartService";

const { Header, Sider, Footer } = Layout;

export default function CartView(){
    const [cartList, setCartList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const userId = getUserId();

    React.useEffect(() => {
        getCart(userId,(data)=>setCartList(data)).catch();
        setLoading(false);
    },[userId]);

    const CartHeader = () => {
        return (
            <Paper>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Grid item xs={12} sm={2} container direction="row" alignItems="center">
                        <Grid item xs={5}>
                            <Typography alignCenter>选择</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>图片</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography>商品信息</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography>单价</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography>数量</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography>库存</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography>操作</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    return(
        <Layout>
            <Header>
                <NavBar/>
            </Header>
            <Layout>
                <Sider>
                    <SideBar/>
                </Sider>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    className="site-layout-background"
                >
                    <CartHeader/>
                    {loading ?
                        <CircularProgress/> :
                        <CartList props={{cartList, setCartList}}/>
                    }
                </Grid>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}