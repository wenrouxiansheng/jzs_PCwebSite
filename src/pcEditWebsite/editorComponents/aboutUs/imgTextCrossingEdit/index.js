import React, { Component } from 'react'

import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm, Radio } from 'antd';

let imgMessage = null,
    textMessage = null;
export default class imgTextCrossingEdit extends Component {
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
    addData = () => {
        const { props: { list } } = this.props.detail[0],
            obj = {
                "img": require('../../../assets/template/honor2.png').default,
                text: {
                    "title": "李斯特怀香港国际钢琴公开赛",
                    "subTitle": "桔子树学员登上世界级舞台，在国家未来大剧院奏响华美乐章"
                },
                "type": "left"
            };
        list.push(obj);
        this.setState({})
    }
    deleteData = (e) => {
        //删除数据
        e.stopPropagation();

        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;

        list.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    chaneImage = () => {
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
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
        //修改标题
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state,
            { text } = list[indexed];
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        text.title = e.target.value;
        this.setState({})
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
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: list[indexed].text.subTitle });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                list[indexed].text.subTitle = str;
                this.setState({});
            }
            PubSub.unsubscribe(textMessage);
        });
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    onRadioChange = (e) => {
        //更改图片位置
        const { target: { value } } = e,
            { props: { list } } = this.props.detail[0],
            { indexed } = this.state;

        list[indexed].type = value;
        this.setState({})
    }
    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
        PubSub.unsubscribe(textMessage);
    }
    render() {
        const { props: { list } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(this.props)
        return (
            <div className="imgTextCrossingEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>图片列表：</span></label>
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
                    <label><span>标题：</span><input type="text" name="title" key={indexed} defaultValue={indexed !== null ? list[indexed].text.title : ''} placeholder="请输入文字" onChange={this.changeTitle} /></label>
                </div>
                <div className="input_box">
                    <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                </div>
                {
                    indexed !== null ? <div className="redio">
                        <span style={{ width: "150px", display: "inline-block", textAlign: "right" }}>图片位置：</span>
                        <Radio.Group onChange={this.onRadioChange} value={list[indexed].type}>
                            <Radio value={"left"}>图片居左</Radio>
                            <Radio value={"right"}>图片居右</Radio>
                        </Radio.Group>
                    </div> : null
                }

                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
