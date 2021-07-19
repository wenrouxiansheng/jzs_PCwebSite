import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childGouache extends Component {
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
                            { img: require('../../../assets/finieArts/childGouache/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "人物水粉", img: require('../../../assets/finieArts/childGouache/nav1.png').default },
                        { address: "service", text: "肖像水粉", img: require('../../../assets/finieArts/childGouache/nav2.png').default },
                        { address: "service", text: "动物水粉", img: require('../../../assets/finieArts/childGouache/nav3.png').default },
                        { address: "service", text: "风景水粉", img: require('../../../assets/finieArts/childGouache/nav4.png').default },
                        { address: "service", text: "山水水粉", img: require('../../../assets/finieArts/childGouache/nav5.png').default },
                        { address: "service", text: "树木水粉", img: require('../../../assets/finieArts/childGouache/nav6.png').default },
                        { address: "service", text: "建筑水粉", img: require('../../../assets/finieArts/childGouache/nav7.png').default },
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
                            ['成人美术集体班<br>（16-80岁）', '开发美术潜能、充分发挥学员的个性，训练学生的观察能力、分析能力和想象能力，根据自身绘画兴趣，针对性选择绘画类型。', '90分钟'],
                            ['成人美术精品班<br>（16-80岁）', '开发美术潜能、充分发挥学员的个性，提高色彩运用能力、造型能力和绘画技巧，临摹、写生及优秀作品赏析。', '90分钟'],
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
                    list: ['色彩冷暖倾向不明确怎么办？',
                        '为什么画的水粉画看起来有点脏？',
                        '儿童美术启蒙教育的作用？',
                        '主次不分，色彩杂乱，各自为政，缺乏整体性是“花”主要原因是？',
                        '画出来为什么会显“灰”？',
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
        document.title = "桔子树艺术-少儿水粉";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}