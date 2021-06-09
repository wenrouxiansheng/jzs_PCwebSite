import { Component } from 'react'
import { seekComponents } from '../public'

export default class teachersList extends Component {
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
                            { img: require('../assets/teacherList/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'Title',
                props: {
                    text: "全职教师",
                    style: {
                        marginBottom: "0.1rem"
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "汇聚国内外专业院校优秀师资",
                    style: {
                        textAlign: 'center',
                        fontSize: '0.28rem'
                    }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    text: "由国内外专业艺术院校毕业的数百名专职教师，组成的教研教学团队，一直深耕于艺术教育行业，团队拥有专业的教学方式方法，研发了包含少儿声乐、中国舞、街舞、拉丁舞、吉他、尤克里里、美术等多门课程。教学采用“一位学员、一份计划、一种方法”课程服务体系，为学员提供定制化、高品质的教研教学服务。",
                    style: {
                        fontSize: '0.23rem',
                        padding: '0px 0.4rem',
                        color: 'rgb(85, 85, 85)', 
                        lineHeight: '0.4rem',
                        marginTop: '0.1rem'
                    }
                }
            },
            {
                component: 'TeacherCard',
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
        document.title = "桔子树艺术-师资力量";
    }
    render() {
        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
