import { Component } from 'react'
import { seekComponents } from '../../../../public'
import publicData from '../../../../public/pageData'

export default class juniorArtGradingTest extends Component {
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
                            { img: require('../../../../assets/gradingTest/fineArts/juniorArt/banner.jpg').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "service", text: "小升初美术<br>1V1", img: require('../../../../assets/gradingTest/fineArts/juniorArt/nav1.png').default },
                        { address: "service", text: "小升初美术<br>精品小班", img: require('../../../../assets/gradingTest/fineArts/juniorArt/nav2.png').default },
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
                            ['小升初美术1V1', '1人', '60分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
                            ['小升初美术精品小班', '6-8人', '90分钟', '<span style="color:#FF8000" class="btnsh_udesk_im">咨询详情</span>'],
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
                component: 'Publicity',
                props: {
                    img: require('../../../../assets/gradingTest/fineArts/art.png').default,
                    title: "适合人群",
                    text: "6-12周岁青少儿"
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
                        list: publicData.childArtClassroom,
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
                    list: ['什么是美术考级？',
                    '为什么让孩子参加考级？',
                    '考级去哪里考？',
                    '少儿美术考级需要注意什么？',
                    '美术对小升初有哪些帮助？',
                    '学习多久可以参加美术考级？',
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
        document.title = "桔子树艺术-小升初美术";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}