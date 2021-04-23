import React, { Component } from 'react'

import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class childrenDance extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/danceTraining/childrenDance/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/childrenDance/course1.png').default, text: "少儿民族舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course2.png').default, text: "少儿古典舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course3.png').default, text: "少儿芭蕾舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course4.png').default, text: "少儿中国舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course5.png').default, text: "少儿街舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course6.png').default, text: "少儿爵士舞", href: "/home" },
                        { img: require('../../assets/danceTraining/childrenDance/course7.png').default, text: "少儿拉丁舞", href: "/home" },
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
                        "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "变得更加自信", "表演细节处理"
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
                            {
                                owspan: 1,
                                row: ["少儿舞蹈1V1", "1人", "45分钟", "<span>咨询详情</span>"],
                            },
                            {
                                owspan: 1,
                                row: ["少儿舞蹈1V2", "2人", "45分钟", "<span>咨询详情</span>"],
                            },
                            {
                                owspan: 1,
                                row: ["少儿舞蹈1V3", "3人", "45分钟", "<span>咨询详情</span>"],
                            },
                            {
                                owspan: 1,
                                row: ["少儿舞蹈精品小班课", "6-8人", "90分钟", "<span>咨询详情</span>"],
                            },
                            {
                                owspan: 1,
                                row: ["少儿舞蹈排练班课程", "8-10人", "90分钟", "<span>咨询详情</span>"],
                            },
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
            console.log(data)
            if (data.type !== 'childrenDance') {
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
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'childrenDance'), 300) : null}
                key={index} flag={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    render() {
        return (
            <div>
                {
                    this.seekComponents()
                }
            </div>
        )
    }
}
