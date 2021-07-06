import React, { Component } from 'react'

import { seekComponents } from '../../../publicjs'
import { editingStatus } from '../../../../store/store'
import { allExam } from '../../../publicjs/pageData'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class specialty extends Component {
    state = {
        componentJson: [
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../../assets/danceTraining/childrenDance/nav3.png').default, text: "小升初舞蹈", href: "/site/pc/artGrading/specialty/childDance" },
                        { img: require('../../../assets/music/childMusic/nav3.jpg').default, text: "小升初声乐", href: "/site/pc/artGrading/specialty/childMusic" },
                        { img: require('../../../assets/instrumentalMusic/child/nav1.jpg').default, text: "小升初器乐", href: "/site/pc/artGrading/specialty/childIM" },
                        { img: require('../../../assets/fineArt/child/nav1.jpg').default, text: "小升初美术", href: "/site/pc/artGrading/specialty/childFineArts" },
                        { img: require('../../../assets/danceTraining/adult/nav3.jpg').default, text: "初升高舞蹈", href: "/site/pc/artGrading/specialty/adultDance" },
                        { img: require('../../../assets/music/nav5.jpg').default, text: "初升高声乐", href: "/site/pc/artGrading/specialty/adultMusic" },
                        { img: require('../../../assets/instrumentalMusic/adult/nav1.jpg').default, text: "初升高器乐", href: "/site/pc/artGrading/specialty/adultIM" },
                        { img: require('../../../assets/fineArt/nav1.jpg').default, text: "初升高美术", href: "/site/pc/artGrading/specialty/adultFineArts" },

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
        document.title = '桔子树艺术-特长考试';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            console.log(data)
            if (data.type !== 'specialty') {
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
                    seekComponents(componentJson, 'specialty')
                }
            </div>
        )
    }
}
