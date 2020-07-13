import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../services/UserService'

const onFinish = values => {
    login(values).catch();
};

export default function LoginForm() {
    return (
        <Form
            name="normal_login"
            className="login-form"
            style={{width:"250px",padding:"0 5% "}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: '请输入用户名' },
                    { min:3, message: '用户名需要大于3个字符'},
                    { max:8, message: '用户名需要小于8个字符'},
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
                name="password" rules={[{ required: true, message: '请输入密码' },
                { min:3, message: '密码需要大于3个字符'},
                { max:8, message: '密码需要小于8个字符'},
            ]}><Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
            />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item style={{margin:"5%", width:"90%"}}>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    登陆
                </Button>
                <a className="login-form-forgot" href="/">
                    忘记密码
                </a>
                <Link to="./registration">立刻注册</Link>
            </Form.Item>
        </Form>
    );
}