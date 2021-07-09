import React, { Component } from 'react'

import { editingStatus } from '../../../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../../../publicjs'


let getChangeComponent = null;
export default class musicTheory extends Component {
    state = {
        componentJson: [
            {
                component: 'CategoryIntroduction',
                props: {
                    introduction: {
                        img: require('../../../../assets/music/childMusic/nav4.jpg').default,
                        subTitle: "少儿声乐（童声）",
                        title: "少儿声乐（童声）",
                        text: "少儿声乐（童声）就是充分利用童声时期的嗓音条件，结合自然气息运用等发声技巧的一种少年儿童演唱形式。基于少年儿童嗓音条件的特殊性和柔嫩性，训练中的教学方法就显得非常重要；而且青少年儿童处于智力开发的非常重要的时期，在教学过程中充分的利用学生的现有条件，进行多维度的启发与训练，对儿童素质的培养有不可低估的作用。"
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
                        "少儿声乐是否可以理解为唱歌？",
                        "总感觉孩子说话不清楚，能学唱歌吗？",
                        "少儿是否嗓音条件有限不适合歌唱？",
                        "少儿声乐是否需要天赋？一般人是否不能进行学习训练？ ",
                        "少儿几岁学唱歌合适？",
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
        document.title = '桔子树艺术-基础乐理';

        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'musicTheory') {
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
                    seekComponents(componentJson, 'musicTheory')
                }
            </div>
        )
    }
}
