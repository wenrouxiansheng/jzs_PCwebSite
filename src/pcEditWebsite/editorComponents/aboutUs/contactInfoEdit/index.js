import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

import './style.scss'

let imgMessage = null;
export default class contactInfoEdit extends Component {
    state = {
        selected: null,//一级选择
        indexed: null,//二级选择
        selectedPhone: null,//三级选择
        selectInfo: ["总部信息", "联系我们", "官网邮箱", "微信有约", "官方微博"]
    }
    cahngeText = (list, type) => {
        return (e) => {
            const { props: { info } } = this.props.detail[0];
            info[list][type] = e.target.value
            this.setState({})
        }
    }
    switchdata = (type, num) => {
        //切换数据
        return () => {
            if (type === "selected") {
                this.setState({
                    selected: num
                })
            }

            if (type === "indexed") {
                this.setState({
                    indexed: num
                })
            }

            if (type === "selectedPhone") {
                this.setState({
                    selectedPhone: num
                })
            }
        }
    }
    changeImage = () => {
        const { props: { info: { headOffice } } } = this.props.detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                headOffice.img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    deleteData = (type) => {
        return () => {

        }
    }
    addData = (type) => {
        return () => {
            console.log(type)
        }
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }

    cahngePhoneInfo = (e) => {
        //联系我们电话修改
        const { props: { info, info: { phoneInfo } } } = this.props.detail[0];
        const { indexed, selectInfo, selectedPhone } = this.state;

        phoneInfo.phone[indexed].number[selectedPhone] = e.target.value;
        this.setState({})
    }

    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { info, info: { headOffice, phoneInfo, emailInfo, weChatInfo, microBlogInfo } } } = this.props.detail[0];
        const { indexed, selectInfo, selected, selectedPhone } = this.state;
        console.log(info)
        return (
            <div className="contactInfoEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>选择模块</span></label>
                </div>
                <ul className="level">
                    {
                        selectInfo.map((item, index) => {
                            return <li className={selected === index ? 'active' : ''} key={index} onClick={this.switchdata("selected", index)}>{item}</li>
                        })
                    }
                </ul>
                {
                    selected === 0 ? <div>
                        <div className="input_box">
                            <label><span>点击图片更改：</span><img src={headOffice.img} alt="" onClick={this.changeImage} /></label>
                        </div>
                        <div className="input_box">
                            <label><span>标题：</span><input type="text" name="title" defaultValue={headOffice.title} placeholder="请输入文字" onChange={this.cahngeText("headOffice", "title")} /></label>
                        </div>
                        <div className="input_box">
                            <label><span>地址：</span><input type="text" name="address" defaultValue={headOffice.address} placeholder="请输入文字" onChange={this.cahngeText("headOffice", "address")} /></label>
                        </div>
                    </div>
                        : null
                }

                {
                    selected === 1 ? <div>
                        <div className="input_box">
                            <label><span>标题：</span><input type="text" name="title" defaultValue={phoneInfo.title} placeholder="请输入文字" onChange={this.cahngeText("phoneInfo", "title")} /></label>
                        </div>
                        <div className="input_box">
                            <label><span>副标题：</span><input type="text" name="title" defaultValue={phoneInfo.subTitle} placeholder="请输入文字" onChange={this.cahngeText("phoneInfo", "subTitle")} /></label>
                        </div>
                        <ul className="level">
                            {
                                phoneInfo.phone.map((item, index) => {
                                    return <li className={indexed === index ? 'active' : ''} key={index} onClick={this.switchdata("indexed", index)}>
                                        <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData('phoneInfo')} okText="是" cancelText="否">
                                            <CloseCircleOutlined />
                                        </Popconfirm>
                                        {item.text}</li>
                                })
                            }
                            <li className="add" onClick={this.addData('phoneInfo')}>+</li>
                        </ul>
                        {
                            indexed !== null ? <div>
                                <ul className="level">
                                    {
                                        phoneInfo.phone[indexed].number.map((item, index) => {
                                            return <li className={selectedPhone === index ? 'active' : ''} key={index} onClick={this.switchdata("selectedPhone", index)}>
                                                <Popconfirm placement="rightTop" title="确认删除？" okText="是" cancelText="否">
                                                    <CloseCircleOutlined />
                                                </Popconfirm>
                                                {item}</li>
                                        })
                                    }
                                    <li className="add" onClick={this.addData('phoneInfo')}>+</li>
                                </ul>

                                <div className="input_box">
                                    <label><span>标题：</span><input type="text" name="phone" key={indexed + selectedPhone} defaultValue={phoneInfo.phone[indexed].number[selectedPhone]} placeholder="请输入文字" onChange={this.cahngePhoneInfo} /></label>
                                </div>
                            </div> : null
                        }

                    </div> : null
                }





                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
