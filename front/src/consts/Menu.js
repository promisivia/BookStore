import {
    BookOutlined,
    ContainerOutlined,
    UserOutlined, IdcardOutlined, LineChartOutlined,
    ReadOutlined,
    SettingOutlined,
    ShoppingCartOutlined, UsergroupAddOutlined
} from "@ant-design/icons";
import React from "react";

const menuList = [
    {
        title: '主页',
        key: '/home',
        icon: <ReadOutlined/>,
        isPublic: true,
    },
    {
        title: '购物车',
        key: '/cart',
        icon: <ShoppingCartOutlined />,
        isPublic: true,
    },
    {
        title: '订单',
        key: '/orders',
        icon: <ContainerOutlined />,
        isPublic: true,
    },
    {
        title: '信息',
        key: '/profile',
        icon: <UserOutlined />,
        isPublic: true,
    },
    {
        title: '统计',
        key: '/statistic',
        icon: <LineChartOutlined/>,
        isPrivate: true,
    },
    {
        title: '管理',
        key: '/admin/manage',
        icon: <SettingOutlined />,
        children: [
            {
                title: '书籍管理',
                key: '/admin/manage/book',
                icon: <BookOutlined />,
            },
            {
                title: '订单管理',
                key: '/admin/manage/order',
                icon: <IdcardOutlined />,
            },
            {
                title: '用户管理',
                key: '/admin/manage/user',
                icon: <UsergroupAddOutlined/>,
            }
        ]
    },
    {
        title: '统计',
        key: '/admin/statistic',
        icon: <LineChartOutlined />,
        children: [
            {
                title: '个人购买统计',
                key: '/admin/statistic/own',
                icon: <LineChartOutlined/>,
            },
            {
                title: '书籍销量统计',
                key: '/admin/statistic/sale',
                icon: <BookOutlined />,
            },
            {
                title: '用户消费统计',
                key: '/admin/statistic/consume',
                icon: <IdcardOutlined />,
            },
        ]
    },
]

export default menuList;