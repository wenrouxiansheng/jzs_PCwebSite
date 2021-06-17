import { Component } from 'react'
import { seekComponents } from '../../../public'

export default class childrenFolk extends Component {
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
                            { img: require('../../../assets/dance/folkDance/child/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "#", text: "蒙族舞", img: require('../../../assets/dance/folkDance/child/nav1.png').default },
                        { address: "#", text: "傣族舞", img: require('../../../assets/dance/folkDance/child/nav2.png').default },
                        { address: "#", text: "藏族舞", img: require('../../../assets/dance/folkDance/child/nav3.png').default },
                        { address: "#", text: "苗族舞", img: require('../../../assets/dance/folkDance/child/nav4.png').default },
                        { address: "#", text: "新疆舞", img: require('../../../assets/dance/folkDance/child/nav5.png').default },
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
                            ['民族舞集体班（4-15岁）', '基本功、能力素质与技巧培养、形体训练、灵活性、协调性，软度训练。民族舞基本功强化。舞蹈组合动作分解及连贯。配合音乐完成一支成品舞或者组合', '90分钟'],
                            ['民族舞精品班（4-15岁）', '民族舞基本手位、脚位、体能素质、肌肉控制力、灵活性、协调性，软度训练。能力素质与技巧培养，体态、仪态训练及提升，形体塑身强化，舞蹈组合动作分解及连贯。根据学员特点量身定制成品舞、排练及多类型音乐配合', '90分钟'],
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
                        list: [
                            { img: require('../../../assets/dance/folkDance/child/change1.png').default, text: "形体优美，气质优雅，具备一定的审美能力" },
                            { img: require('../../../assets/dance/folkDance/child/change2.png').default, text: "对舞蹈表演产生兴趣，善用肢体语言表现自己最美的一面" },
                            { img: require('../../../assets/dance/folkDance/child/change3.png').default, text: "站有站相、坐有坐相，身材匀称，身姿挺拔" },
                            { img: require('../../../assets/dance/folkDance/child/change4.png').default, text: "柔韧性、灵活性、协调性变好，身体素质明显提升" },
                            { img: require('../../../assets/dance/folkDance/child/change5.png').default, text: "性格变得开朗活泼，自信大方，表现欲、表现力增强" },
                            { img: require('../../../assets/dance/folkDance/child/change6.png').default, text: "得到很多比赛、表演的机会，自信满满，性格开朗活泼" },
                            { img: require('../../../assets/dance/folkDance/child/change7.png').default, text: "与小伙伴一起跳舞，配合度、协作能力明显提升" },
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
                            { img: require('../../../assets/dance/class/child1.png').default },
                            { img: require('../../../assets/dance/class/child2.png').default },
                            { img: require('../../../assets/dance/class/child3.png').default },
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
                    list: ['零基础可以学习民族舞吗？',
                        '少儿民族舞可以考级么？',
                        '学习民族舞必须要学会压腿么？'
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
        document.title = "桔子树艺术-少儿民族舞";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
