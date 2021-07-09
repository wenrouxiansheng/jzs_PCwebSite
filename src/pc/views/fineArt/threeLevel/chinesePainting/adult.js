import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../../../store/store'
import { seekComponents } from '../../../../publicjs'

let getChangeComponent = null;
export default class adultChinesePainting extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/fineArt/nav6.jpg').default,
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
                                    text: "成人美术1V1（16-80岁）"
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
                                    text: "成人美术集体班（16-80岁）"
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
                        "学习国画有什么益处？",
                        "国画可以自学吗？",
                        "国画的基础是什么？",
                        "国画入门的学习方法？  ",
                        "学习国画，怎么用墨？ ",
                        "学习画画，从哪种画法开始更好？ ",
                        "学习画画应该具备怎样的素质与心态？   ",
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
        document.title = '桔子树艺术-成人国画';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'adultChinesePainting') {
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
                    seekComponents(componentJson, 'adultChinesePainting')
                }
            </div>
        )
    }
}

