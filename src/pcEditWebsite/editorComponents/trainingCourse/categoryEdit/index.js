import React, { Component } from 'react'
import './style.scss'
import PubSub from 'pubsub-js'

let imgMessage = null,
    textMessage = null;
export default class categoryEdit extends Component {
    changeImage = () => {
        const { props: { introduction } } = this.props.detail[0];

        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                introduction.img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    onInputChange = (type) => {
        return (e) => {
            const { props: { introduction } } = this.props.detail[0];
            introduction[type] = e.target.value;
            this.setState({})
        }
    }
    changeText = () => {
        const { props: { introduction } } = this.props.detail[0];
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: introduction.text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                introduction.text = str;
                this.setState({})
            }
            PubSub.unsubscribe(textMessage);
        });
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
        PubSub.unsubscribe(textMessage);
    }
    render() {
        console.log(this.props)
        const { props: { introduction: { img, title, subTitle } } } = this.props.detail[0];
        return (
            <div className="categoryEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>左侧图片</span></label>
                </div>
                <div className="input_box">
                    <label><span>点击图片更改：</span><img src={img} alt="" onClick={this.changeImage} /></label>
                </div>
                <div className="input_box">
                    <label><span>类别：</span><input type="text" name="title" defaultValue={subTitle} placeholder="请输入类别" onChange={this.onInputChange('subTitle')} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>右侧文字</span></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={title} placeholder="请输入类别" onChange={this.onInputChange('title')} /></label>
                </div>
                <div className="input_box">
                    <span>更改文案：</span><button className="changeImg" onClick={this.changeText}>点击更改</button>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
