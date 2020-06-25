import React from 'react';
import '../../css/Home.css'
import {Layout} from 'antd'
import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import FootBar from "../../components/base/FootBar";
import UsersManageTable from '../../components/admin/UsersManageTable'

const { Header, Content, Sider, Footer } = Layout;

export default function UsersManageView(){
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
                        <UsersManageTable/>
                    </Content>
                </Content></Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}