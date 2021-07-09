import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'
import { allExam } from '../../publicjs/pageData'
//品牌介绍 - 页面汇总管理
let getChangeComponent = null;
export default class artGrading extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "www.baidu.com", src: require("../../assets/artGrading/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "舞蹈考级" }
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/artGrading/artExamDance/indexImg1.png').default, text: "民族舞", href: "/site/pc/artGrading/artExamDance/folkGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg2.png').default, text: "爵士舞", href: "/site/pc/artGrading/artExamDance/jazzGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg3.png').default, text: "芭蕾舞", href: "/site/pc/artGrading/artExamDance/balletGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg4.png').default, text: "古典舞", href: "/site/pc/artGrading/artExamDance/classicalGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg5.png').default, text: "街舞", href: "/site/pc/artGrading/artExamDance/hiphopGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg6.png').default, text: "现代舞", href: "/site/pc/artGrading/artExamDance/modernGrading" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg7.png').default, text: "国标舞", href: "/site/pc/artGrading/artExamDance/latinGrading" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "声乐考级" }
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/music/nav5.jpg').default, text: "流行唱法", href: "/site/pc/vocalMusic/adult/popMusic" },
                        { img: require('../../assets/music/adultMusic/nav2.jpg').default, text: "美声唱法", href: "/site/pc/vocalMusic/adult/belCanto" },
                        { img: require('../../assets/music/adultMusic/nav3.jpg').default, text: "民族唱法", href: "/site/pc/vocalMusic/adult/folkSongs" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "器乐考级" }
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/instrumentalMusic/adult/nav1.jpg').default, text: "吉他", href: "/site/pc/instrumentalMusic/child/musicTheory" },
                        { img: require('../../assets/instrumentalMusic/adult/nav2.jpg').default, text: "钢琴", href: "/site/pc/instrumentalMusic/adult/karaokeCamp" },
                        { img: require('../../assets/instrumentalMusic/adult/nav3.jpg').default, text: "架子鼓", href: "/site/pc/instrumentalMusic/adult/popMusic" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "社会考级" }
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/danceTraining/childrenDance/nav3.png').default, text: "少儿舞蹈", href: "/site/pc/artGrading/social/childDance" },
                        { img: require('../../assets/music/childMusic/nav3.jpg').default, text: "少儿声乐", href: "/site/pc/artGrading/social/childMusic" },
                        { img: require('../../assets/instrumentalMusic/child/nav1.jpg').default, text: "少儿器乐", href: "/site/pc/artGrading/social/childIM" },
                        { img: require('../../assets/fineArt/child/nav1.jpg').default, text: "少儿美术", href: "/site/pc/artGrading/social/childFineArt" },
                        { img: require('../../assets/danceTraining/adult/nav3.jpg').default, text: "成人舞蹈", href: "/site/pc/artGrading/social/adultDance" },
                        { img: require('../../assets/music/nav5.jpg').default, text: "成人声乐", href: "/site/pc/artGrading/social/adultMusic" },
                        { img: require('../../assets/instrumentalMusic/adult/nav1.jpg').default, text: "成人器乐", href: "/site/pc/artGrading/social/adultIM" },
                        { img: require('../../assets/fineArt/nav1.jpg').default, text: "成人美术", href: "/site/pc/artGrading/social/adultFineArt" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "特长考试" }
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/artGrading/nav1.jpg').default, text: "小升初舞蹈", href: "/site/pc/artGrading/specialty/childDance" },
                        { img: require('../../assets/artGrading/nav2.jpg').default, text: "小升初声乐", href: "/site/pc/artGrading/specialty/childMusic" },
                        { img: require('../../assets/artGrading/nav3.jpg').default, text: "小升初器乐", href: "/site/pc/artGrading/specialty/childIM" },
                        { img: require('../../assets/artGrading/nav4.jpg').default, text: "小升初美术", href: "/site/pc/artGrading/specialty/childFineArts" },
                        { img: require('../../assets/artGrading/nav5.jpg').default, text: "初升高舞蹈", href: "/site/pc/artGrading/specialty/adultDance" },
                        { img: require('../../assets/artGrading/nav6.jpg').default, text: "初升高声乐", href: "/site/pc/artGrading/specialty/adultMusic" },
                        { img: require('../../assets/artGrading/nav7.jpg').default, text: "初升高器乐", href: "/site/pc/artGrading/specialty/adultIM" },
                        { img: require('../../assets/artGrading/nav8.jpg').default, text: "初升高美术", href: "/site/pc/artGrading/specialty/adultFineArts" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "2021年桔子树社会考级考牌明细表" }
                }
            },
            {
                component: 'Table',
                props: {
                    tableData: {
                        title: ["考级类别", "考级级别", "适合范围"],
                        list: allExam
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
                        "什么是小升初特长考试？",
                        "少儿声乐考级对孩子有些好处？",
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
        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-考级综合';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            console.log(data)
            if (data.type !== 'artGrading') {
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
        PubSub.unsubscribe(getChangeComponent);
    }
    render() {
        const { componentJson } = this.state
        return (
            <div>
                {
                    seekComponents(componentJson, 'artGrading')
                }
            </div>
        )
    }
}
