import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import PubSub from 'pubsub-js'

import './style.scss'
let awaken = null;
export default class richTextEditor extends Component {
    state = {
        editorState: null,
        isShow: false
    }
    componentDidMount() {
        //订阅 唤醒该组件
        awaken = PubSub.subscribe('awakenRichTextEditor', (msg, data) => {
            const { isShow, text } = data;
            this.setState({
                isShow,
                editorState: BraftEditor.createEditorState(text)
            })
        });
    }
    componentWillUnmount() {
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(awaken);
    }
    getChangeText = () => {
        //确认修改后 转换html  传递修改的值
        const { editorState } = this.state;
        let html = editorState.toHTML();
        PubSub.publish('amendRichText', html);
        this.setState({
            isShow: false
        })
    }
    onChange = (editorState) => {
        //修改后更新值
        this.setState({ editorState })
    }
    onClose = () => {
        //关闭编辑器   不会传递
        this.setState({
            isShow: false
        })
        PubSub.publish('amendRichText', { type: 'close' });
    }
    render() {
        const { editorState, isShow } = this.state;
        console.log()
        return (
            <div className="richTextEditor" style={{ display: isShow ? 'flex' : 'none' }}>
                <div className="container">
                    <button className="closeEdit" onClick={this.onClose}>关闭编辑器</button>
                    <BraftEditor
                        value={editorState}
                        onChange={this.onChange}
                    />

                    <p className="buttonBox"><button onClick={this.getChangeText}>确认更改</button></p>
                </div>
            </div>
        )
    }
}
