import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class vocalMusic extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/music/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/music/nav1.jpg').default, text: "成人声乐", href: "/site/pc/vocalMusic/adultMusic" },
                        { img: require('../../assets/music/nav2.jpg').default, text: "少儿声乐", href: "/site/pc/vocalMusic/childrenMusic" },
                        { img: require('../../assets/music/nav3.jpg').default, text: "0基础音乐", href: "/site/pc/vocalMusic/child/musicTheory" },
                        { img: require('../../assets/music/nav4.jpg').default, text: "K歌速成", href: "/site/pc/vocalMusic/adult/karaokeCamp" },
                        { img: require('../../assets/music/nav5.jpg').default, text: "流行唱法", href: "/site/pc/vocalMusic/adult/popMusic" },
                        { img: require('../../assets/music/nav6.jpg').default, text: "音基培训", href: "/site/pc/vocalMusic/child/musicBasis" },
                        { img: require('../../assets/music/nav8.jpg').default, text: "视唱练耳", href: "/site/pc/vocalMusic/child/solfeggio" },
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
                    type: 'music'
                }
            },
            {
                component: 'LearningGoal',
                props: {
                    textList: [
                        "基本功大幅提升", "融入音乐知识学习", "声音更富有质感和情感", "即兴反应迅速", "表现欲、表现力增强", "尝试更多种类的歌曲，唱得更高，嗓子不累", "选择适合个人声音条件的歌曲进行学习，培养个人特色和魅力", "情感更细腻，促进与人交流，提高社交能力", "性格开朗活泼"
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
                                    text: "少儿声乐集体班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "训练幼儿正确的歌唱方法（姿势、呼吸以及各个腔体产生共振的能力）、音量、强弱的控制及协调各声部音量的能力，针对性选择曲目"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "少儿声乐精品班（4-15岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "培养幼儿歌唱的姿势、呼吸、发声、吐字归韵、音准协调声音的能力及歌曲情感的处理，帮助学员更好理解作品，演唱作品，表现作品"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "成人声乐集体班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "发声技巧，气息运用、音阶练习等，根据自身声音条件，针对性选择曲目"
                                },
                                {
                                    rowspan: 1,
                                    text: "90分钟"
                                },
                            ],
                            [
                                {
                                    rowspan: 1,
                                    text: "成人声乐精品班（16-80岁）"
                                },
                                {
                                    rowspan: 1,
                                    text: "深度学习发声练习与练声曲，讲解分析音乐作品的创作背景，让学员更好理解作品，演唱作品，表现作品"
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
                                    text: "成品曲目演唱、演唱技巧，音乐基础，视听练耳，声乐考级综合提升课程。"
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
                        "什么是少儿声乐？",
                        "少儿声乐演唱的方法对其将来变声期后是否依然有用？",
                        "孩子几岁学唱歌合适？",
                        "和同事唱K他们说我跟不上节奏？也听不清唱得歌词？",
                        "我唱歌别人老说我词唱不清楚？",
                        "朋友家人都说我跑调，我能唱好歌曲吗？",
                        "我想唱《我期待》、《我相信》等高音歌曲，可是怎么都上不去，我该怎么办？ ",
                        "我是女声，一到稍微高点的音就变假声了，而且声音特别的小？",
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
        document.title = '桔子树艺术-声乐综合';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'vocalMusic') {
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
                    seekComponents(componentJson, 'vocalMusic')
                }
            </div>
        )
    }
}

