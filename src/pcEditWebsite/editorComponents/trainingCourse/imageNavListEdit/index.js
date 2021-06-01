import React, { Component } from 'react'
import './style.scss'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

let imgMessage = null;
export default class imageNavListEdit extends Component {
    state = {
        indexed: null
    }
    switchData = (num) => {
        //切换选中样式
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    chaneText = (type) => {
        return (e) => {
            const { props: { navList } } = this.props.detail[0],
                { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
                return false;
            }
            navList[indexed][type] = e.target.value;
            this.setState({})
        }
    }
    deleteData = (e) => {
        e.stopPropagation();
        //删除一条数据
        const { props: { navList } } = this.props.detail[0],
            { indexed } = this.state;
        navList.splice(indexed, 1);
        this.setState({
            indexed: null
        });
    }
    changeImage = () => {
        const { props: { navList } } = this.props.detail[0],
            { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的图片" });
            return false;
        }
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                navList[indexed].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    addData = () => {
        //增加一条数据
        const { props: { navList } } = this.props.detail[0],
            obj = {
                "img": require('../../../assets/template/img5.png').default,
                "text": "文案",
                "href": "/"
            };
        navList.push(obj);
        this.setState({});
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { props: { navList } } = this.props.detail[0],
            { indexed } = this.state;
        return (
            <div className="imageNavListEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>导航列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        navList.map((item, index) => {
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
                    <label><span>标题：</span><input type="text" name="title" placeholder="请输入文字" key={indexed} onChange={this.chaneText('text')} defaultValue={indexed !== null ? navList[indexed].text : ''} /></label>
                </div>
                <div className="input_box">
                    <label><span>跳转地址：</span><input type="text" name="address" placeholder="请输入文字" key={indexed} onChange={this.chaneText('href')} defaultValue={indexed !== null ? navList[indexed].href : ''} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
