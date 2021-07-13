import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class vocalMusic extends Component {
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
                            { img: require('../../../assets/music/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/beijing/music/adult", text: "成人声乐", img: require('../../../assets/music/nav1.png').default },
                        { address: "/site/wap/beijing/music/child", text: "少儿声乐", img: require('../../../assets/music/nav2.png').default },
                        { address: "/site/wap/beijing/music/childrenVoice", text: "童声", img: require('../../../assets/music/nav3.png').default },
                        { address: "/site/wap/beijing/music/karaokeTraining", text: "K歌速成", img: require('../../../assets/music/nav4.png').default },
                        { address: "/site/wap/beijing/music/popularSinging", text: "流行唱法", img: require('../../../assets/music/nav5.png').default },
                        { address: "/site/wap/beijing/music/soundBase", text: "音基培训", img: require('../../../assets/music/nav6.png').default },
                        { address: "/site/wap/beijing/music/solfeggio", text: "视唱练耳", img: require('../../../assets/music/nav7.png').default },
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
                            ['少儿声乐集体班（4-15岁）', '训练幼儿正确的歌唱方法（姿势、呼吸以及各个腔体产生共振的能力）、音量、强弱的控制及协调各声部音量的能力，针对性选择曲目', '90分钟'],
                            ['少儿声乐精品班（4-15岁）', '培养幼儿歌唱的姿势、呼吸、发声、吐字归韵、音准协调声音的能力及歌曲情感的处理，帮助学员更好理解作品，演唱作品，表现作品', '90分钟'],
                            ['成人声乐集体班（16-80岁）', '发声技巧，气息运用、音阶练习等，根据自身声音条件，针对性选择曲目', '90分钟'],
                            ['成人声乐精品班（16-80岁）', '深度学习发声练习与练声曲，讲解分析音乐作品的创作背景，让学员更好理解作品，演唱作品，表现作品', '90分钟'],
                            ['考级综合班（6-15岁）', '成品曲目演唱、演唱技巧，音乐基础，视听练耳，声乐考级综合提升课程。', '90分钟'],
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
                        list: publicData.adultMusic,
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
                        list: publicData.musicClass,
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
                        list: publicData.musicShow
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
                    list: ['学习美声有什么好处？',
                        '如何练习音准？',
                        '如何练习美声唱法？',
                        '学习美声唱法应该上一对一还是集体课？',
                        '美声很难学吗？',
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
        document.title = "桔子树艺术-声乐综合";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
