import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class sketch extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/fineArt/sketch/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/fineArt/nav2.jpg').default, text: "少儿速写", href: "/site/pc/fineArt/sketch/child" },
                        { img: require('../../assets/fineArt/sketch/nav2.jpg').default, text: "成人速写", href: "/site/pc/fineArt/sketch/adult" },
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
                    type: 'fineArt'
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "对画画产生兴趣", "培养想象力和创造力", "拥有更丰富的人生体验", "有利于情绪的更好疏解", "提高对事物认知能力", "增强动手能力", "养成细致的观察能力", "培养专注、坚持等优秀品质"
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
                                    text: "少儿美术集体班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "启发少儿对艺术的认识，通过美术课程的培养，开启右脑思维能力，充分发挥想象力"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿美术精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "开发少儿的美术潜能、充分发挥学员的个性，提高色彩运用能力、造型能力和绘画技巧"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "成人美术集体班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "开发美术潜能、充分发挥学员的个性，训练学生的观察能力、分析能力和想象能力，根据自身绘画兴趣，针对性选择绘画类型。"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "成人美术精品班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "开发美术潜能、充分发挥学员的个性，提高色彩运用能力、造型能力和绘画技巧，临摹、写生及优秀作品赏析。"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "考级综合班（6-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "色彩运用能力、造型能力和绘画技巧，美术考级综合提升课程。"
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
                        "绘画课程有哪些？",
                        "零基础怎么学习素描？",
                        "全身人物速写的作画步骤？",
                        "速写应该从何画起？",
                        "在练习速写的时候，不敢画、画得慢、无从下笔怎么办？ ",
                        "觉得每一次画的都与模特不“像”怎么办？",
                        "学习画画，从哪种画法开始更好？ ",
                        "学习画画应该具备怎样的素质与心态？",
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
        document.title = '桔子树艺术-速写综合';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'sketch') {
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
                    seekComponents(componentJson, 'sketch')
                }
            </div>
        )
    }
}
