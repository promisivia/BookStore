import React from 'react';
import '../css/Home.css'
<<<<<<< HEAD

import { NavBar } from '../components/NavBar'
import SideBar from '../components/SideBar'
import { FootBar } from "../components/FootBar";
import { CartItem } from "../components/CartItem";
import { getBook } from "../services/bookService";

import { Layout, Card, Row, Col, Checkbox, Button } from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export class CartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList:[1,2,3
            ]};
    }
    render() {
        const header = (
            <Row>
                <Col span={5}>
                    <Checkbox onChange=''/>
                    <span style={{padding:"3px"}}>全选</span>
                </Col>
                <Col span={8}>商品信息</Col>
                <Col span={2}>单价</Col>
                <Col span={3}>数量</Col>
                <Col span={3}>总价</Col>
                <Col span={3}>操作</Col>
            </Row>
        );
        let cartList = (
            this.state.cartList.map(item=>{
               return(<CartItem info = {getBook(item)} />)
            })
        );
        return(
            <Layout>
                <Header>
                    <NavBar/>
                </Header>
                <Layout>
                    <Sider>
                        <SideBar/>
                    </Sider>
                    <Content className="site-layout-background">
                        <div style={{ margin: "1% 5%" }} className="item-info-head">
                            {header}
                        </div>
                        <div className="item-info-detail">
                            {cartList}
                        </div>
                        <div className="item-info-total site-card-border-less-wrapper">
                            <Card style={{ margin: "10px 5%" }}>
                                <Row>
                                    <Col span={3} offset={18}><span>总计：</span></Col>
                                    <Col span={3} offset={0}>
                                        <Button>结算</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Content>
                </Layout>
                <Footer>
                    <FootBar/>
                </Footer>
            </Layout>
        )
    }
=======
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
                            <Typography>选择</Typography>
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
>>>>>>> master
}