import React, { Component } from 'react'

import { editingStatus } from '../../../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../../../publicjs'


let getChangeComponent = null;
export default class folkSongs extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../../../assets/music/folkSongs/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/music/adultMusic/nav3.jpg').default,
                        subTitle: "民族唱法",
                        title: "民族唱法",
                        text: "民族唱法，是由中国各族人民按照自己的习惯和爱好，创造和发展起来的歌唱艺术的一种唱法。包括中国的戏曲唱法、说唱唱法、民间歌曲唱法和民族新唱法等四种唱法。民族唱法是我国民族的宝贵文化财富。民歌唱法的特点，声音听起来很甜美，吐字清晰，气息讲究，音调多高亢。在演唱形式上多种多样，有鲜明的民族特色，语言生动，感情质朴。民歌带有浓郁的地方音调，在风格处理上北方民歌豪放悍犷，南方民歌委婉灵巧，高原山区民歌高亢嘹亮，平原地区民歌舒展自如。代表人物：彭丽媛、阎维文、宋祖英等"
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
                    type: 'dance'
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
                        "我特别喜欢民族唱法尤其声音特好听，我想要这种声音可以吗？",
                        "蒙古长调是民族唱法吗？",
                        "看到很多歌唱家表情都是笑的，笑是怎么回事？",
                        "颤音是怎么来的?是喉抖出来的吗？",
                        "零基础可以学习民族唱法吗？ ",
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
        document.title = '桔子树艺术-民族唱法';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'folkSongs') {
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
                    seekComponents(componentJson, 'folkSongs')
                }
            </div>
        )
    }
}
