import { Component } from 'react'
import { seekComponents } from '../public'

const titleStyle = {
    textAlign: 'center',
    fontSize: '0.3rem',
    fontWeight: 'bold',
    marginTop: '0.3rem',
    lineHeight: '0.4rem'
}
const subtitleStyle = {
    padding: '0px 0.3rem',
    fontSize: '0.24rem',
    color: 'rgb(85, 85, 85)',
    margin: '0.15rem 0px',
    textAlign: 'center',
    lineHeight: '0.4rem'
}
export default class studentShow extends Component {
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
                            { img: require('../assets/studentShow/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "更大的舞台成就更好的你"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "“青春风采”国际青少年艺术节开幕式",
                    style: titleStyle
                }
            },

            {
                component: 'Paragraph',
                props: {
                    text: "桔子树学员登上国家级艺术殿堂——北京音乐厅，绽放青春风采",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            { img: require('../assets/studentShow/user1.png').default },
                            { img: require('../assets/studentShow/user2.png').default },
                            { img: require('../assets/studentShow/user3.png').default }
                        ],
                        wait: 1500
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "炫丽童年梦艺术大赛",
                    style: titleStyle
                }
            },

            {
                component: 'Paragraph',
                props: {
                    text: "桔子树学员受关工委邀请参加全国总决赛，登上国家大剧院舞台",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            { img: require('../assets/studentShow/user4.png').default },
                            { img: require('../assets/studentShow/user5.png').default },
                            { img: require('../assets/studentShow/user6.png').default }
                        ],
                        wait: 2000
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "海外桃李杯国际舞蹈大赛",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user7.png').default},
                            {img: require('../assets/studentShow/user8.png').default},
                            {img: require('../assets/studentShow/user9.png').default}
                        ],
                        wait: 1800
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "花儿朵朵少儿舞蹈展演",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "展演由中国舞蹈家协会主办，桔子树学员连续多届屡获殊荣",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user10.png').default},
                            {img: require('../assets/studentShow/user11.png').default},
                            {img: require('../assets/studentShow/user12.png').default}
                        ],
                        wait: 1900
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "李斯特杯香港国际钢琴公开赛",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树学员登上世界级舞台，在国家未来大剧院歌剧厅奏响华美乐章",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user13.png').default},
                            {img: require('../assets/studentShow/user14.png').default},
                            {img: require('../assets/studentShow/user15.png').default}
                        ],
                        wait: 2100
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "金桔杯艺术大赛",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树主办，连续三届被纳入由<br /> 北京市文资办主办的北京惠民文化消费季",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user16.png').default},
                            {img: require('../assets/studentShow/user17.png').default},
                            {img: require('../assets/studentShow/user18.png').default}
                        ],
                        wait: 2200
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "美术写生",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "感受美术学习的特有乐趣",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user19.png').default},
                            {img: require('../assets/studentShow/user20.png').default},
                            {img: require('../assets/studentShow/user21.png').default},
                            {img: require('../assets/studentShow/user22.png').default}
                        ],
                        wait: 1700
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "考级",
                    style: titleStyle
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "每年桔子树组织数万名学员参加中国舞蹈家协会、国际舞蹈家协会、中国音乐学院、中央音乐学院、中国美术学院主办的社会考级，并且是中国舞蹈家协会考级师范基地，中国美术学员定点考级单位。",
                    style: subtitleStyle
                }
            },
            {
                component: 'Banner',
                props: {
                    data: {
                        type: 'studentShowLoop',
                        list: [
                            {img: require('../assets/studentShow/user23.png').default},
                            {img: require('../assets/studentShow/user24.png').default},
                            {img: require('../assets/studentShow/user25.png').default},
                            {img: require('../assets/studentShow/user26.png').default}
                        ],
                        wait: 2000
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "更多课程咨询电话：<span style='font-size: 0.36rem;font-weight: bold;color:#f2aa46'>400-900-8898</span>",
                    style: {
                        margin: '0.5rem 0px',
                        textAlign: 'center',
                        fontsize: '0.3rem',
                        color: 'rgb(102, 102, 102)'
                    }
                }
            },
            {
                component: 'SuspensionTool',
                props: {},
            },
            {
                component: 'Footer',
                props: {},
            },
            {
                component: 'FooterBar',
                props: {},
            },
        ]
    }
    componentDidMount() {
        document.title = "桔子树艺术-学员风采";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
