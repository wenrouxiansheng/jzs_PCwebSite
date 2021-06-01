import React, { Component } from 'react'
import './style.scss'
import PubSub from 'pubsub-js'

let imgMessage = null,
    textMessage = null;
export default class exhibitionEdit extends Component {
    changeData = () => {
        //传递修改数据
        const { detail } = this.props
        PubSub.publish('revisedDataList', detail);

    }
    changeText = (type) => {
        return (e) => {
            const { props: { data } } = this.props.detail[0];
            data[type] = e.target.value;
            this.setState({})
        }
    }
    awakenRichText = () => {
        const { props: { data: { text }, data: info } } = this.props.detail[0];
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                info.text = str;
                this.setState({})
            }
            PubSub.unsubscribe(textMessage);
        });
    }
    changeImage = () => {
        const { props: { data } } = this.props.detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                data.img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
        PubSub.unsubscribe(imgMessage);
        PubSub.unsubscribe(textMessage);
    }
    render() {
        const { props: { data: { number1, number2, title, img } } } = this.props.detail[0]
        return (
            <div className="exhibitionEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>文字模块</span></label>
                </div>
                <div className="input_box">
                    <label><span>数字顺序：</span><input type="text" name="number1"
                        placeholder="请输入" defaultValue={number1} onInput={this.changeText('number1')} /></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title"
                        placeholder="请输入标题" defaultValue={title} onInput={this.changeText('title')} /></label>
                </div>
                <div className="input_box">
                    <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>图片模块</span></label>
                </div>
                <div className="input_box">
                    <label><span>数字顺序：</span><input type="text" name="number1"
                        placeholder="请输入" defaultValue={number2} onInput={this.changeText('number2')} /></label>
                </div>
                <div className="input_box">
                    <label><span>点击图片更改：</span><img src={img} alt="" onClick={this.changeImage} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData}>确认</button>
                </div>
            </div>
        )
    }
}
