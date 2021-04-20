import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

import './style.scss'
let imgMessage = null,
    textMessage = null;
export default class introduceEdit extends Component {
    state = {
        indexed: null
    }
    switchData = (num) => {
        //切换选中
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    deleteData = (e) => {
        //删除一条数据
        e.stopPropagation();
        const { props: { list: data } } = this.props.detail[0],
            { indexed } = this.state;

        data.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addData = () => {
        //添加一条数据
        const { props: { list: data } } = this.props.detail[0],
            obj = {
                "subtitle": "办学规模",
                "title": "强大的办学规模",
                "text": "文案",
                "img": require('../../../assets/template/honor3.png').default
            };
        data.push(obj)
        this.setState({});
    }
    chaneText = (type) => {
        //更改值
        return (e) => {
            const { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
                return;
            }
            const { props: { list } } = this.props.detail[0];
            list[indexed][type] = e.target.value
            this.setState({});
        }
    }
    changeImage = () => {
        const { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的图片" });
            return;
        }
        const { props: { list: data } } = this.props.detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            data[indexed].img = imgData;
            this.setState({})
            
        });
    }
    awakenRichText = () => {
        const { props: { list } } = this.props.detail[0];
        const { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: list[indexed].text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            let str = data.replace(/<\/?p>/g, '');
            list[indexed].text = str;
            this.setState({})

        });
    }
    changeData = () => {
        //传递修改数据
        const { detail } = this.props
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅 
        PubSub.unsubscribe(textMessage);
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { indexed } = this.state;
        const { props: { list: data } } = this.props.detail[0];
        return (
            <div className="introduceEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        data.map((item, index) => {
                            return <div key={index} className={(indexed !== null && indexed === index) ? 'active' : ""} onClick={this.switchData(index)}>
                                <img src={item.img} alt="" />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addData}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                <div className="input_box">
                    <label><span>标志：</span><input type="text" name="subtitle" placeholder="请输入文字" key={indexed} onChange={this.chaneText('subtitle')} defaultValue={indexed !== null ? data[indexed].subtitle : ''} /></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" placeholder="请输入文字" key={indexed} onChange={this.chaneText('title')} defaultValue={indexed !== null ? data[indexed].title : ''} /></label>
                </div>
                <div className="input_box">
                    <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
