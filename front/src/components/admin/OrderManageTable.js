import React from 'react';
import MaterialTable from 'material-table';
import {List} from 'antd'

export default function OrderManageTable({props}) {
    const { data } = props;
    return (
        <MaterialTable
            title = "所有订单"
            detailPanel={rowData => {
                console.log(rowData)
                return (
                    <List
                        style={{padding:'0 10%'}}
                        itemLayout="horizontal"
                        dataSource={rowData.productList}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<img height='40' alt={item.book.name} src={item.book.image} />}
                                    title={<a href={"/details?id=" + item.book.id}>{item.name}</a>}
                                    description={"单价：" + item.book.price + "  购买数量：" +item.quantity}
                                />
                            </List.Item>
                        )}
                    />
                )
            }}
            columns={[
                { title: '订单号', field: 'orderId' },
                { title: '用户ID', field: 'userId' },
                { title: '总价', field: 'price'},
                { title: '交易日期', field: 'date',
                    render: data=>{
                        let date = new Date(data.date).toLocaleString('en');
                        return <div>{date}</div>;
                    }},
                { title: '订单状态', field: 'payed', lookup: { true: '已付款', false: '待付款' },},
            ]}
            data={data}
            options={{
                selection: false,
                filtering: false,
                search: false,
            }}
        />
    )
}