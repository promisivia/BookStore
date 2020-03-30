import React from 'react';
import '../css/Home.css'

import { NavBar } from '../components/NavBar'
import SideBar from '../components/SideBar'
import { FootBar } from "../components/FootBar";
import OrderTable from '../components/OrderTable'
import {Layout} from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export class OrdersView extends React.Component {
    render() {
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
                        <Content style={{background:"white", position:"20px"}}>
                            <OrderTable/>
                        </Content>
                    </Content>
                </Layout>
                <Footer>
                    <FootBar/>
                </Footer>
            </Layout>
        )
    }
}