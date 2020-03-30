import {Card, Checkbox, Col, Row, InputNumber, Button} from "antd";
import React from "react";

export class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number:1}
    };
    handleChange=(value)=>{
        console.log(value);
        this.setState({number: value});
    };
    render(){
        let {info} = this.props;
        if(info == null){
            return null;
        }
        return(
            <div className="site-card-border-less-wrapper">
                <Card style={{ margin: "0 5%" }}>
                    <Row>
                        <Col span={1}>
                            <Checkbox onChange=''/>
                        </Col>
                        <Col span={4}>
                            <img src={info.img} alt="book" height="120"/>
                        </Col>
                        <Col span={8}>
                            <span>{info.description}</span>
                        </Col>
                        <Col span={2}>
                            <span>￥{info.price}</span>
                        </Col>
                        <Col span={3}>
                            <InputNumber min={1} defaultValue={this.state.number} onChange={this.handleChange} />
                        </Col>
                        <Col span={3}>
                            <span>￥{info.price*this.state.number}</span>
                        </Col>
                        <Col span={3}>
                            <Button>删除</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}