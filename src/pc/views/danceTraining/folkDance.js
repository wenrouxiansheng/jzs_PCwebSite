import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class folkDance extends Component {
    state = {
        componentJson: [
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/childrenDance/nav1.png').default, text: "少儿民族舞", href: "/site/pc/danceTraining/folkDance/child" },
                        { img: require('../../assets/danceTraining/adult/nav1.jpg').default, text: "成人民族舞", href: "/site/pc/danceTraining/folkDance/adult" },
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
                        "基本功大幅提升", "对舞蹈表演产生兴趣", "气质优雅", "性格开朗活泼", "身体素质明显提升", "形体优美挺拔", "柔韧性、灵活性、协调性变好", "表现欲、表现力增强", "社交类的舞蹈，可以和别人更好沟通"
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
                                    text: "民族舞集体班（4-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功、能力素质与技巧培养、形体训练、灵活性、协调性，软度训练。民族舞基本功强化。舞蹈组合动作分解及连贯。配合音乐完成一支成品舞或者组合"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "民族舞精品班（4-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "民族舞基本手位、脚位、体能素质、肌肉控制力、灵活性、协调性，软度训练。能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及多类型音乐配合"
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
                        "零基础可以学习民族舞吗？",
                        "成人民族舞多久能学会一支成品舞？",
                        "学习民族舞必须要学会压腿么？",
                        "女孩减肥跳什么舞？ ",
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
        document.title = '桔子树艺术-民族舞综合';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'folkDance') {
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
                    seekComponents(componentJson, 'folkDance')
                }
            </div>
        )
    }
}
