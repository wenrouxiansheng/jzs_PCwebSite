import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { musicData } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class socialChildIM extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../../assets/artGrading/social/childIM/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/instrumentalMusic/child/nav1.jpg').default, text: "少儿器乐考级1V1", href: "service" },
                        { img: require('../../../assets/instrumentalMusic/nav5.jpg').default, text: "少儿器乐考级精品小班", href: "service" },
                        { img: require('../../../assets/music/nav6.jpg').default, text: "音基考级1V1", href: "service" },
                        { img: require('../../../assets/artGrading/social/childMusic/nav4.jpg').default, text: "音基考级精品小班", href: "service" },
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
                        list: musicData
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
                                    text: "少儿器乐考级1V1"
                                },
                                {
                                    rowspan: 1,
                                    text: "1人"
                                },
                                {
                                    rowspan: 1,
                                    text: "45分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿器乐考级精品小班"
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
                                    text: "音基考级1V1"
                                },
                                {
                                    rowspan: 1,
                                    text: "1人"
                                },
                                {
                                    rowspan: 1,
                                    text: "45分钟"
                                },

                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "音基考级精品小班"
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
                        "什么是器乐考级？",
                        "为什么让孩子参加考级？",
                        "器乐考级需要考乐理吗？",
                        "器乐考级需要注意什么？",
                        "器乐考级的要求有哪些？",
                        "学习多久可以参加器乐考级？",
                        "什么是小升初特长考试？",
                        "一年有几次器乐考级？",
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
        document.title = '桔子树艺术-少儿器乐考级';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'socialChildIM') {
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
                    seekComponents(componentJson, 'socialChildIM')
                }
            </div>
        )
    }
}