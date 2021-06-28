import React, { Component } from 'react'
import img from '@assets/danceTraining/hipHop/course1.png'

import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../publicjs'
let getChangeComponent = null;

export default class hipHop extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/danceTraining/hipHop/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: img,
                        subTitle: "街舞特色课",
                        title: "街舞介绍",
                        text: "街舞是起源于美国，基于不同的街头文化或音乐风格而产生的多个不同种类的舞蹈的统称。街舞可以锻炼舞感，节奏感，solo技巧，battle技巧，风格区分等内容。学习大量的成品舞，从而达到准确专业的诠释作品，拥有自信，个人魅力值增强，整体姿态帅气，活泼，站上舞台光芒四射。"
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
                    data: [
                        { img: require('../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "专业测评，了解学员上课愿望" },
                        { img: require('../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专业老师，系统上课" },
                        { img: require('../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "完成学习愿景" },
                        { img: require('../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，模拟考场训练" },
                        { img: require('../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "量身定制”一对一”教学计划" },
                    ]
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "自信面对考试", "表演完美细节处理"
                    ],
                    info: { title: "课程流程", subTitle: "" }
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
                        title: ["课程", "人数", "上课时长", "咨询"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿街舞1V1"
                                },
                                {
                                    rowspan: 1,
                                    text: "1人"
                                },
                                {
                                    rowspan: 1,
                                    text: "45分钟"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>咨询详情</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿街舞1V2"
                                },
                                {
                                    rowspan: 1,
                                    text: "2人"
                                },
                                {
                                    rowspan: 1,
                                    text: "45分钟"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>咨询详情</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿街舞1V3"
                                },
                                {
                                    rowspan: 1,
                                    text: "3人"
                                },
                                {
                                    rowspan: 1,
                                    text: "45分钟"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>咨询详情</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿街舞精品小班课"
                                },
                                {
                                    rowspan: 1,
                                    text: "6-8人"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>咨询详情</span>"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿街舞排练班课程"
                                },
                                {
                                    rowspan: 1,
                                    text: "8-10人"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>咨询详情</span>"
                                },
                            ]
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
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵1", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher2.png').default, name: "余子涵2", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher3.png').default, name: "余子涵3", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher4.png').default, name: "余子涵4", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher5.png').default, name: "余子涵5", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                            ]
                        },
                        {
                            info: [
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
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
            if (data.type !== 'hipHop') {
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
                    seekComponents(componentJson, 'hipHop')
                }
            </div>
        )
    }
}
