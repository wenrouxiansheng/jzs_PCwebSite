import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../../../store/store'
import { seekComponents } from '../../../../publicjs'

let getChangeComponent = null;
export default class adultUkulele extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/instrumentalMusic/adult/nav4.jpg').default,
                        subTitle: "尤克里里",
                        title: "尤克里里介绍",
                        text: "尤克里里，又称乌克丽丽，四根弦，是一种夏威夷的拨弦乐器，归属在吉他乐器一族。桔子树艺术教育开设尤克里里多种课程，按照教学总计划从认识尤克里里，识谱开始，训练手指的力量和灵活性，学习实用的的乐理知识，认识和弦，双手节奏配合，练习流行弹唱，能识谱演奏，自如弹唱，即兴编配演奏。"
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
                                    text: "成人尤克里里集体班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "节奏型 五线谱 音乐启蒙 初级乐理 初级弹奏技巧等。根据学员特点弹奏成品曲目"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "成人尤克里里精品班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "节奏型 五线谱 初级乐理 初中级吉他演奏技巧 成品曲目 简单即兴伴奏等。根据学员特点强化成品曲目演奏"
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
                        "尤克里里和吉他有什么区别？",
                        "尤克里里适合成人学习吗？",
                        "尤克里里一周上几次课最好？",
                        "尤克里里好学么？",
                        "尤克里里是什么样的乐器？",
                        "学尤克里里必须学习乐理知识吗？",
                        "学尤克里里多久能弹奏一支简单的曲子？ ",
                        "如何系统学习尤克里里？",
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
        document.title = '桔子树艺术-成人尤克里里';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'adultUkulele') {
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
                    seekComponents(componentJson, 'adultUkulele')
                }
            </div>
        )
    }
}

