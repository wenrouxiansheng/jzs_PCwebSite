import { Component } from 'react'
import { seekComponents } from '../public'
import schoolJson from '../public/schoolJson'

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
                            { img: require('../assets/schoolList/banner.png').default, address: "#" }
                        ],
                        type: 'default'
                    },
                    style: {
                        height: '4rem'
                    }
                }
            },
            {
                component: 'Supernatant',
                props: {
                    style: {
                        
                    }
                }
            },
            {
                component: 'CampusShow',
                props: {
                    list: schoolJson
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
        document.title = "桔子树艺术-校区分布";
    }
    render() {

        const { componentsJson } = this.state;

        return seekComponents(componentsJson)
    }
}
