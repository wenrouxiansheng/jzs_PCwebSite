import React, { Component } from 'react'

import PubSub from 'pubsub-js'

let imgMessage = null;
export default class imgBlindPlatoonEdit extends Component {
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
    chaneImage = () => {
        const { props: { imgList } } = this.props.detail[0],
            { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        const [level1, level2] = indexed;
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                imgList[level1].img[level2] = imgData;
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
    componentWillUnmount() {
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { imgList } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(this.props)
        return (
            <div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ width: "300px" }}>图片列表(该组件只提供修改功能)：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        imgList.map((item, index) => {
                            return item.img.map((img, j) => {
                                return <div key={index + j} className={indexed !== null && indexed[0] === index && indexed[1] === j ? "active" : ""
                                } onClick={this.switchData([index, j])} >
                                    <img src={img} alt="" />
                                </div>
                            })
                        })
                    }
                </div>
                <div className="input_box">
                    <label><span>点击图片更改：</span><button className="changeImg" onClick={this.chaneImage}>点击更改</button></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div >
        )
    }
}
