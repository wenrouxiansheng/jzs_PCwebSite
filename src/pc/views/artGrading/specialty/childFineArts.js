import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { fineArt } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class specialtyChildFineArts extends Component {
    state = {
        componentJson: [
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/fineArt/child/nav1.jpg').default, text: "小升初美术1V1", href: "service" },
                        { img: require('../../../assets/fineArt/nav3.jpg').default, text: "小升初美术精品小班", href: "service" },
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
                        list: fineArt
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
                        title: ["课程", "人数", "上课时常"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "小升初美术1V1"
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
                                    text: "小升初美术精品小班"
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
                        "什么是美术考级？",
                        "为什么让孩子参加考级？",
                        "什么是小升初特长考试？",
                        "少儿美术考级需要注意什么？",
                        "如何应对孩子考场紧张？",
                        "美术对小升初有哪些帮助？",
                        "考前培训要每天上课吗？",
                        "学习多久可以参加美术考级？",
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
        document.title = '桔子树艺术-小升初美术考级';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'specialtyChildFineArts') {
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
                    seekComponents(componentJson, 'specialtyChildFineArts')
                }
            </div>
        )
    }
}
