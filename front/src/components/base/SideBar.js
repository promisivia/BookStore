import React from 'react'
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import menuList from '../../consts/Menu';
import { getRoleMenu } from '../../utils/StorageUtils'

const { SubMenu } = Menu;

class SideBar extends React.Component{
    hasAuth = (item) =>{
        const {key, isPublic} = item;
        const menus = getRoleMenu();
        return !!(menus.indexOf(key) !== -1 || isPublic);
    }

    getMenuNodes = (menuList)=>{
        return menuList.map(item => {
            if(this.hasAuth(item)){
                if(!item.children){
                    return(
                        <Menu.Item key={item.key}>
                            {item.icon}
                            <Link to={item.key}>{item.title}</Link>
                        </Menu.Item>
                    )
                }else{
                    const cItem = item.children.find(cItem=>
                        cItem.key===this.props.location.pathname
                    )
                    if(cItem) this.openKey = item.key
                    return(
                        <SubMenu
                            key={item.key}
                            title={
                                <span>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </span>
                            }
                        >
                            {this.getMenuNodes(item.children)}
                        </SubMenu>
                    )
                }
            }else return null
        })
    }
    UNSAFE_componentWillMount(){
        this.MenuNodes = this.getMenuNodes(menuList);
    }

    render(){
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <div>
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 5, padding: "20px 0"}}
                    theme="light"
                    defaultSelectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                >
                    {this.MenuNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideBar);