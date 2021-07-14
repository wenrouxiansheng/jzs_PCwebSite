import { Component } from 'react'
import { seekComponents } from '../../../../public'
import publicData from '../../../../public/pageData'

export default class folkMusicGradingTest extends Component {
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
                            { img: require('../../../../assets/gradingTest/music/folk/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "艺考民歌<br>1V1", img: require('../../../../assets/gradingTest/music/folk/nav1.png').default },
                        { address: "service", text: "艺考乐理<br>1V1", img: require('../../../../assets/gradingTest/music/folk/nav2.png').default },
                        { address: "service", text: "艺考视听<br>练耳1V1", img: require('../../../../assets/gradingTest/music/folk/nav3.png').default },
                        { address: "service", text: "艺考乐理<br>精品小班", img: require('../../../../assets/gradingTest/music/folk/nav4.png').default },
                        { address: "service", text: "艺考视听练<br>耳精品小班", img: require('../../../../assets/gradingTest/music/folk/nav5.png').default },
                        { address: "service", text: "艺考声乐考<br>试模拟班", img: require('../../../../assets/gradingTest/music/folk/nav6.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Publicity',
                props: {
                    img: require('../../../../assets/gradingTest/publicity.png').default
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
                        title: ['课程', '人数', '上课时长', '咨询'],
                        body: [
                            ['艺考民族冲刺1V1', '1人', '60分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['艺考乐理1V1', '1人', '60分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['艺考乐理精品小班', '6-8人', '90分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['艺考视听练耳冲刺1V1', '1人', '60分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['艺考视听练耳精品小班', '6-8人', '90分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['艺考声乐考试模拟班', '6-8人', '90分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
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
                    text: "学习效果",
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
                component: 'Publicity',
                props: {
                    img: require('../../../../assets/gradingTest/music/vocalMusic.png').default,
                    title: "适合人群",
                    text: "艺考考生"
                }
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
                    list: ['民族唱法艺考有哪些注意事项？',
                        '什么是声乐考级？',
                        '为什么让孩子参加考级？',
                        '声乐考级需要注意什么？',
                        '声乐的考级要求有哪些？',
                        '学习多久可以参加声乐考级？',
                    ]
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
        document.title = "桔子树艺术-民族唱法考级";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
