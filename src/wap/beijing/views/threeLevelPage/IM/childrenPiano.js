import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childrenPiano extends Component {
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
                            { img: require('../../../assets/instrumentalMusic/childPiano/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "少儿钢琴1V1精品班", img: require('../../../assets/instrumentalMusic/childPiano/nav1.png').default },
                        { address: "service", text: "考级综合班", img: require('../../../assets/instrumentalMusic/childPiano/nav2.png').default },
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
                            ['少儿钢琴1V1精品班（4-15岁）', '节奏型 五线谱 演奏技巧 成品曲目等。根据学员特点强化成品曲目演奏', '90分钟'],
                            ['考级综合班（6-15岁）', '成品曲目演奏技巧，器乐考级综合提升课程。曲目演奏、打击处理', '90分钟'],
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
                    text: "通过器乐学习后孩子的惊喜变化",
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
                            { img: require('../../../assets/instrumentalMusic/childPiano/change1.png').default, text: "学习乐器，全面锻炼孩子大脑" },
                            { img: require('../../../assets/instrumentalMusic/childPiano/change2.png').default, text: "学乐器大量练习，会让孩子更有耐心、坚持不懈" },
                            { img: require('../../../assets/instrumentalMusic/childPiano/change3.png').default, text: "乐器演奏促进孩子手眼、手脚的协调与配合" },
                            { img: require('../../../assets/instrumentalMusic/childPiano/change4.png').default, text: "演奏乐器是一种创造性行为，有助提高孩子数学成绩" },
                            { img: require('../../../assets/instrumentalMusic/childPiano/change5.png').default, text: "学习乐器要不断阅读理解，有助提高孩子阅读理解能力" },
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
                        list: [
                            { img: require('../../../assets/instrumentalMusic/childPiano/class1.png').default },
                            { img: require('../../../assets/instrumentalMusic/childPiano/class2.png').default },
                            { img: require('../../../assets/instrumentalMusic/childPiano/class3.png').default },
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
                    text: "给孩子更多展示的舞台 塑造您的自信",
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
                        type: 'blurGradient',
                        list: publicData.IMShow
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
                    list: ['学钢琴多久时间能学会弹一首简单曲子？',
                        '成人学钢琴大概多久学会？',
                        '初学者如何学钢琴？',
                        '成人学习晚不晚？',
                        '如何为孩子选择钢琴老师？',
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
        document.title = "桔子树艺术-少儿钢琴";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
