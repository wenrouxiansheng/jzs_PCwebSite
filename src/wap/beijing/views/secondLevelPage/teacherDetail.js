import { Component } from 'react'
import { seekComponents } from '../../public'

export default class teacherDetail extends Component {
    state = {
        componentsJson: [
            {
                component: 'ReturnBar',
                props: {},
            },
            {
                component: 'TeacherInfo',
                props: {
                    type: this.props.match.params.sign
                },
            },
            {
                component: 'Supernatant',
                props: {
                    style: {
                        top: "5.3rem"
                    }
                }
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
        document.title = "桔子树艺术-教师详情";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
