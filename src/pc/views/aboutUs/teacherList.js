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
                    list: [
                        {
                            img: require('../../assets/aboutUs/teachers/flag1.png').default, title: "海外知名艺术院校归国教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag2.png').default, title: "国内艺术院校毕业教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
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
