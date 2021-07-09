import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../../../store/store'
import { seekComponents } from '../../../../publicjs'

let getChangeComponent = null;
export default class childDrumKit extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/instrumentalMusic/child/nav3.jpg').default,
                        subTitle: "架子鼓",
                        title: "架子鼓介绍",
                        text: "架子鼓是包含着各种不同类型、不同音色的手击和脚击乐器，在乐队中鼓手掌握着乐曲的速度和节奏等重要环节，是流行音乐中必不可少伴奏乐器之一。桔子树教育开设了多种架子鼓课程，按照教学总计划从基本节奏训练、认识鼓谱、手脚互动配合、音乐配合练习、节奏拆分练习等训练，能够建立清晰的节奏分辨能力，手脚配合协调，科学的掌握各种力度，流行歌曲打击配乐，增强表现力，音乐分辨能力加强，让你能够轻松掌握各种节奏。"
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
                    type: 'instrumentalMusic'
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "促进手眼、手脚的协调与配合", "全面锻炼大脑", "即兴反应迅速", "表现欲、表现力增强", "大量练习，会让您更有耐心、坚持不懈", "演奏乐器是一种创造性行为，有助提高创新力", "乐曲蕴含丰富的文化内容，有助拓宽知识面", "情感更细腻，促进与人交流，提高社交能力"
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
                                    text: "少儿架子鼓集体班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功、识谱、打击技巧、成品曲等。根据学员特点打击成品曲目"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿架子鼓精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "基本功 识谱 演奏技巧 合奏 初级乐理 初中级架子鼓打击技巧 成品曲目 简单即兴打击等。根据学员特点强化成品曲目打击"
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
                                    text: "成品曲目演奏、打击技巧，器乐考级综合提升课程。曲目演奏、打击处理"
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
                        "学打架子鼓多久时间能学会打击一首简单曲子？",
                        "架子鼓难学吗？",
                        "学打架子鼓大概多久学会？",
                        "初学者如何学打架子鼓？",
                        "架子鼓入门怎么学？",
                        "架子鼓演奏坐姿注意哪些？",
                        "如何持鼓棒和正确打鼓？ ",
                        "架子鼓底鼓演奏方法？",
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
        document.title = '桔子树艺术-少儿架子鼓';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childDrumKit') {
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
                    seekComponents(componentJson, 'childDrumKit')
                }
            </div>
        )
    }
}

