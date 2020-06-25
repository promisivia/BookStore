import React from 'react';
import '../../css/Home.css'
import { Layout } from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Card, CardContent } from '@material-ui/core';
import NavBar from '../../components/base/NavBar'
import SideBar from '../../components/base/SideBar'
import FootBar from "../../components/base/FootBar";
import {DateSelector} from "../../components/base/DatePicker";
import {getOwnConsumeRecord} from "../../services/StatisticService";
import {getUserId} from "../../utils/StorageUtils";
import {OwnConsumeRecordChart} from '../../components/admin/OwnConsumeRecordChart'

const { Header, Content, Sider, Footer } = Layout;

function getStartTime() {
    let start = new Date();
    const month = start.getMonth() - 1;
    start.setMonth(month);
    return start;
}

const useStyles = makeStyles({
    card: {
        marginBottom: 10,
        marginLeft: 20,
        marginTop:0,
        marginRight:0,
        padding: 30,
        fontSize: 20,
    },
});

export default function OwnStatisticView(){
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [total, setTotal] = React.useState({
        price: 0, quantity: 0,
    });
    const [state, setState] = React.useState({
        start: getStartTime(), end: new Date(),
    })
    console.log(state.start, state.end);

    React.useEffect(() => {
        getOwnConsumeRecord(getUserId(), state.start, state.end,
            (data) => setData(data),
            (data) => setTotal(data));
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
                    <Paper style={{marginBottom:20}}>
                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                            <DateSelector props={{state, setState}}/>
                        </Grid>
                    </Paper>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs>
                            <Paper>
                                <Grid container direction="column" justify="flex-start" alignItems="center">
                                    <Typography style={{marginTop:10}} variant="h6" component="h2">分类统计</Typography>
                                    <OwnConsumeRecordChart data={data}/>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Grid container direction="column" justify="flex-start" alignItems="stretch">
                                <Grid item xs>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography variant="h6" component="h2">购书总本数</Typography>
                                            <Typography >{total.quantity}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography variant="h6" component="h2">购书总金额</Typography>
                                            <Typography>￥{total.price}</Typography>
                                        </CardContent>
                                    </Card>`
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Content>
            </Layout>
            <Footer>
                <FootBar/>
            </Footer>
        </Layout>
    )
}