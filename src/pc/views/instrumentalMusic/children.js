import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class childrenIM extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/instrumentalMusic/child/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/instrumentalMusic/child/nav1.jpg').default, text: "少儿吉他", href: "/site/pc/instrumentalMusic/child/musicTheory" },
                        { img: require('../../assets/instrumentalMusic/child/nav2.jpg').default, text: "少儿钢琴", href: "/site/pc/instrumentalMusic/adult/karaokeCamp" },
                        { img: require('../../assets/instrumentalMusic/child/nav3.jpg').default, text: "少儿架子鼓", href: "/site/pc/instrumentalMusic/adult/popMusic" },
                        { img: require('../../assets/instrumentalMusic/child/nav4.jpg').default, text: "少儿尤克里里", href: "/site/pc/instrumentalMusic/child/musicBasis" },
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
                    type: 'instrumentalMusic'
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "促进手眼、手脚的协调与配合", "全面锻炼大脑", "即兴反应迅速", "表现欲、表现力增强", "大量练习，会让您更有耐心、坚持不懈", "演奏乐器是一种创造性行为，有助提高创新力", "乐曲蕴含丰富的文化内容，有助拓宽知识面", "情感更细腻，促进与人交流，提高社交能力"
                    ],
                    info: { title: "课程特色", subTitle: "" }
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
                        title: ["课程", "教学内容", "上课时长"],
                        list: [
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿器乐集体班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "节奏型 五线谱 音乐启蒙 初级乐理 初级弹奏技巧等。根据学员特点弹奏、打击成品曲目"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿器乐精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "节奏型 五线谱 初级乐理 初中级吉他演奏技巧 成品曲目 简单即兴伴奏等。根据学员特点强化成品曲目演奏、打击"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "考级综合班（6-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "成品曲目演奏、打击技巧，器乐考级综合提升课程。曲目演奏、打击处理"
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
                        "弹吉它难吗？",
                        "弹钢琴手指怎么放？",
                        "爵士鼓和架子鼓的区别？",
                        "尤克里里和乌克丽丽有什么区别？",
                        "学钢琴多久时间能学会弹一首简单曲子？",
                        "如何持鼓棒和正确打鼓？",
                        "吉他适合小孩子学习吗？ ",
                        "吉他的和弦怎么弹？",
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
        document.title = '桔子树艺术-少儿器乐';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'childrenIM') {
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
                    seekComponents(componentJson, 'childrenIM')
                }
            </div>
        )
    }
}

