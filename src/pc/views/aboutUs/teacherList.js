import React, { Component } from 'react'

import { seekComponents } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class teacherList extends Component {
    state = {
        componentJson: [
            {
                component: 'TeacherStandards',
                props: {
                }
            },
            {
                component: 'TeachersClassification',
                props: {

                }
            },
        ],
    }
    componentDidMount() {
        document.title = '桔子树艺术-师资力量';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'teacherList') {
                //这里不用提醒错误     因为这是个嵌套组件会有两个相同的消息
                return false;
            }
            this.setState({
                componentJson: data.componentJson
            })
            window.parent.PubSub.publish('operationMessage', {
                message: '修改成功',
                type: 'success'
            })
        });
    }
    componentWillUnmount() {
        //组件即将销毁后移除订阅
        PubSub.unsubscribe(getChangeComponent);
    }
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'teacherList')
                }
            </div>
        )
    }
}
