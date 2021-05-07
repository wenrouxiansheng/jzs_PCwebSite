import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { containerStatus } from '../../../../store/store'

let textMessage = null;
export default class paragraphEdit extends Component {
    awakenRichText = () => {
        //唤醒富文本编辑
        const { props } = this.props.detail[0];

        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: props.text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                props.text = str;
                this.setState({});
            }
            PubSub.unsubscribe(textMessage);
        });
    }
    changeData = () => {
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        console.log(this.props)
        return (
            <div className="paragraphEdit">
                <div className="input_box">
                    <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                </div>
                {
                    containerStatus.getState() ? null :
                        <div className="changeComponentConf">
                            <button onClick={this.changeData} >确认</button>
                        </div>
                }
            </div>
        )
    }
}
