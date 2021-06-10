import { Component } from 'react'
import { seekComponents } from '../public'

const fontStyle = {
    padding: '0.15rem 0.3rem',
    fontSize: '0.28rem',
    color: 'rgb(85, 85, 85)'
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
                            { img: require('../assets/modelOfTeaching/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树新型教学模式——坚持实施<span style='color:#f2aa46'>“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人定制教学计划”。",
                    style: fontStyle
                }
            },
            {
                component: 'Picture',
                props: {
                    src: require('../assets/modelOfTeaching/class_img1_03.png').default,
                    style: {
                        width: '96%',
                        borderRadius: '0.15rem',
                        margin: '0px 0.15rem'
                    }
                },
            },
            {
                component: 'Paragraph',
                props: {
                    text: "经过几十万次实战调整和总结，使桔子树“私人定制教学计划”的教学模式、方法、体系不断完善、创新，从而摆脱了传统艺术教育在教学模式与方法上，因学院化导致的“单一死板”的缺点。",
                    style: fontStyle
                }
            },
           
            {
                component: 'Picture',
                props: {
                    src: require('../assets/modelOfTeaching/class_img2_03.png').default,
                    style: {
                        width: '96%',
                        borderRadius: '0.15rem',
                        margin: '0px 0.15rem'
                    }
                },
            },
            {
                component: 'Paragraph',
                props: {
                    text: "只要学员选择了桔子树，无论学员选择的是一对一课程，还是多人集体课程，学员在桔子树所享受到的，不仅仅是一位老师提供的教学服务，而是桔子树整个团队体系为一位学员所提供和制定的全方位的“一对一针对性教学服务”。",
                    style: fontStyle
                }
            },
            
            {
                component: 'Picture',
                props: {
                    src: require('../assets/modelOfTeaching/class_img3_03.png').default,
                    style: {
                        width: '96%',
                        height: '4.6rem',
                        borderRadius: '0.15rem',
                        margin: '0px 0.15rem'
                    }
                },
            },
            {
                component: 'Paragraph',
                props: {
                    text: "桔子树艺术开设的课程全面，上课时间灵活有弹性。尤其是在少儿艺术教学中，引入“奥尔夫音乐教学法”到课堂中，教学游戏化，使孩子们在玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。",
                    style: fontStyle
                }
            },
            {
                component: 'Picture',
                props: {
                    src: require('../assets/modelOfTeaching/class_img4_03.png').default,
                    style: {
                        width: '96%',
                        height: '4.6rem',
                        margin: '0px 0.15rem'
                    }
                },
            },
            {
                component: 'ButtonComponent',
                props: {
                    list: ['预约测评》', '咨询课程》'],
                    style: {
                        marginTop: '0.2rem'
                    }
                },
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
        document.title = "桔子树艺术-教学模式";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
