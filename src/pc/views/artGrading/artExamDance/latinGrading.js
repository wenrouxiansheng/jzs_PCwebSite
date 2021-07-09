import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { danceData } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class latinGrading extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/artGrading/artExamDance/latinGrading", src: require("../../../assets/artGrading/artExamDance/latin/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/artGrading/artExamDance/latin/nav1.jpg').default, text: "艺考国标舞1V1", href: "service" },
                        { img: require('../../../assets/artGrading/artExamDance/latin/nav2.jpg').default, text: "艺考舞蹈考试模拟班", href: "service" },
                    ]
                }
            },
            
            {
                component: 'Title',
                props: {
                    info: { title: "桔子树社会考级考牌明细表", subTitle: "" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["考级类别", "考级级别", "适合范围"],
                        list: danceData
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "小班授课，学习效果更显著", subTitle: "" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["课程", "人数", "上课时长"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "艺考国标舞1V1"
                                },
                                {
                                    rowspan: 1,
                                    text: "1人"
                                },
                                {
                                    rowspan: 1,
                                    text: "60分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "艺考乐理1V1"
                                },
                                {
                                    rowspan: 1,
                                    text: "1人"
                                },
                                {
                                    rowspan: 1,
                                    text: "60分钟"
                                },
                                
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "艺考乐理精品小班"
                                },
                                {
                                    rowspan: 1,
                                    text: "6-8人"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                                
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "艺考舞蹈考试模拟班"
                                },
                                {
                                    rowspan: 1,
                                    text: "6-8人"
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
                        "什么是舞蹈考级？",
                        "为什么让孩子参加考级？",
                        "国标舞考级有哪些注意事项？?",
                        "什么是拉丁考级？",
                        "拉丁舞考级需要注意什么？",
                        "国标舞的考级要求有哪些？",
                        "什么是小升初特长考试？",
                        "一年有几次舞蹈考级？",
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
        document.title = '桔子树艺术-拉丁舞考级';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'latinGrading') {
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
                    seekComponents(componentJson, 'latinGrading')
                }
            </div>
        )
    }
}
