import React, { Component } from 'react'

import { editingStatus } from '../../../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../../../publicjs'


let getChangeComponent = null;
export default class childChinese extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/danceTraining/childrenDance/nav4.png').default,
                        subTitle: "中国舞",
                        title: "中国舞介绍",
                        text: "作为我国舞蹈艺术中的一个类别，是现中国大众人群所喜爱主流舞种，通过学习可让你的身姿体态更优美，针对性的教学使学员更好的集中注意力，能培养学员的意志力，敢于展示自我善于表演，更自信，学会坚持善于展示自己，给你身边的人留下深刻的印象！"
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
                                    text: "中国舞集体班（4-15岁）"
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
                                    text: "中国舞精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "形体训练、体能训练（软度、力度、平衡、重心、协调性、速度灵巧性及每一关节、每块肌肉和每条韧带进行的训练）。能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及多类型音乐配合"
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
                        "零基础可以学习中国舞吗？",
                        "中国舞怎么学？",
                        "中国舞多久能学会？",
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
        document.title = '桔子树艺术-少儿中国舞';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childChinese') {
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
                    seekComponents(componentJson, 'childChinese')
                }
            </div>
        )
    }
}
