import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'
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
                        { img: require('../../assets/artGrading/artExamDance/indexImg1.png').default, text: "民族舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg2.png').default, text: "爵士舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg3.png').default, text: "芭蕾舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg4.png').default, text: "古典舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg5.png').default, text: "街舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg6.png').default, text: "现代舞", href: "/home" },
                        { img: require('../../assets/artGrading/artExamDance/indexImg7.png').default, text: "国标舞", href: "/site/pc/artGrading/artExamDance/latinGrading" },
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
