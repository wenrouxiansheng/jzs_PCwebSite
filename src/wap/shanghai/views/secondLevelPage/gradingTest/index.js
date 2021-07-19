import { Component } from 'react'
import { seekComponents } from '../../../public'

export default class artGradingTest extends Component {
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
                            { img: require('../../../assets/gradingTest/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "舞蹈考级"
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/danceGradingTest/folk", text: "民族舞", img: require('../../../assets/dance/nav1.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/jazz", text: "爵士舞", img: require('../../../assets/dance/nav2.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/modern", text: "现代舞", img: require('../../../assets/dance/nav7.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/ballet", text: "芭蕾舞", img: require('../../../assets/dance/nav4.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/hipHop", text: "街舞", img: require('../../../assets/dance/nav5.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/latin", text: "国标舞", img: require('../../../assets/dance/nav3.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/classical", text: "古典舞", img: require('../../../assets/dance/nav6.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "声乐考级"
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/musicGradingTest/popMusic", text: "流行唱法", img: require('../../../assets/music/nav1.png').default },
                        { address: "/site/wap/shanghai/musicGradingTest/folk", text: "民族唱法", img: require('../../../assets/music/folkSinging/nav1.png').default },
                        { address: "/site/wap/shanghai/musicGradingTest/belCanto", text: "美声唱法", img: require('../../../assets/music/belCanto/nav1.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "器乐考级"
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/IMGradingTest/guitar", text: "吉他", img: require('../../../assets/instrumentalMusic/courseImg5.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/piano", text: "钢琴", img: require('../../../assets/instrumentalMusic/courseImg6.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/drumKit", text: "架子鼓", img: require('../../../assets/instrumentalMusic/courseImg7.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "社会考级"
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/musicGradingTest/child", text: "少儿声乐", img: require('../../../assets/gradingTest/nav1.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/child", text: "少儿器乐", img: require('../../../assets/gradingTest/nav2.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/child", text: "少儿舞蹈", img: require('../../../assets/gradingTest/nav3.png').default },
                        { address: "/site/wap/shanghai/fineArtsGradingTest/child", text: "少儿美术", img: require('../../../assets/gradingTest/nav4.png').default },
                        { address: "/site/wap/shanghai/musicGradingTest/adult", text: "成人声乐", img: require('../../../assets/gradingTest/nav5.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/adult", text: "成人器乐", img: require('../../../assets/gradingTest/nav6.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/adult", text: "成人舞蹈", img: require('../../../assets/gradingTest/nav7.png').default },
                        { address: "/site/wap/shanghai/fineArtsGradingTest/adult", text: "成人美术", img: require('../../../assets/gradingTest/nav8.png').default },
                    ],
                    style: {
                        borderBottom: '0px'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "特长考试"
                }
            },
            {
                component: 'TabControl',
                props: {
                    data: [
                        { address: "/site/wap/shanghai/musicGradingTest/juniorMusic", text: "小升初声乐", img: require('../../../assets/music/nav3.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/juniorIM", text: "小升初器乐", img: require('../../../assets/instrumentalMusic/childrenGuitar/nav1.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/juniorDance", text: "小升初舞蹈", img: require('../../../assets/dance/chineseDance/nav1.png').default },
                        { address: "/site/wap/shanghai/fineArtsGradingTest/juniorArt", text: "小升初美术", img: require('../../../assets/finieArts/childGouache/nav3.png').default },
                        { address: "/site/wap/shanghai/musicGradingTest/highMusic", text: "初升高声乐", img: require('../../../assets/music/nav6.png').default },
                        { address: "/site/wap/shanghai/IMGradingTest/highIM", text: "初升高器乐", img: require('../../../assets/instrumentalMusic/childrenGuitar/nav2.png').default },
                        { address: "/site/wap/shanghai/danceGradingTest/highDance", text: "初升高舞蹈", img: require('../../../assets/dance/chineseDance/nav2.png').default },
                        { address: "/site/wap/shanghai/fineArtsGradingTest/highArt", text: "初升高美术", img: require('../../../assets/finieArts/childGouache/nav2.png').default },
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
                        title: ['考级类别', '考级级别', '适合范围', '咨询'],
                        body: [
                            ['童声', '1-9级', '3-12岁', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['架子鼓', '1-9级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['尤克里里', '1-10级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['钢琴', '1-9级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            [{ text: "少儿舞蹈", rowspan: 4 }, '1-3级', '4-6岁零基础少儿', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['4-5级', '6-8岁少儿', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['6-7级', '8-10岁少儿', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['8-10级', '10-13岁青少年', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            [{ text: "拉丁舞考级", rowspan: 7 }, '1-9级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['铜牌', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['银牌', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['金牌', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['金星一级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['金星二级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['金星三级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
                            ['美术考级<br/><span style="color:#FF8000">(油画、国画、速写、水粉、动漫、山水等）</span>', '1-9级', '不限', '<span style="color:#FF8000" class="btnsh_udesk_im">考级咨询</span>'],
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
                    list: [
                        '什么是小升初特长考试？',
                        '少儿声乐考级对孩子有些好处？',
                        '视听练耳怎么考？',
                        '鼻音重如何解决？',
                        '民族唱法的气息怎么能稳？',
                        '钢琴考级第一次最高能考几级？',
                        '几岁可以考级？',
                        '成人声乐考级包括哪些曲目？',
                        '什么是假声？',
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
        document.title = "桔子树艺术-考级综合";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
