import React from 'react';
import '../css/Home.css'

import { NavBar } from '../components/NavBar'
import SideBar from '../components/SideBar'
import { SearchBox } from "../components/SearchBox";
import { BookCarousel } from '../components/BookCarousel'
import { BookList } from '../components/BookList'
import { FootBar } from "../components/FootBar";

import { Layout } from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export class HomeView extends React.Component {
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
                            <SearchBox/>
                            <BookCarousel/>
                            <BookList/>
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