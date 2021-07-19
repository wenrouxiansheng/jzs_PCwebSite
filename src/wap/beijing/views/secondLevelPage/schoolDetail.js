import { Component } from 'react'
import { seekComponents } from '../../public'


export default class schoolDetail extends Component {
    state = {
        componentsJson: [
            {
                component: 'ReturnBar',
                props: {},
            },
            {
                component: 'SchoolInfo',
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
        document.title = "桔子树艺术-校区详情";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
