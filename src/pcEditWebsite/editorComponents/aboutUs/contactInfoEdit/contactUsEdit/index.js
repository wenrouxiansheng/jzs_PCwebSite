import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';


export default class contactUsEdit extends Component {
    state = {
        indexed: null,
        selectedPhone: null
    }
    cahngeText = (type) => {
        //修改文字
        return (e) => {
            const { phoneInfo } = this.props;
            phoneInfo[type] = e.target.value
            this.setState({});
        }
    }
    switchdata = (num) => {
        return () => {
            this.setState({
                indexed: num
            });
        }
    }
    deleteData = (e) => {
        //删除数据
        e.stopPropagation();
        const { phoneInfo } = this.props,
            { indexed } = this.state;
        phoneInfo.phone.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addData = () => {
        const { phoneInfo } = this.props;
        phoneInfo.phone.push({
            "text": "文字：",
            "number": [
                "号码"
            ]
        })
        this.setState({})
    }
    changePhoneTitle = (e) => {
        //更改电话号码 表述
        const { phoneInfo } = this.props,
            { indexed } = this.state;
        phoneInfo.phone[indexed].text = e.target.value;

        this.setState({});
    }
    switchdataLevel2 = (num) => {
        return () => {
            this.setState({
                selectedPhone: num
            });
        }
    }
    addDataLevel2 = () => {
        //添加号码
        const { phoneInfo } = this.props,
            { indexed } = this.state;
        phoneInfo.phone[indexed].number.push("请输入号码");
        this.setState({});
    }
    changePhoneInfo = (e) => {
        //更改号码
        const { phoneInfo } = this.props,
            { indexed, selectedPhone } = this.state;
        phoneInfo.phone[indexed].number[selectedPhone] = e.target.value;

        this.setState({});
    }
    deleteDataLevel2 = () => {
        //删除号码
        const { phoneInfo } = this.props,
            { indexed, selectedPhone } = this.state;
        phoneInfo.phone[indexed].number.splice(selectedPhone, 1);
        this.setState({
            selectedPhone: null
        });
    }
    render() {
        const { phoneInfo } = this.props,
            { indexed, selectedPhone } = this.state;
        return (
            <div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={phoneInfo.title} placeholder="请输入文字" onChange={this.cahngeText("title")} /></label>
                </div>
                <div className="input_box">
                    <label><span>副标题：</span><input type="text" name="subTitle" defaultValue={phoneInfo.subTitle} placeholder="请输入文字" onChange={this.cahngeText("subTitle")} /></label>
                </div>
                <ul className="level">
                    {
                        phoneInfo.phone.map((item, index) => {
                            return <li className={indexed === index ? 'active' : ''} key={index} onClick={this.switchdata(index)}>
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                                {item.text}</li>
                        })
                    }
                    <li className="add" onClick={this.addData}>+</li>
                </ul>
                {
                    indexed !== null ? <div>
                        <div className="input_box">
                            <label><span>标题：</span><input type="text" name="phone" key={indexed} defaultValue={phoneInfo.phone[indexed].text} placeholder="请输入文字" onChange={this.changePhoneTitle} /></label>
                        </div>
                        <ul className="level">
                            {
                                phoneInfo.phone[indexed].number.map((item, index) => {
                                    return <li className={selectedPhone === index ? 'active' : ''} key={index} onClick={this.switchdataLevel2(index)}>
                                        <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteDataLevel2} okText="是" cancelText="否">
                                            <CloseCircleOutlined />
                                        </Popconfirm>
                                        {item}</li>
                                })
                            }
                            <li className="add" onClick={this.addDataLevel2}>+</li>
                        </ul>

                        <div className="input_box">
                            <label><span>标题：</span><input type="text" name="phone" key={indexed + selectedPhone} defaultValue={phoneInfo.phone[indexed].number[selectedPhone]} placeholder="请输入文字" onChange={this.changePhoneInfo} /></label>
                        </div>
                    </div> : null
                }
            </div>
        )
    }
}
