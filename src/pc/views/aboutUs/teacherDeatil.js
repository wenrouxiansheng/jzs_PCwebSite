import React, { Component } from 'react'

import { seekComponents } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'


let getChangeComponent = null;
class teacherDeatil extends Component {
    state = {
        componentJson: [
            {
                component: 'TeacherDetail',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "师资力量", subTitle: "汇聚国内外艺术院校师资力量" }
                }
            },
            {
                component: 'TeacherList',
                props: {
                }
            },
        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-教师详情';

        //接收并传递参数 显示对应老师详情
        const { componentJson } = this.state,
            type = this.props.match.params.sign ?? 1,
            reset = componentJson.slice(1),
            data = [{
                component: 'TeacherDetail',
                props: {
                    sign: type
                }
            },
            ...reset
            ]

        this.setState({
            componentJson: data
        })


        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'teacherDeatil') {
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
                    seekComponents(componentJson, 'teacherDeatil')
                }
            </div>
        )
    }
}
export default withRouter(teacherDeatil)
