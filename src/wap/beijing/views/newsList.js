import { Component } from 'react'
import { seekComponents } from '../public'

export default class newsList extends Component {
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
                            { img: require('../assets/newsList/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            
            {
                component: 'NewsImageText',
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
        document.title = "桔子树艺术-新闻列表";
    }
    render() {
        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
