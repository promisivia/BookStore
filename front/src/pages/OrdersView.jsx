import React from 'react';
import '../css/Home.css'
import {Layout} from 'antd'
import {Grid,Paper,CircularProgress} from '@material-ui/core';
import NavBar from '../components/base/NavBar'
import SideBar from '../components/base/SideBar'
import FootBar from "../components/base/FootBar";
import OrderList from '../components/OrderList'
import {DateSelector} from "../components/base/DatePicker";
import {SearchBar} from "../components/base/SearchBar";
import {getOrder} from "../services/OrderService";
import {getUserId} from "../utils/StorageUtils";
import InfoBar from "../components/base/InfoBar";

const { Header, Content, Sider, Footer } = Layout;

export default function OrdersView(){
    const [data, setData] = React.useState([])
    const [loading,setLoading] = React.useState(true);
    const [state, setState] = React.useState({
        start: new Date(),
        end: new Date(),
        filtered: false,
    })
    const [query,setQuery] = React.useState("");

    React.useEffect(() => {
        getOrder(getUserId(), (data) => {setData(data)}).catch();
        setLoading(false);
    }, [state,query]);

    const filteredData = data.filter( item => {
        // check date
        state.start.setHours(0);
        state.end.setHours(24);
        let itemDate = new Date(item.date).getTime();
        if (state.filtered && (itemDate < state.start.getTime() || itemDate > state.end.getTime())){
            return false;
        }
        // check query
        let containQuery = false;
        item.productList.forEach(product =>{
            if(product.book.name.toLowerCase().includes(query.toLowerCase()))
                containQuery =  true;
        })
        return containQuery;
    });

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
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <SearchBar
                                searchText="输入商品名称进行搜索……"
                                props={{query, setQuery}}
                            />
                            <DateSelector props={{state, setState}}/>
                        </Grid>
                    </Paper>
                    {loading ?
                        <CircularProgress/> :
                        data.length === 0 ?
                            <InfoBar type="NO_ORDER"/> : <OrderList props={{filteredData}}/>
                    }
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}