import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { musicData } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class specialtyAdultMusic extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../../assets/artGrading/specialty/adultMusic/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/music/nav5.jpg').default, text: "初升高声乐1V1", href: "service" },
                        { img: require('../../../assets/artGrading/social/childMusic/nav2.jpg').default, text: "初升高声乐精品小班", href: "service" }
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
                        title: ["课程", "人数", "上课时常"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "初升高声乐1V1"
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
                                    text: "初升高声乐精品小班"
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
                        "什么是声乐考级？",
                        "为什么让孩子参加考级？",
                        "怎么样唱歌咬字会清楚？",
                        "才艺展示选择哪些歌曲？",
                        "什么是初升高特长考试？",
                        "如何应对在考场上紧张？不敢开口？",
                        "声乐演出对初升高有哪些帮助？",
                        "考前培训要每天上课吗？",
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
        document.title = '桔子树艺术-初升高声乐考级';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'specialtyAdultMusic') {
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
                    seekComponents(componentJson, 'specialtyAdultMusic')
                }
            </div>
        )
    }
}
