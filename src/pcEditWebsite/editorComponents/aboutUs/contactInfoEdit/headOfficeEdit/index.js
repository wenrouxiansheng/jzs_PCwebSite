import React, { Component } from 'react'
import PubSub from 'pubsub-js'


let imgMessage = null;
export default class headOfficeEdit extends Component {
    changeImage = () => {
        const { headOffice } = this.props;
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                headOffice.img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    cahngeText = (type) => {
        return (e) => {
            const { headOffice } = this.props;
            headOffice[type] = e.target.value
            this.setState({})
        }
    }

    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { headOffice } = this.props;
        return (
            <div>
                <div className="input_box">
                    <label><span>点击图片更改：</span><img src={headOffice.img} alt="" onClick={this.changeImage} /></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={headOffice.title} placeholder="请输入文字" onChange={this.cahngeText("title")} /></label>
                </div>
                <div className="input_box">
                    <label><span>地址：</span><input type="text" name="address" defaultValue={headOffice.address} placeholder="请输入文字" onChange={this.cahngeText("address")} /></label>
                </div>
            </div>
        )
    }
}
