import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childDance extends Component {
    state = {
        componentsJson: [
            {
                component: 'DrawerNav',
                props: {}
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        list: [
                            { img: require('../../../assets/dance/child/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/beijing/dance/folkDance/child", text: "民族舞", img: require('../../../assets/dance/nav1.png').default },
                        { address: "/site/wap/beijing/dance/jazz/child", text: "爵士舞", img: require('../../../assets/dance/nav2.png').default },
                        { address: "/site/wap/beijing/dance/latinDance/child", text: "拉丁舞", img: require('../../../assets/dance/nav3.png').default },
                        { address: "/site/wap/beijing/dance/ballet/child", text: "芭蕾舞", img: require('../../../assets/dance/nav4.png').default },
                        { address: "/site/wap/beijing/dance/hiphop/child", text: "街舞", img: require('../../../assets/dance/nav5.png').default },
                        { address: "/site/wap/beijing/dance/chineseDance/child", text: "中国舞", img: require('../../../assets/dance/nav6.png').default },
                        { address: "/site/wap/beijing/dance/classicalDance/child", text: "古典舞", img: require('../../../assets/dance/nav7.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "小班授课 学习效果更显著"
                }
            },
            {
                component: 'Table',
                props: {
                    data: {
                        title: ['课程', '教学内容', '上课时长'],
                        body: [
                            ['少儿集体班（4-15岁）', '<span style="color: #FF8000">基础课程：</span>基本功、能力素质与技巧培养、形体训练、舞蹈组合动作分解及连贯、音乐节奏训练。<br><span style="color: #FF8000">课程提升：</span>配合音乐完成一支成品舞或者组合', '90分钟'],
                            ['少儿精品班（4-15岁）', '<span style="color: #FF8000">基础课程：</span>基本手型、手位、脚位、柔韧度练习及强化、能力素质与技巧培养，体态、仪态训练及提升，舞蹈组合动作分解及连贯。<br><span style="color: #FF8000">课程提升：</span>根据学员特点量身定制成品舞、排练及音乐配合', '90分钟'],
                            ['考级综合班（4-15岁）', '形体基训，柔韧，节奏，各舞种基本功，舞蹈考级综合课程。体能训练，成品舞表演', '90分钟'],
                        ]
                    }
                }
            },
            {
                component: 'ButtonComponent',
                props: {
                    list: ['点击了解班级详情'],
                    style: {
                        marginTop: '0.4rem'
                    }
                },
            },
            {
                component: 'Title',
                props: {
                    text: "通过舞蹈学习孩子的惊喜变化",
                    style: {
                        marginTop: "0.8rem"
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        list: publicData.danceChangechild,
                        type: 'vagueLoop'
                    }
                }
            },
            {
                component: 'ButtonComponent',
                props: {
                    list: ['点击了解更多学习效果'],
                    style: {
                        marginTop: '0.4rem'
                    }
                },
            },
            {
                component: 'Title',
                props: {
                    text: "精品试听课 免费上",
                    style: {
                        marginTop: "0.8rem"
                    }
                }
            },
            {
                component: 'PictureComponent',
                props: {},
            },
            {
                component: 'Title',
                props: {
                    text: "优秀师资+教学计划=学习效果",
                    style: {
                        marginTop: "0.8rem",
                        marginBottom: '0'
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "汇聚国内外艺术院校师资力量",
                    style: {
                        textAlign: 'center',
                        fontSize: '0.28rem',
                        color: '#555555',
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'teacherLoop',
                        list: publicData.musicTeacher
                    }
                }
            },
            {
                component: 'ButtonComponent',
                props: {
                    list: ['点击了解师资详情'],
                    style: {
                        marginTop: '0.4rem'
                    }
                },
            },
            {
                component: 'Title',
                props: {
                    text: "教学环境整洁明亮",
                    style: {
                        marginTop: "0.8rem",
                        marginBottom: '0'
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        list: publicData.danceChildClass,
                        type: 'classLive'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "每年百余场演出",
                    style: {
                        marginTop: "0.8rem",
                        marginBottom: '0'
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "给孩子更多展示的舞台塑造孩子自信",
                    style: {
                        textAlign: 'center',
                        fontSize: '0.28rem',
                        color: '#555555',
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'blurGradient'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "课程顾问全天候在线解答您的学习问题",
                    style: {
                        marginTop: "0.8rem",
                        marginBottom: '0'
                    }
                }
            },

            {
                component: 'QAList',
                props: {
                    list: ['我该为孩子选择什么样的舞种？',
                        '孩子每周训练几次比较合适？每节课多长时间合适？',
                        '孩子启蒙（3-5岁）应该学习舞蹈，什么内容更适合？'
                    ]
                },
            },
            {
                component: 'Footer',
                props: {},
            },
            {
                component: 'SuspensionTool',
                props: {},
            },
            {
                component: 'FooterBar',
                props: {},
            },

        ]
    }
    componentDidMount() {
        document.title = "桔子树艺术-少儿舞蹈综合";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
