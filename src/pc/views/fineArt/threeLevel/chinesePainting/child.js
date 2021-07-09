import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../../../store/store'
import { seekComponents } from '../../../../publicjs'

let getChangeComponent = null;
export default class childChinesePainting extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/fineArt/child/nav6.jpg').default,
                        subTitle: "国画",
                        title: "国画介绍",
                        text: "国画是中国的传统绘画形式，是用毛笔蘸水、墨、彩作画于绢或纸上。工具和材料有毛笔、墨、国画颜料、宣纸、绢等，题材可分人物、山水、花鸟等，技法可分具象和写意。"
                    }
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
                        "少儿国画入门的学习方法？",
                        "孩子好动，适合学国画吗？",
                        "学习国画有什么益处？",
                        "国画可以自学吗？  ",
                        "国画的基础是什么？",
                        "国画入门的学习方法？ ",
                        "学习国画，怎么用墨？  ",
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
        document.title = '桔子树艺术-少儿国画';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childChinesePainting') {
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
                    seekComponents(componentJson, 'childChinesePainting')
                }
            </div>
        )
    }
}

