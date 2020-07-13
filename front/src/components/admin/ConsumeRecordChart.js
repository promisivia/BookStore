import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label, LabelList } from'recharts';
import { Paper, Tab, Tabs } from "@material-ui/core";

const sortByMoney = (a, b) => b.totalMoney - a.totalMoney;
const sortByQuantity = (a, b) => b.totalQuantity - a.totalQuantity;

export default function ConsumeRecordChart({props}){
    const {data} = props;
    const [state, setState] = React.useState({
        yLabel: '购买书籍数(￥)', dataKey: 'totalQuantity'
    })
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setState({
            yLabel: newValue ? '购买书籍总金额(￥)':'购买书籍数',
            dataKey: newValue ? 'totalMoney':'totalQuantity',
        })
        data.sort(newValue ? sortByMoney:sortByQuantity);
    };

    return (
        <Paper style={{marginTop:20}}>
            <Tabs
                style={{flexGrow: 1}}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                centered
            >
                <Tab label="购买数量" />
                <Tab label="购买金额" />
            </Tabs>
            <BarChart
                layout="vertical"
                width={1200}
                height={400}
                data={data}
                margin={{ top: 30, right: 200, bottom: 30, left: 100 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number">
                    <Label value={state.yLabel} position="bottom" />
                </XAxis>
                <YAxis dataKey="userId" type="category">
                    <Label value="用户ID" angle={-90} position='left' />
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top"/>
                <Bar dataKey={state.dataKey} fill="#8884d8">
                    <LabelList value="number" position="right" />
                </Bar>
            </BarChart>
        </Paper>
    );
}