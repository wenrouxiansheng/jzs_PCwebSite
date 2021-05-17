import React, { Component } from 'react'
import { Form, Input, Select } from 'antd';
import './style.scss'
import bg from '@assets/danceTraining/childrenDance/formBg.png'

const { Option } = Select;


export default class form extends Component {
    form = React.createRef()
    onFinish = (values) => {
        console.log('Success:', values);
        this.form.current.resetFields();
    };
    render() {
        const { style } = this.props;
        return (
            <div className="formContainer" style={{ background: `url(${bg}) no-repeat center center`, ...style }}>
                <div className="container">
                    <Form
                        onFinish={this.onFinish}
                        ref={this.form}
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
                            <Input placeholder="姓名（必填）" />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                                    message: '请输入正确的手机号码',
                                },
                            ]}
                        >
                            <Input placeholder="手机号码（必填）" maxLength="11" />
                        </Form.Item>
                        <Form.Item name="course">
                            <Select
                                placeholder="请选择课程"
                            >
                                <Option value="1">美术</Option>
                                <Option value="2">音乐</Option>
                                <Option value="3">器乐</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="school">
                            <Select
                                placeholder="请选择校区"
                            >
                                <Option value="1">通州校区</Option>
                                <Option value="2">东直门校区</Option>
                                <Option value="3">大望路校区</Option>
                            </Select>
                        </Form.Item>
                        <button type="submit">立即申请</button>
                    </Form>
                </div>
            </div>
        )
    }
}
