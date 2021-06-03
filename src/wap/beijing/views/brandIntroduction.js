import React, { Component } from 'react'
import { seekComponents } from '../public'

export default class brandIntroduction extends Component {
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
                            { img: require('../assets/homepage/banner/banner2.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "品牌介绍"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "中国艺术教育优质品牌 实现对自我的艺术追求",
                    style: {
                        textAlign: 'center',
                        fontSize: '0.3rem',
                        fontWeight: 'bold'
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树艺术教育，是中国艺术教育培训优质品牌。成立逾9年，总部位于北京市通州区万达广场A座，是集青少儿才艺培训、成人艺术培训、艺术课程研发、艺考辅导、企业服务、参赛培训等为一体的艺术教育培训综合体。",
                    style: {
                        fontSize: '0.24rem',
                        color: 'rgb(102, 102, 102)',
                        padding: '0rem 0.3rem',
                        margin: '0.2rem 0 0.3rem 0'
                    }
                }
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "办学规模",
                        subtitle: "强大的办学规模",
                        text: '已开设<span style="color: #f2aa46;">18</span>家直营校区 （北京<span style="color: #f2aa46;">16</span>家，上海<span style="color: #f2aa46;">2</span>家） 总教学面积近<span style="color: #f2aa46;">35000</span>平米',
                        img: require('../assets/homepage/brand/Picture1_03.png').default,
                        type: 2
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "师资力量",
                        subtitle: "雄厚的师资力量",
                        text: '数百名全职专业教师，毕业于国内外专业艺术院校',
                        img: require('../assets/homepage/brand/Picture2_03.png').default,
                        type: 1
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "教研团队",
                        subtitle: "专业的教研团队",
                        text: '艺术培训行业专业的科学、系统、完善的课程研发团队',
                        img: require('../assets/homepage/brand/Picture3_03.png').default,
                        type: 2
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "教学模式",
                        subtitle: "私人定制教学模式",
                        text: '专属“私人订制教学模式”，一位学员、一份计划、一种方法',
                        img: require('../assets/homepage/brand/Picture4_03.png').default,
                        type: 1
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "艺术综合体",
                        subtitle: "艺术培训综合体",
                        text: '声乐、器乐、舞蹈、美术齐头并进，培养孩子综合素养',
                        img: require('../assets/homepage/brand/Picture5_03.png').default,
                        type: 2
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "个性化教育",
                        subtitle: "个性化教育",
                        text: '尊重学员个性差异，因材施教，为青少年提供适合的艺术教育',
                        img: require('../assets/homepage/brand/Picture6_03.png').default,
                        type: 1
                    }
                },
            },
            {
                component: 'BrandImageText',
                props: {
                    data: {
                        title: "学员口碑",
                        subtitle: "良好的学员口碑",
                        text: '九年累计培训数十万学员，许多新学员由老学员转介绍而来',
                        img: require('../assets/homepage/brand/Picture7_03.png').default,
                        type: 2
                    }
                },
            },
            {
                component: 'Title',
                props: {
                    text: "快乐课堂"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树艺术开设的课程全面，上课时间灵活有弹性。尤其是在少儿艺术教学中，引入<span style='color: #f2aa46;'>“奥尔夫音乐教学法”</span>到课堂中，教学游戏化，使孩子们在玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。",
                    style: {
                        fontSize: '0.24rem',
                        color: '#555555',
                        padding: '0 0.3rem'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "发展历程"
                }
            },
            {
                component: 'Timeline',
                props: {
                    
                }
            },
            {
                component: 'Title',
                props: {
                    text: "品牌荣誉"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "先后获得“2018北京文化创意大赛全国总决赛二等奖”;“2018通州文创产业人才提升计划路演展示一等奖”;“2018世界移动互联网大会最具品牌影响力企业”;“百度教育2017年度教育行业典范”;“网易教育2014年度最具影响力教育集团”;“腾讯大燕网京津冀十佳教育辅导机构”等多项殊荣。",
                    style: {
                        textAlign:'center',
                        fontSize: '0.24rem',
                        color: '#555555',
                        padding: '0 0.3rem'
                    }
                }
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
        ],

    }
    render() {
        const { componentsJson } = this.state;
        return (
            <>
                {seekComponents(componentsJson)}
            </>
        )
    }
}
