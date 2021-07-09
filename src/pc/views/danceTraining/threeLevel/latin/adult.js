import React, { Component } from 'react'

import { editingStatus } from '../../../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../../../publicjs'


let getChangeComponent = null;
export default class adultLatin extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/danceTraining/adult/nav7.jpg').default,
                        subTitle: "拉丁舞",
                        title: "拉丁舞介绍",
                        text: "国际标准拉丁舞又指体育舞蹈，分为伦巴、恰恰、牛仔、桑巴和斗牛五支舞。无论是从生理心理或社交的观点来看，跳拉丁舞是一项高带氧的最佳运动之一。它不单有趣、自由，最大的好处是它总是与别人一起完成。成千上万的人正享受着拉丁舞带来的益处，自信度提高，气质更好，身姿更挺拔，腿部更修长，性格更开朗。,不仅观赏性极高，提升个人气质，塑形，美体，充满自信。"
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
                                    text: "拉丁集体班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功、能力素质与技巧培养、形体训练、原地重心移动和扭转、舞蹈组合动作分解及连贯、音乐节奏训练。配合音乐完成一支成品舞或者组合"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "拉丁精品班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本手位、脚位、体能素质、肌肉控制力、灵活性、协调性。能力素质与技巧培养，体态、仪态训练及提升。原地重心移动和扭转，原地重心移动和扭转，手中转步、连续扭臀转步、滑门步等拉丁步伐形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及多类型音乐配合"
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
                        "我该选择什么样的舞种？",
                        "每周训练几次比较合适？每节课多长时间合适？",
                        "成人零基础学习舞蹈，什么内容更适合？",
                        "零基础可以学习拉丁舞吗？",
                        "为什么需要拉丁舞鞋？不能用运动鞋？",
                        "多长时间能学会一支拉丁舞？",
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
        document.title = '桔子树艺术-成人拉丁舞';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'adultLatin') {
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
                    seekComponents(componentJson, 'adultLatin')
                }
            </div>
        )
    }
}
