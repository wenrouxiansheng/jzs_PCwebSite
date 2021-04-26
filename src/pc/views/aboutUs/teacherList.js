import React, { Component } from 'react'

import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class teacherList extends Component {
    state = {
        componentJson: [
            {
                component: 'TeacherStandards',
                props: {
                    list: [
                        {
                            img: require('../../assets/aboutUs/teachers/flag1.png').default, title: "海外知名艺术院校归国教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag2.png').default, title: "国内专业艺术院校毕业教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag3.png').default, title: "覆盖艺术学习多科目", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag4.png').default, title: "丰富一线教学经验", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                    ]
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
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'teacherList'), 300) : null}
                key={index} flag={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    render() {
        return (
            <div>
                {
                    this.seekComponents()
                }
            </div>
        )
    }
}
