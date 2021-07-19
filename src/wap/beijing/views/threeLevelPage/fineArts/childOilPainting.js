import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childOilPainting extends Component {
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
                            { img: require('../../../assets/finieArts/childOilPainting/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "人物油画", img: require('../../../assets/finieArts/childOilPainting/nav1.png').default },
                        { address: "service", text: "肖像油画", img: require('../../../assets/finieArts/childOilPainting/nav2.png').default },
                        { address: "service", text: "风景油画", img: require('../../../assets/finieArts/childOilPainting/nav3.png').default },
                        { address: "service", text: "静物油画", img: require('../../../assets/finieArts/childOilPainting/nav4.png').default },
                        { address: "service", text: "风俗油画", img: require('../../../assets/finieArts/childOilPainting/nav5.png').default },
                        { address: "service", text: "历史油画", img: require('../../../assets/finieArts/childOilPainting/nav6.png').default },
                        { address: "service", text: "军事油画", img: require('../../../assets/finieArts/childOilPainting/nav7.png').default },
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
                            ['少儿美术集体班<br>（4-15岁）', '启发少儿对艺术的认识，通过美术课程的培养，开启右脑思维能力，充分发挥想象力', '90分钟'],
                            ['少儿美术精品班<br>（4-15岁）', '开发少儿的美术潜能、充分发挥学员的个性，提高色彩运用能力、造型能力和绘画技巧', '90分钟'],
                            ['考级综合班<br>（6-15岁）', '色彩运用能力、造型能力和绘画技巧，美术考级综合提升课程。', '90分钟'],
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
                    text: "通过美术学习后的惊喜变化",
                    style: {
                        marginTop: "0.8rem"
                    }
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        list: publicData.childArt,
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
                        list: publicData.childArtClassroom,
                        type: 'classLive'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "快乐绘画 提升创作能力",
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
                        type: 'classroom',
                        list: publicData.artImage
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
                    list: ['画好油画最重要的是什么？',
                        '油画可以自学吗？',
                        '油画的基础是什么？',
                        '画油画入门的学习方法？',
                        '正确的调色方法是什么？',
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
        document.title = "桔子树艺术-少儿油画";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
