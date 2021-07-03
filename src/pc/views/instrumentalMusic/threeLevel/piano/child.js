import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../../../store/store'
import { seekComponents } from '../../../../publicjs'

let getChangeComponent = null;
export default class childPiano extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/instrumentalMusic/child/nav2.jpg').default,
                        subTitle: "钢琴",
                        title: "钢琴介绍",
                        text: "钢琴是大众熟悉，且学习人数众多的乐器。桔子树艺术教育为此开设了多种钢琴班型，按照教学总计划从学习基本五线谱的认识和应用、单旋律的演奏技能与左手和旋的配奏规律、建立双手的配合弹奏能力，锻炼手指协调性、提升乐感、增强乐句的表现力从而达到拿到谱子就会弹，双手灵活、增强对音乐的敏感度及反应力、可以完整演奏一定数量的成品曲目，多种风格作品演绎，增加自信，气质提升、自我的情感抒发。"
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
                                    text: "少儿钢琴1V1精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "节奏型 五线谱 演奏技巧 成品曲目等。根据学员特点强化成品曲目演奏"
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
                                    text: "成品曲目演奏技巧，器乐考级综合提升课程。曲目演奏、打击处理"
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
                        "学钢琴多久时间能学会弹一首简单曲子？",
                        "少儿学钢琴大概多久入门？",
                        "初学者如何系统学钢琴？",
                        "如何为孩子选择钢琴老师？",
                        "弹钢琴手指怎么放？",
                        "学钢琴必须学习乐理吗？",
                        "什么钢琴曲适合初学者？ ",
                        "学钢琴要学习乐理知识吗？",
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
        document.title = '桔子树艺术-少儿钢琴';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childPiano') {
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
                    seekComponents(componentJson, 'childPiano')
                }
            </div>
        )
    }
}

