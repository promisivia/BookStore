import React from 'react';
import '../css/Admin.css'

import { NavBar } from '../components/NavBar'
import SideBar from '../components/SideBar'
import ManageTable from "../components/ManageTable";
import { FootBar } from "../components/FootBar";

import { Layout } from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export class AdminView extends React.Component {
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
                            <ManageTable/>
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