import React from 'react';
import '../css/Home.css'
import {Layout} from 'antd'
import NavBar from '../components/base/NavBar'
import SideBar from '../components/base/SideBar'
import FootBar from "../components/base/FootBar";
import Profile from '../components/Profile'

const { Header, Content, Sider, Footer } = Layout;

export default function ProfileView(){
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
                        <Profile/>
                    </Content>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}