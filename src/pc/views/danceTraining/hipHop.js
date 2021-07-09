import React, { Component } from 'react'

import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../publicjs'


let getChangeComponent = null;
export default class hipHop extends Component {
    state = {
        componentJson: [
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/childrenDance/nav5.png').default, text: "少儿街舞", href: "/site/pc/danceTraining/hipHop/child" },
                        { img: require('../../assets/danceTraining/adult/nav5.jpg').default, text: "成人街舞", href: "/site/pc/danceTraining/hipHop/adult" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "课程流程", subTitle: "" }
                }
            },
            {
                component: 'CourseFlow',
                props: {
                    type: 'dance'
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "自信面对考试", "表演完美细节处理"
                    ],
                    info: { title: "课程特色", subTitle: "" }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "班型设置与开课信息", subTitle: "" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["课程", "教学内容", "上课时长"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "街舞集体班（4-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功、能力素质与技巧培养、形体训练、街舞初级套路、舞蹈组合动作分解及连贯、音乐节奏训练。配合音乐完成一支成品舞或者组合"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "街舞精品班（4-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本手位、脚位、体能素质、肌肉控制力、灵活性、协调性能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及多类型音乐配合"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "考级综合班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "形体基训，柔韧，节奏，各舞种基本功，舞蹈考级综合课程。体能训练，成品舞表演"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                        ]
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "课程顾问全天候在线解答您的学习问题", subTitle: "" }
                }
            },
            {
                component: 'QuestionConsultation',
                props: {
                    questionList: [
                        "我该为孩子选择什么样的舞种？",
                        "3-6岁的孩子每周训练几次比较合适？每节课多长时间合适？",
                        "孩子启蒙（3-5岁）应该学习舞蹈，什么内容更适合？",
                        "零基础可以学习街舞吗？",
                        "男生学习什么街舞比较好？",
                        "学习街舞多久能跳成品舞？",
                        "女孩减肥跳什么舞？",
                        "成年人该如何系统学习舞蹈？",
                    ]
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
            {
                component: 'Form',
                props: {
                }
            },

        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-街舞综合';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'hipHop') {
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
                    seekComponents(componentJson, 'hipHop')
                }
            </div>
        )
    }
}
