import { Component } from 'react'
import { seekComponents } from '../../../public'

export default class classicalDance extends Component {
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
                            { img: require('../../../assets/dance/classicalDance/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "#", text: "少儿民族舞", img: require('../../../assets/dance/classicalDance/nav1.png').default },
                        { address: "#", text: "成人民族舞", img: require('../../../assets/dance/classicalDance/nav2.png').default },
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
                            ['古典舞集体班（4-80岁）', '基本功、能力素质与技巧培养、形体训练、舞蹈组合动作分解及连贯、音乐节奏训练。配合音乐完成一支成品舞或者组合', '90分钟'],
                            ['古典舞精品班（4-80岁）', '基本手型、手位、脚位、柔韧度练习及强化、能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及音乐配合', '90分钟'],
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
                    text: "通过舞蹈学习后的惊人变化",
                    style: {
                        marginTop: "0.8rem"
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        list: [
                            { img: require('../../../assets/dance/folkDance/change1.png').default, text: "增加协调能力，锻炼身体协调适应性" },
                            { img: require('../../../assets/dance/folkDance/change2.png').default, text: "增加身体柔韧度，身材匀称，身姿挺拔" },
                            { img: require('../../../assets/dance/folkDance/change3.png').default, text: "提升个人气质，身体素质明显提升" },
                            { img: require('../../../assets/dance/folkDance/change4.png').default, text: "社交类的舞蹈，可以和别人更好沟通" },
                            { img: require('../../../assets/dance/folkDance/change5.png').default, text: "性格更开朗，气质优雅，具备一定审美能力" },
                        ],
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
                    text: "汇聚国内外专业院校优秀师资",
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
                        list: [
                            { name: "王晓玉", duration: "5年", img: require("../../../assets/dance/teacher/teacher1_11.png").default, address: "#" },
                            { name: "王晓玉", duration: "5年", img: require("../../../assets/dance/teacher/teacher2_11.png").default, address: "#" },
                            { name: "王晓玉", duration: "5年", img: require("../../../assets/dance/teacher/teacher3_11.png").default, address: "#" },
                        ]
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
                        list: [
                            { img: require('../../../assets/dance/class/class1.png').default },
                            { img: require('../../../assets/dance/class/class2.png').default },
                            { img: require('../../../assets/dance/class/class3.png').default },
                        ],
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
                    text: "顾问全天候在线解决您的学习问题",
                    style: {
                        marginTop: "0.8rem",
                        marginBottom: '0'
                    }
                }
            },

            {
                component: 'QAList',
                props: {
                    list: ['零基础可以学习古典舞吗？',
                        '学习古典舞的好处有哪些？',
                        '学习古典舞有年龄限制么？男生可以跳么？'
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
        document.title = "桔子树艺术-古典舞综合";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
