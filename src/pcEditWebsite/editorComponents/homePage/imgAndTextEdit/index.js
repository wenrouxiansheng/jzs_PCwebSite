import React, { Component } from 'react'
import { Radio } from 'antd';
import PubSub from 'pubsub-js'

import './style.scss'
let imgMessage = null;
export default class imgAndTextEdit extends Component {
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    onRadioChange = (e) => {
        //更改图片位置
        const { target: { value } } = e;
        const { detail } = this.props,
            { props: { detail: data } } = detail[0];

        data.type = value;
        this.setState({})
    }

    onInputChange = (type) => {
        return (e) => {
            //更改标题及文案
            const { detail } = this.props;
            let { props: { detail: data } } = detail[0];
            if (type === 'title') data.title = e.target.value;

            if (type === 'text') data.text = e.target.value;

            this.setState({})
        }
    }
    changeImage = () => {
        const { detail } = this.props;
        const { props: { detail: data } } = detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            data.src = imgData;
            this.setState({})
            //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
            PubSub.unsubscribe(imgMessage);
        });
    }
    render() {
        const { detail } = this.props;
        const { props: { detail: { src, text, title, type, id } } } = detail[0];

        return (
            <div className="imgAndTextEdit" key={id}>
                <div className="input_box">
                    <label><span>点击图片更改：</span><img src={src} alt="" onClick={this.changeImage} /></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={title} placeholder="请输入标题" onChange={this.onInputChange('title')} /></label>
                </div>
                <div className="input_box">
                    <label><span>详细：</span><input type="text" name="text" defaultValue={text} placeholder="请输入文案" onChange={this.onInputChange('text')} /></label>
                </div>
                <div className="redio">
                    <span>图片位置：</span>
                    <Radio.Group onChange={this.onRadioChange} value={type}>
                        <Radio value={"left"}>图片居左</Radio>
                        <Radio value={"right"}>图片居右</Radio>
                    </Radio.Group>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
