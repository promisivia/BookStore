import React from 'react';
import { register } from '../../services/UserService'
import { Form, Input, Tooltip, Checkbox, Button,} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const formItemLayout = {
    labelCol: {xs: {span: 24,}, sm: {span: 8,},},
    wrapperCol: {xs: {span: 24,}, sm: {span: 16,},},
};
const tailFormItemLayout = {
    wrapperCol: {xs: {span: 24, offset: 0,}, sm: {span: 20, offset: 2,},},
};

export default function RegisterForm(){
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        register(values).catch(error=>console.log(error));
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            style={{width:"300px"}}
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="username"
                label={
                    <span>昵称&nbsp;
                        <Tooltip title="你希望大家如何称呼你">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }
                rules={[
                    {required: true, message: '请输入你的昵称，3-8个字符', whitespace: true,},
                    { min:3, message: '昵称需要大于3个字符'},
                    { max:8, message: '昵称需要小于8个字符'},
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {required: true, message: '请输入你的密码，3-8个字符'},
                    {min:3, message: '密码需要大于3个字符'},
                    {max:8, message: '密码需要小于8个字符'},
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请再次确认你的密码!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('两次输入的密码不相同!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="email"
                label="电子邮箱"
                rules={[
                    {
                        type: 'email',
                        message: '请填写正确的邮箱!',
                    },
                    {
                        required: true,
                        message: '请输入邮箱',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('需要阅读《服务条款》'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    我同意<a href="/">服务条款</a>和<a href="/">隐私政策</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{width:"100%"}}>
                    立刻注册
                </Button>
                <Link to="./login" style={{}}>已有账号</Link>
            </Form.Item>
        </Form>
    );
};