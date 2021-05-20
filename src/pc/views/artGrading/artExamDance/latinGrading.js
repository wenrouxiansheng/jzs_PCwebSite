import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
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
                component: 'Title',
                props: {
                    info: { title: "小班授课，学习效果更显著", subTitle: "" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["课程", "人数", "上课时常", "咨询"],
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
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
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
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
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
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
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
                                {
                                    rowspan: 1,
                                    text: "<span style='color: #ff8000;'>考级咨询</span>"
                                },
                            ]
                        ]
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "专业顾问全天候在线解决您的学习问题", subTitle: "" }
                }
            },
            {
                component: 'QuestionConsultation',
                props: {
                    questionList: [
                        "国标舞考级有哪些注意事项？",
                        "什么是拉丁考级？",
                        "为什么让孩子参加考级？",
                        "拉丁舞考级需要注意什么?",
                        "国标舞的考级要求有哪些？"
                    ]
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
                        { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "专业测评，了解学员上课愿望" },
                        { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专业老师，系统上课" },
                        { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "完成学习愿景" },
                        { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，模拟考场训练" },
                        { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "量身定制”一对一”教学计划" },
                    ]
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "自信面对考试", "表演完美细节处理"
                    ],
                    info: { title: "学习目标", subTitle: "" }
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
                component: 'Title',
                props: {
                    info: { title: "课堂实景", subTitle: "", bottom: "0" }
                }
            },
            {
                component: 'ZoomCarousel',
                props: {
                    list: [
                        { src: require('../../../assets/danceTraining/childrenDance/dance_1.png').default },
                        { src: require('../../../assets/danceTraining/childrenDance/dance_2.png').default },
                        { src: require('../../../assets/danceTraining/childrenDance/dance_3.png').default },
                        { src: require('../../../assets/danceTraining/childrenDance/dance_4.png').default },
                        { src: require('../../../assets/danceTraining/childrenDance/dance_5.png').default },
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
