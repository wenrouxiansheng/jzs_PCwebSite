import React, { Component } from 'react'
import './style.scss'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

let imgMessage = null;
export default class courseFlowEdit extends Component {
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
        e.stopPropagation();
        //删除一条数据
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;
        data.splice(indexed, 1);
        this.setState({
            indexed: null
        });
    }
    addData = () => {
        //增加一条数据
        const { props: { data } } = this.props.detail[0],
            obj = {
                "img": require('../../../assets/template/img5.png').default,
                "num": "01",
                "text": "专业测评，了解学员上课愿望"
            };
        data.push(obj);
        this.setState({});
    }
    chaneText = (type) => {
        return (e) => {
            const { props: { data } } = this.props.detail[0],
                { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
                return false;
            }
            data[indexed][type] = e.target.value;
            this.setState({})
        }
    }
    changeImage = () => {
        const { props: { data } } = this.props.detail[0],
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
                data[indexed].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;
        return (
            <div className="courseFlowEdit">
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
                    <label><span>号码：</span><input type="text" name="title" placeholder="请输入文字" key={indexed} onChange={this.chaneText('num')} defaultValue={indexed !== null ? data[indexed].num : ''} /></label>
                </div>
                <div className="input_box">
                    <label><span>文案：</span><input type="text" name="address" placeholder="请输入文字" key={indexed} onChange={this.chaneText('text')} defaultValue={indexed !== null ? data[indexed].text : ''} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
