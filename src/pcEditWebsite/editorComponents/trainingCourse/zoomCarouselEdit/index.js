import React, { Component } from 'react'

import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

let imgMessage = null;
export default class zoomCarouselEdit extends Component {
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
    deleteData = (e) => {
        //删除一条数据
        e.stopPropagation();
        const { indexed } = this.state,
            { props: { list } } = this.props.detail[0];
        list.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addData = () => {
        //添加一条数据
        const { props: { list } } = this.props.detail[0],
            img = { src: require('../../../assets/template/honor3.png').default };
        list.push(img);
        this.setState({})
    }
    chaneImage = () => {
        //更换图片
        const { props: { list } } = this.props.detail[0]
        const { indexed } = this.state;
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);

        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                list[indexed].src = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    changeData = () => {
        //传递修改数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //接收之后也需要卸载订阅
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(list);
        return (
            <div className="zoomCarouselEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>图片列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list.map((item, index) => {
                            return <div key={index} className={indexed === index ? "active" : ""} onClick={this.switchData(index)}>
                                <img src={item.src} alt="" />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addData}>+</div>
                </div>
                <div className="input_box">
                    <label><span>点击图片更改：</span><button className="changeImg" onClick={this.chaneImage}>点击图片更改：</button></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
