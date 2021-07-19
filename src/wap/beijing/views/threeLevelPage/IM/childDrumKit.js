import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childDrumKit extends Component {
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
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "少儿架子鼓集体班", img: require('../../../assets/instrumentalMusic/childDrumKit/nav1.png').default },
                        { address: "service", text: "少儿架子鼓精品班", img: require('../../../assets/instrumentalMusic/childDrumKit/nav2.png').default },
                        { address: "service", text: "考级综合班", img: require('../../../assets/instrumentalMusic/childDrumKit/nav3.png').default },
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
                            ['少儿架子鼓集体班（4-15岁）', '基本功、识谱、打击技巧、成品曲等。根据学员特点打击成品曲目', '90分钟'],
                            ['少儿架子鼓精品班（4-15岁）', '基本功 识谱 演奏技巧 合奏 初级乐理 初中级架子鼓打击技巧 成品曲目 简单即兴打击等。根据学员特点强化成品曲目打击', '90分钟'],
                            ['考级综合班（6-15岁）', '成品曲目演奏、打击技巧，器乐考级综合提升课程。曲目演奏、打击处理', '90分钟'],
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
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/change1.png').default, text: "学习乐器，全面锻炼孩子大脑" },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/change2.png').default, text: "学乐器大量练习，会让孩子更有耐心、坚持不懈" },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/change3.png').default, text: "乐器演奏促进孩子手眼、手脚的协调与配合" },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/change4.png').default, text: "演奏乐器是一种创造性行为，有助提高孩子数学成绩" },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/change5.png').default, text: "学习乐器要不断阅读理解，有助提高孩子阅读理解能力" },
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
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/class1.png').default },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/class2.png').default },
                            { img: require('../../../assets/instrumentalMusic/childDrumKit/class3.png').default },
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
                    list: ['架子鼓难学吗？',
                        '架子鼓入门怎么学？',
                        '架子鼓演奏坐姿注意哪些？',
                        '如何持鼓棒和正确打鼓？',
                        '架子鼓底鼓演奏方法？',
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
        document.title = "桔子树艺术-少儿架子鼓";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
