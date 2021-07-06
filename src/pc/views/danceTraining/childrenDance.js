import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class childrenDance extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/danceTraining/childrenDance/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/childrenDance/nav1.png').default, text: "少儿民族舞", href: "/site/pc/danceTraining/folkDance/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav2.png').default, text: "少儿古典舞", href: "/site/pc/danceTraining/classicalDance/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav3.png').default, text: "少儿芭蕾舞", href: "/site/pc/danceTraining/balletDance/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav4.png').default, text: "少儿中国舞", href: "/site/pc/danceTraining/chineseDance/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav5.png').default, text: "少儿街舞", href: "/site/pc/danceTraining/hipHop/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav6.png').default, text: "少儿爵士舞", href: "/site/pc/danceTraining/jazzDance/child" },
                        { img: require('../../assets/danceTraining/childrenDance/nav7.png').default, text: "少儿拉丁舞", href: "/site/pc/danceTraining/latinDance/child" },
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
                        "基本功大幅提升", "对舞蹈表演产生兴趣", "即兴反应迅速", "性格开朗活泼", "身体素质明显提升", "形体优美挺拔", "表现欲、表现力增强", "配合度、协作能力明显提升", "用肢体语言表现自己最美的一面"
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
                                    text: "少儿集体班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功、能力素质与技巧培养、形体训练、舞蹈组合动作分解及连贯、音乐节奏训练。配合音乐完成一支成品舞或者组合"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本手型、手位、脚位、柔韧度练习及强化、能力素质与技巧培养，体态、仪态训练及提升，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及音乐配合"
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
                            ]
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
                        "孩子每周训练几次比较合适？每节课多长时间合适？",
                        "孩子启蒙（3-5岁）应该学习舞蹈，什么内容更适合？",
                        "学一个舞种要多少学费？",
                        "女孩减肥跳什么舞？ ",
                        "孩子8岁了，学舞会晚吗？",
                        "芭蕾舞怎么学？",
                        "立足尖多久能学会？"
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
        document.title = '桔子树艺术-少儿舞蹈综合';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childrenDance') {
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
                    seekComponents(componentJson, 'childrenDance')
                }
            </div>
        )
    }
}
