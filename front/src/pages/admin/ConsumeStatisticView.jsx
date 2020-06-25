import React from 'react';
import '../../css/Home.css'
import { Layout } from 'antd'
import { Grid, Paper } from '@material-ui/core';
import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import FootBar from "../../components/base/FootBar";
import {DateSelector} from "../../components/base/DatePicker";
import {getAllConsumeRecord} from "../../services/StatisticService";
import ConsumeRecordChart from '../../components/admin/ConsumeRecordChart'

const { Header, Content, Sider, Footer } = Layout;

function getStartTime() {
    let start = new Date();
    const month = start.getMonth() - 1;
    start.setMonth(month);
    return start;
}

export default function ConsumeStatisticView(){
    const [data, setData] = React.useState([])
    const [state, setState] = React.useState({
        start: getStartTime(),
        end: new Date(),
    })
    console.log(state.start, state.end);

    React.useEffect(() => {
        getAllConsumeRecord(state.start, state.end,
            (data) => {setData(data)});
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
                    <ConsumeRecordChart props={{data}}/>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}