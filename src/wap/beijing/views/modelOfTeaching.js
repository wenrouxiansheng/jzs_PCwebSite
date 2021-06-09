import { Component } from 'react'
import { seekComponents } from '../public'

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
