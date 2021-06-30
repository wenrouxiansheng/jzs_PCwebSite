import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class adultMusic extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/music/adultMusic/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CourseNavList',
                props: {
                    navList: [
                        { img: require('../../assets/music/nav5.jpg').default, text: "流行唱法", href: "/site/pc/vocalMusic/adult/popMusic" },
                        { img: require('../../assets/music/adultMusic/nav2.jpg').default, text: "美声唱法", href: "/site/pc/vocalMusic/adult/belCanto" },
                        { img: require('../../assets/music/adultMusic/nav3.jpg').default, text: "民族唱法", href: "/site/pc/vocalMusic/adult/folkSongs" },
                        { img: require('../../assets/music/nav4.jpg').default, text: "K歌训练营", href: "/site/pc/vocalMusic/adult/karaokeCamp" },
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
                        "什么是成人声乐？",
                        "声乐是否可以理解为唱歌？",
                        "声乐是否需要天赋？一般人是否不能进行学习训练？",
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
        document.title = '桔子树艺术-成人声乐';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'adultMusic') {
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
                    seekComponents(componentJson, 'adultMusic')
                }
            </div>
        )
    }
}

