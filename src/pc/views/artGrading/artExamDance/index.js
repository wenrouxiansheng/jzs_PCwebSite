import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
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
                        { img: require('../../../assets/artGrading/artExamDance/indexImg1.png').default, text: "民族舞", href: "/home" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg2.png').default, text: "爵士舞", href: "/home" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg3.png').default, text: "芭蕾舞", href: "/home" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg4.png').default, text: "古典舞", href: "/home" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg5.png').default, text: "街舞", href: "/home" },
                        { img: require('../../../assets/artGrading/artExamDance/indexImg6.png').default, text: "现代舞", href: "/home" },
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
                        title: ["考级类别", "考级级别", "适合范围", "咨询"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "童声"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-9级"
                                },
                                {
                                    rowspan: 1,
                                    text: "3-12岁"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "架子鼓"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-9级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "尤克里里"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-10级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "钢琴"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-9级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 4,
                                    text: "少儿舞蹈"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-3级"
                                },
                                {
                                    rowspan: 1,
                                    text: "4-6岁零基础少儿"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "4-5级"
                                },
                                {
                                    rowspan: 1,
                                    text: "6-8岁少儿"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "6-7级"
                                },
                                {
                                    rowspan: 1,
                                    text: "8-10岁少儿"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "8-10级"
                                },
                                {
                                    rowspan: 1,
                                    text: "10-13岁青少年"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 7,
                                    text: "国标舞考级"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-9级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "铜牌"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "银牌"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "金牌"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "金星一级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "金星二级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "金星三级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "美术考级<p>(油画、国画、速写、水粉、动漫、山水等）</p>"
                                },
                                {
                                    rowspan: 1,
                                    text: "1-9级"
                                },
                                {
                                    rowspan: 1,
                                    text: "不限"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ],
                        ]
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "顾问全天候在线解决您的学习问题", subTitle: "" }
                }
            },
            {
                component: 'QuestionConsultation',
                props: {
                    questionList: [
                        "什么是小升初特长考试？",
                        "声乐考级一年有几次？",
                        "视听练耳怎么考？",
                        "鼻音重如何解决？",
                        "民族唱法的气息怎么能稳？",
                        "钢琴考级第一次最高能考几级？",
                        "几岁可以考级？",
                        "成人声乐考级包括哪些曲目？",
                        "什么是假声？",
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "师资力量", subTitle: "汇聚国内外艺术名师" }
                }
            },
            {
                component: 'TeacherList',
                props: {
                    list: [
                        {
                            info: [
                                { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵1", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher2.png').default, name: "余子涵2", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher3.png').default, name: "余子涵3", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher4.png').default, name: "余子涵4", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher5.png').default, name: "余子涵5", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                            ]
                        },
                        {
                            info: [
                                { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                            ]
                        },
                    ]
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
