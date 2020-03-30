import React from 'react'
import { Menu } from 'antd';
import {
    ShoppingCartOutlined,
    ReadOutlined,
    ContainerOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import { Link, withRouter } from "react-router-dom";

class SideBar extends React.Component {
    render() {
        const path = this.props.location.pathname;
        console.log(path);
        return (
            <div>
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 5, padding: "20px 0"}}
                    theme="light"
                    defaultSelectedKeys={[path.toLocaleLowerCase()]}
                >
                    <Menu.Item key="/home"><ReadOutlined/>
                        <Link to='/home'>Books</Link>
                    </Menu.Item>
                    <Menu.Item key="/cart"><ShoppingCartOutlined />
                        <Link to='/cart'>MyCart</Link>
                    </Menu.Item>
                    <Menu.Item key="/orders"><ContainerOutlined />
                        <Link to='/orders'>MyOrders</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin"><IdcardOutlined />
                        <Link to='/admin'>Admin</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideBar);