import React from 'react';
import '../css/Home.css'
import { NavBar } from '../components/NavBar'
import SideBar from "../components/SideBar";
import { BookDetail } from "../components/BookDetail";
import { FootBar } from "../components/FootBar";
import { getBook } from "../services/bookService";
import { Layout } from 'antd'

const { Header, Content, Sider, Footer } = Layout;

export class BookDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bookInfo:null};
    }
    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('=');
        const bookId = parseInt(arr[1]);
        this.setState({bookInfo:getBook(bookId)});
    }
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
                            <BookDetail info={this.state.bookInfo}/>
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