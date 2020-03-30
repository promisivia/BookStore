import React from 'react';
import MaterialTable from 'material-table';
import { getBooks } from "../services/bookService";

export default function OrderTable() {
    return (
        <MaterialTable
            title="My Orders"
            detailPanel={rowData => {
                return (
                    <iframe
                        width="100%"
                        height="300"
                        src={rowData.img}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                )
            }}
            columns={[
                { title: '订单号', field: 'orderID' },
                { title: '订单详情', field: 'orderDetail' },
                { title: '日期', field: 'orderDate'},
                { title: '订单状态', field: 'orderState', lookup: { 1: '已付款', 0: '待付款' },},
            ]}
            data={[
                { orderID: '1000', orderDetail: 'Baran', orderDate: "2020.3.27", orderState: 1 },
                { orderID: '1001', orderDetail: 'Baran', orderDate: "2020.3.26", orderState: 0 },
            ]}
            options={{
                selection: true,
                selectionProps: rowData => ({
                    disabled: rowData.orderState === 1,
                    color: 'primary'
                }),
                filtering: true,
            }}
            actions={[
                {
                    tooltip: '结算此订单',
                    icon: 'delete',
                    onClick: (evt, data) => alert('结算此订单')
                }
            ]}
        />
    )
}