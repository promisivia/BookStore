import React from 'react';
import '../css/Home.css'

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
}