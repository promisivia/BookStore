import React from 'react';
import '../../css/Admin.css'

import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import SaleRecordTable from "../../components/admin/SaleRecordTable";
import FootBar from "../../components/base/FootBar";
import {DateSelector} from "../../components/base/DatePicker";
import {Grid, Paper} from "@material-ui/core";
import { Layout } from 'antd'
import {getSaleList} from "../../services/StatisticService";
const { Header, Content, Sider, Footer } = Layout;

function getStartTime() {
    let start = new Date();
    const month = start.getMonth() - 1;
    start.setMonth(month);
    return start;
}

export default function SaleStatisticView() {
    const [data, setData] = React.useState([])
    const [state, setState] = React.useState({
        start: getStartTime(),
        end: new Date(),
    })
    console.log(state.start, state.end);

    React.useEffect(() => {
        getSaleList(state.start, state.end,data => setData(data));
    }, [state]);

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
                            <DateSelector props={{state, setState}}/>
                        </Grid>
                    </Paper>
                    <SaleRecordTable props={{data}}/>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}