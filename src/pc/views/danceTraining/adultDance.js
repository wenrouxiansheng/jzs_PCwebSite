import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class adultDance extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/danceTraining/adult/banner.jpg").default },
                    ]
                }
            },

            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/adult/nav1.jpg').default, text: "成人民族舞", href: "/site/pc/danceTraining/folkDance/adult" },
                        { img: require('../../assets/danceTraining/adult/nav2.jpg').default, text: "成人古典舞", href: "/site/pc/danceTraining/classicalDance/adult" },
                        { img: require('../../assets/danceTraining/adult/nav3.jpg').default, text: "成人芭蕾舞", href: "/site/pc/danceTraining/balletDance/adult" },
                        { img: require('../../assets/danceTraining/adult/nav4.jpg').default, text: "成人中国舞", href: "/site/pc/danceTraining/chineseDance/adult" },
                        { img: require('../../assets/danceTraining/adult/nav5.jpg').default, text: "成人街舞", href: "/site/pc/danceTraining/hipHop/adult" },
                        { img: require('../../assets/danceTraining/adult/nav6.jpg').default, text: "成人爵士舞", href: "/site/pc/danceTraining/jazzDance/adult" },
                        { img: require('../../assets/danceTraining/adult/nav7.jpg').default, text: "成人拉丁舞", href: "/site/pc/danceTraining/latinDance/adult" },
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
                                    text: "集体班（16-80岁）"
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
                                    text: "精品班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本手型、手位、脚位、柔韧度练习及强化、能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及音乐配合"
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
                        "成人可以选择什么舞蹈学习？",
                        "成年人学一个舞种要多少学费？",
                        "成人零基础能学跳舞吗？",
                        "女孩减肥跳什么舞？",
                        "我30多岁了，学舞会晚吗？",
                        "成年人该如何系统学习舞蹈？",
                        "成人学习舞蹈怎么练功啊？",
                        "成年人学舞蹈，如何正确练习下腰？",
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
        document.title = '桔子树艺术-成人舞蹈综合';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'adultDance') {
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
                    seekComponents(componentJson, 'adultDance')
                }
            </div>
        )
    }
}
