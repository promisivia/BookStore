import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { history } from '../../utils/HistoryUtils'
import { getUser, removeUser } from '../../utils/StorageUtils'
import { Avatar, Dropdown, Menu, Layout, Modal, Row, Col } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
const { Header } = Layout;
moment().format('LLL');

export default function NavBar(){
    const user = getUser();
    let logout = () => {
        Modal.confirm({
            content: '确认退出？',
            onOk(){
                removeUser();
                history.replace('/login');
            }
        });
    }
    let avatar = () =>{
        if(user.avatar==null)
            return <Avatar icon={<UserOutlined />} />
        else return <Avatar src={user.avatar} />
    }

    let menu = (
        <Menu>
            <Menu.Item>
                <Link to='/profile'>个人信息</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/cart'>购物车</Link>
            </Menu.Item>
            <Menu.Item onClick={logout}>
                退出登陆
            </Menu.Item>
        </Menu>
    );
    return(
        <Header className="header">
            <Row>
                <Col span={21} className="logo">
                    <img src={logo} alt="logo" style={{height:'50px',floating:"left"}}/>
                </Col>
                <Col span={3}>
                    <span style={{color:"white",padding:"10px"}}>Hello,{user.username}!</span>
                    <Dropdown overlay={menu} placement="bottomRight">
                        {avatar()}
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );
}