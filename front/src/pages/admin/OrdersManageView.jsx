import React from 'react';
import '../../css/Home.css'
import {Layout} from 'antd'
import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import FootBar from "../../components/base/FootBar";
import OrderManageTable from '../../components/admin/OrderManageTable'
import {DateSelector} from "../../components/base/DatePicker";
import {SearchBar} from "../../components/base/SearchBar";
import {Grid} from "@material-ui/core";
import {getAllOrder} from '../../services/OrderService'
import {getStartTime} from '../../utils/TimeUtils'

const { Header, Content, Sider, Footer } = Layout;

export default function OrdersManageView(){
    const [data, setData] = React.useState([])
    const [state, setState] = React.useState({
        start: getStartTime(),
        end: new Date(),
        filtered: false,
    })
    const [query,setQuery] = React.useState('');

    React.useEffect(() => {
        getAllOrder(query, state.start, state.end,(data) => {setData(data)}).catch();
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
                    <OrderManageTable props={{data}}/>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}