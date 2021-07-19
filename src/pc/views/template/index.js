import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import { seekComponents } from '../../publicjs'
import { editingStatus } from '../../../store/store'


let getChangeComponent = null,
    savePageData = null;
export default class template extends Component {
    state = {
        componentJson: [
            {
                component: 'Paragraph',
                props: {
                    text: "请选择添加组件后删除",
                    style: {
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginTop: '50px',
                        marginBottom: '50px',
                    }
                }
            }
        ]
    }
    saveClick = (name, data) => {
        //保存下载数据
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([data]);
        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        save_link.click();
    }
    componentDidMount() {
        //组件挂载后监听滚轮
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'template') {
                window.parent.PubSub.publish('operationMessage', {
                    message: '组件名不对应',
                    type: 'error'
                });
                return false;
            }
            this.setState({
                componentJson: data.componentJson
            })
            window.parent.PubSub.publish('operationMessage', {
                message: '修改成功',
                type: 'success'
            })
        })

        savePageData = PubSub.subscribe('savePageData', (msg, data) => {
            const componentJson = JSON.stringify(this.state.componentJson)
            this.saveClick('template.html', componentJson);
        });

    }
    componentWillUnmount() {
        //组件即将销毁后删除监听滚轮事件
        PubSub.unsubscribe(getChangeComponent);
        PubSub.unsubscribe(savePageData);
    }
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'template')
                }
            </div>
        )
    }
}