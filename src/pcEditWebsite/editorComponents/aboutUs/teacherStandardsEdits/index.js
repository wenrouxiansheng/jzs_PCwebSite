import React, { Component } from 'react'
import './style.scss'

import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

let imgMessage = null,
    textMessage = null;
export default class TeacherStandardsEdit extends Component {
    state = {
        indexed: null
    }
    switchData = (num) => {
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    deleteData = (e) => {
        //删除一条数据s
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
            obj = {
                img: require('../../../assets/template/honor3.png').default, title: "丰富一线教学经验", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
            };
        list.push(obj);
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
                list[indexed].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    changeTitle = (e) => {
        //更改标题
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        list[indexed].title = e.target.value;
        this.setState({});
    }
    awakenRichText = () => {
        //唤醒富文本编辑
        const { indexed } = this.state,
            { props: { list } } = this.props.detail[0];

        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: list[indexed].text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                list[indexed].text = str;
                this.setState({});
            }
            PubSub.unsubscribe(textMessage);
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
        PubSub.unsubscribe(textMessage);
    }
    render() {
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(list)
        return (
            <div className="teacherStandardsEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ width: "200px" }}>图片列表(不需要背景颜色)：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list.map((item, index) => {
                            return <div key={index} className={indexed === index ? "active" : ""} onClick={this.switchData(index)}>
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
                    <label><span>点击图片更改：</span><button className="changeImg" onClick={this.chaneImage}>点击更改</button></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="level1Text" key={indexed} defaultValue={indexed !== null ? list[indexed].title : ''} placeholder="请输入文字" onChange={this.changeTitle} /></label>
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
