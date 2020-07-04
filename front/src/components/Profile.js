import React from 'react'
import "../css/Profile.css"
import { Form, message, Input, Button, Upload, Typography } from 'antd';
import { LoadingOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { getUser } from "../utils/StorageUtils"
import { setProfile } from "../services/UserService"

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

export default function Profile() {
    const user = getUser();
    const [state,setState] = React.useState({
        avatar:user.avatar,
        information:null,
        loading: false
    });

    const onFinish = values => {
        const data = {userId: user.userId, avatar: state.avatar }
        setProfile(data,setState).catch()
    };

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setState({avatar:reader.result, loading: false})
        }
    }

    return (
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} style={{padding:'2% 0'}} onFinish={onFinish}>
            <Form.Item label="昵称" {...formItemLayout}>
                <Typography editable={{ onChange: false }}>{user.username}</Typography>
            </Form.Item>
            <Form.Item label="邮箱" {...formItemLayout}>
                <Typography editable={{ onChange: true }}>{user.email}</Typography>
            </Form.Item>
            <Form.Item label="头像" {...formItemLayout}>
                <Form.Item name="Avatar" noStyle>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                    >
                        {state.avatar ?
                            <img src={state.avatar} alt="avatar" style={{ width: '100%' }} /> :
                            <div>
                                {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                                <div className="ant-upload-text">Upload</div>
                            </div>
                        }
                    </Upload>
                </Form.Item>
                <span className="ant-form-text">上传你的头像</span>
            </Form.Item>

            <Form.List name="names">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Detail' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input passenger's name or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="phone number" style={{ width: '60%', margin: '2% 0' }} />
                                        <Input placeholder="address" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            style={{ margin: '0 8px' }}
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                >
                                    <PlusOutlined />添加地址和手机号
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};