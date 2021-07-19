import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class guitar extends Component {
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
                            { img: require('../../../assets/instrumentalMusic/guitar/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/IM/guitar/child", text: "少儿吉他", img: require('../../../assets/instrumentalMusic/guitar/nav1.png').default },
                        { address: "/site/wap/shanghai/IM/guitar/adult", text: "成人吉他", img: require('../../../assets/instrumentalMusic/guitar/nav2.png').default },
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
                            ['吉他集体班<br>（4-80岁）', '节奏型 五线谱  初级乐理 初级弹奏技巧等。根据学员特点弹奏成品曲目', '90分钟'],
                            ['吉他精品班<br>（4-80岁）', '节奏型 五线谱 初级乐理 初中级吉他演奏技巧 成品曲目 简单即兴伴奏等。根据学员特点强化成品曲目演奏', '90分钟'],
                            ['考级综合班<br>（6-15岁）', '成品曲目演奏、打击技巧，器乐考级综合提升课程。曲目演奏、打击处理', '90分钟'],
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
                    text: "通过器乐学习后的惊喜变化",
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
                            { img: require('../../../assets/instrumentalMusic/guitar/swiper1.png').default, text: "学习乐器，全面锻炼大脑" },
                            { img: require('../../../assets/instrumentalMusic/guitar/swiper2.png').default, text: "学乐器大量练习，会让您更有耐心、坚持不懈" },
                            { img: require('../../../assets/instrumentalMusic/guitar/swiper3.png').default, text: "乐器演奏促进手眼、手脚的协调与配合" },
                            { img: require('../../../assets/instrumentalMusic/guitar/swiper4.png').default, text: "演奏乐器是一种创造性行为，有助提高创新力" },
                            { img: require('../../../assets/instrumentalMusic/guitar/swiper5.png').default, text: "音乐助您情感更细腻，促进与人交流，提高社交能力" },
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
                            { img: require('../../../assets/instrumentalMusic/guitar/class1.png').default },
                            { img: require('../../../assets/instrumentalMusic/guitar/class2.png').default },
                            { img: require('../../../assets/instrumentalMusic/guitar/class3.png').default },
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
                    list: ['古典吉他难学吗？',
                        '吉他的和弦怎么弹？',
                        '吉他泛音怎么弹？',
                        '吉他分为哪几种？',
                        '吉他滑音怎么弹？',
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
        document.title = "桔子树艺术-吉他";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
