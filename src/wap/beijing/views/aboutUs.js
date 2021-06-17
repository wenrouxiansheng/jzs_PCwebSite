import { Component } from 'react'
import { seekComponents } from '../public'

export default class aboutUs extends Component {
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
                            { img: require('../assets/aboutUs/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    }
                }
            },
            {
                component: 'ContactWay',
                props: {
                    style: {
                        
                    }
                }
            },
            {
                component: 'CompanyImgText',
                props: {
                    style: {
                        
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
        document.title = "桔子树艺术-联系我们";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
