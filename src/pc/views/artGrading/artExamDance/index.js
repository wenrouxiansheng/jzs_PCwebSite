import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { danceData } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class danceGrading extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../../assets/artGrading/artExamDance/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/artGrading/artExamDance/indexImg1.png').default, text: "民族舞", href: "/site/pc/artGrading/artExamDance/folkGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg2.png').default, text: "爵士舞", href: "/site/pc/artGrading/artExamDance/jazzGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg3.png').default, text: "芭蕾舞", href: "/site/pc/artGrading/artExamDance/balletGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg4.png').default, text: "古典舞", href: "/site/pc/artGrading/artExamDance/classicalGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg5.png').default, text: "街舞", href: "/site/pc/artGrading/artExamDance/hiphopGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg6.png').default, text: "现代舞", href: "/site/pc/artGrading/artExamDance/modernGrading" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg7.png').default, text: "国标舞", href: "/site/pc/artGrading/artExamDance/latinGrading" },
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
                    info: { title: "班型设置与开课信息", subTitle: "" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["考级类别", "考级级别", "适合范围"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿舞蹈考级1V1"
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
                                    text: "少儿舞蹈考级精品小班"
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
                                    text: "成人舞蹈考级1V1"
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
                                    text: "成人舞蹈考级精品小班"
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
                        "什么是舞蹈考级？",
                        "为什么让孩子参加考级？",
                        "考级去哪里考？",
                        "舞蹈考级需要注意什么？",
                        "舞蹈考级的要求有哪些？",
                        "没有基础可以参加舞蹈考级吗？",
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
        document.title = '桔子树艺术-舞蹈考级综合';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            console.log(data)
            if (data.type !== 'artExamDance') {
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
                    seekComponents(componentJson, 'artExamDance')
                }
            </div>
        )
    }
}
