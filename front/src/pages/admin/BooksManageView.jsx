import React from 'react';
import '../../css/Admin.css'

import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import BookManageTable from "../../components/admin/BookManageTable";
import FootBar from "../../components/base/FootBar";

import { Layout } from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export default function BooksManageView() {
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
                        <BookManageTable/>
                    </Content>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}