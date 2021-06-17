import { Component } from 'react'
import { seekComponents } from '../../../public'

export default class hiphop extends Component {
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
                            { img: require('../../../assets/music/popularSinging/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "#", text: "流行唱法", img: require('../../../assets/music/popularSinging/nav1.png').default },
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
                            ['成人声乐集体班（16-80岁）', '发声技巧，气息运用、音阶练习等，根据自身声音条件，针对性选择曲目', '90分钟'],
                            ['成人声乐精品班（16-80岁）', '深度学习发声练习与练声曲，讲解分析音乐作品的创作背景，让学员更好理解作品，演唱作品，表现作品', '90分钟'],
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
                    text: "通过声乐学习后的惊喜变化",
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
                            { img: require('../../../assets/music/popularSinging/change1.png').default, text: "正确的发声是唱歌的基础，融入音乐知识学习，让您轻松发声" },
                            { img: require('../../../assets/music/popularSinging/change2.png').default, text: "让声音更富有质感和情感" },
                            { img: require('../../../assets/music/popularSinging/change3.png').default, text: "尝试更多种类的歌曲，唱得更高，嗓子不累" },
                            { img: require('../../../assets/music/popularSinging/change4.png').default, text: "选择适合个人声音条件的歌曲进行学习，培养个人特色和魅力" },
                            { img: require('../../../assets/music/popularSinging/change5.png').default, text: "乐曲蕴含丰富的文化内容，有助拓宽知识面" },
                            { img: require('../../../assets/music/popularSinging/change6.png').default, text: "音乐助您情感更细腻，促进与人交流，提高社交能力" },
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
                            { img: require('../../../assets/music/class/class1.png').default },
                            { img: require('../../../assets/music/class/class2.png').default },
                            { img: require('../../../assets/music/class/class3.png').default },
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
                        classType: 'music'
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
                    list: ['零基础可以学习街舞吗？',
                        '男生学习什么街舞比较好？',
                        '学习街舞多久能跳成品舞？',
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
        document.title = "桔子树艺术-流行唱法";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
