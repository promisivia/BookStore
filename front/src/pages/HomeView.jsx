import React from 'react';
import '../css/Home.css'
import NavBar from '../components/base/NavBar'
import SideBar from '../components/base/SideBar'
import StoreCarousel from '../components/StoreCarousel'
import BookList from '../components/BookList'
import FootBar from "../components/base/FootBar";
import InfoBar from '../components/base/InfoBar'
import {SearchBar} from "../components/base/SearchBar";
import {Layout} from 'antd'
import {Grid} from '@material-ui/core';
import {getBooks} from "../services/BookService";
const { Header, Sider, Footer } = Layout;

export default function HomeView() {
    const [data, setData] = React.useState([]);
    const [query,setQuery] = React.useState('');

    React.useEffect(() => {
        getBooks((data)=>setData(data)).catch();
    }, []);

    const filteredData = data.filter(product=>{
        return product.name.toLowerCase().includes(query.toLowerCase())
    })

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
                    className="site-layout-background"
                    style={{background:"white", position:"20px"}}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <SearchBar
                        searchText="输入商品名称进行搜索……"
                        props={{query, setQuery}}
                    />
                    <StoreCarousel/>
                    {data.length === 0 ?
                        <InfoBar type="LOADING"/> : <BookList props={{filteredData}}/>
                    }
                </Grid>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}