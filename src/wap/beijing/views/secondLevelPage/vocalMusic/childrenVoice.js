import { Component } from 'react'
import { seekComponents } from '../../../public'
import publicData from '../../../public/pageData'

export default class childrenVoice extends Component {
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
                            { img: require('../../../assets/music/childrenVoice/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "#", text: "童声合唱", img: require('../../../assets/music/childrenVoice/nav1.png').default },
                        { address: "#", text: "音基", img: require('../../../assets/music/childrenVoice/nav2.png').default },
                        { address: "#", text: "视唱练耳", img: require('../../../assets/music/childrenVoice/nav3.png').default },
                        { address: "#", text: "音乐大师课", img: require('../../../assets/music/childrenVoice/nav4.png').default },
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
                        list: publicData.childMusic,
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
                    list: [
                        '什么是少儿声乐？',
                        '少儿声乐演唱的方法对其将来变声期后是否依然有用？',
                        '少儿声乐是否可以理解为唱歌？',
                        '少儿是否嗓音条件有限不适合歌唱？',
                        '少儿声乐是否需要天赋？一般人是否不能进行学习训练？',
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
        document.title = "桔子树艺术-童声";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
