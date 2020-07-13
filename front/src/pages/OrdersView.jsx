import React from 'react';
import '../css/Home.css'
<<<<<<< HEAD

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
=======
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
import {getStartTime} from '../utils/TimeUtils'

const { Header, Content, Sider, Footer } = Layout;

export default function OrdersView(){
    const [data, setData] = React.useState([])
    const [loading,setLoading] = React.useState(true);
    const [state, setState] = React.useState({
        start: getStartTime(),
        end: new Date(),
        filtered: false,
    })
    const [query,setQuery] = React.useState('');

    React.useEffect(() => {
        getOrder(getUserId(), query, state.start, state.end, (data) => {setData(data)}).catch();
        setLoading(false);
    }, [query, state]);

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
                            <InfoBar type="NO_ORDER"/> : <OrderList props={{data}}/>
                    }
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
>>>>>>> master
}