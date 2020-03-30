import React from 'react'
import { Layout, Row, Col } from 'antd';
import logo from '../assets/logo.jpg'
const { Header } = Layout;

export class NavBar extends React.Component{
    render() {
        return(
            <Header className="header">
                <Row>
                    <Col span={20} className="logo">
                        <img src={logo} alt="logo" style={{height:'50px',floating:"left"}}/>
                    </Col>
                    <Col span={4}>
                        <span style={{color:"white",padding:"10px"}}>Hello,Admin!</span>
                        {/*eslint-disable-next-line*/}
                        <a href="#">sign out</a>
                    </Col>
                </Row>
            </Header>
        );
    }
}