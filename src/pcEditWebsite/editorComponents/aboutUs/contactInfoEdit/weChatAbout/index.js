import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import PubSub from 'pubsub-js'

let imgMessage = null;
export default class weChatAbout extends Component {
    state = {
        indexed: null,
    }
    cahngeText = (type) => {
        //修改文字
        return (e) => {
            const { weChatInfo } = this.props;
            weChatInfo[type] = e.target.value
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
        const { weChatInfo } = this.props,
            { indexed } = this.state;
        weChatInfo.detail.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addData = () => {
        const obj = {
            "text": "模板",
            "img": require('../../../../assets/template/img5.png').default
        },
            { weChatInfo } = this.props;
        weChatInfo.detail.push(obj);
        this.setState({})
    }
    changeImage = () => {
        const { weChatInfo } = this.props,
            { indexed } = this.state;
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                weChatInfo.detail[indexed].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    cahngeQRText = (e) => {
        const { weChatInfo } = this.props,
            { indexed } = this.state;
        weChatInfo.detail[indexed].text = e.target.value;
        this.setState({})
    }
    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { weChatInfo } = this.props,
            { indexed } = this.state;
        return (
            <div className="weChatAbout">
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={weChatInfo.title} placeholder="请输入文字" onChange={this.cahngeText("title")} /></label>
                </div>
                <div className="input_box">
                    <label><span>副标题：</span><input type="text" name="subTitle" defaultValue={weChatInfo.subTitle} placeholder="请输入文字" onChange={this.cahngeText("subTitle")} /></label>
                </div>
                <ul className="level">
                    {
                        weChatInfo.detail.map((item, index) => {
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
                            <label><span>点击图片更改：</span><img src={weChatInfo.detail[indexed].img} alt="" onClick={this.changeImage} /></label>
                        </div>
                        <div className="input_box">
                            <label><span>标题：</span><input type="text" name="title" key={indexed} defaultValue={weChatInfo.detail[indexed].text} placeholder="请输入文字" onChange={this.cahngeQRText} /></label>
                        </div>
                    </div> : null
                }
            </div>
        )
    }
}
