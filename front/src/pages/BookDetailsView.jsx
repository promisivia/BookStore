import React  from 'react';
import '../css/Home.css';
import NavBar from '../components/base/NavBar'
import SideBar from "../components/base/SideBar";
import BookDetail from "../components/BookDetail";
import FootBar from "../components/base/FootBar";
import {Layout, PageHeader} from 'antd'
import {history} from "../utils/HistoryUtils";
import {Paper} from "@material-ui/core";

const { Header, Content, Sider, Footer } = Layout;

export default function BookDetailsView(){
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
                    <Paper>
                        <PageHeader
                            className="site-page-header"
                            onBack={() => history.goBack()}
                            title="书籍详情"
                        />
                        <BookDetail/>
                    </Paper>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}