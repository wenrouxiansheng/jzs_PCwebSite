import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './style.scss'
import bg from '@assets/danceTraining/childrenDance/formBg.png'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default class form extends Component {
    render() {
        return (
            <div className="formContainer" style={{ background: `url(${bg}) no-repeat center center` }}>
                <div className="container">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <h1>报名参加桔子树</h1>
                        <h3>免费试听课程</h3>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的姓名',
                                },
                            ]}
                        >
                            <Input placeholder="姓名（必填）"/>
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
