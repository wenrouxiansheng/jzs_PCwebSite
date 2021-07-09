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
                    list: [
                        { img: require('../assets/schoolList/school1_05.png').default, address: "#", title: "青年路校区", text: "北京市朝阳区青年路 地铁站佳亿青年汇" },
                        { img: require('../assets/schoolList/school2_05.png').default, address: "#", title: "公主坟校区", text: "北京市海淀区万寿路大诚中心寰岛博雅大酒店12层" },
                        { img: require('../assets/schoolList/school3_05.png').default, address: "#", title: "东直门校区", text: "北京市东城区东直门外大街天恒大厦" },
                        { img: require('../assets/schoolList/school4_05.png').default, address: "#", title: "西直门校区", text: "北京市海淀区万寿路大诚中心寰岛博雅大酒店12层" },
                        { img: require('../assets/schoolList/school5_05.png').default, address: "#", title: "大望路校区", text: "北京市朝阳区大望路 万达广场" },
                        { img: require('../assets/schoolList/school6_05.png').default, address: "#", title: "亚运村校区", text: "北京市朝阳区慧忠里103号洛克时代中心" },
                        { img: require('../assets/schoolList/school7_05.png').default, address: "#", title: "中关村校区", text: "北京市海淀区知春路113号银网中心" },
                        { img: require('../assets/schoolList/school8_05.png').default, address: "#", title: "崇文门校区", text: "北京市东城区崇文门外大街 18号便宜坊大厦615和1121" },
                        { img: require('../assets/schoolList/school9_05.png').default, address: "#", title: "五道口校区", text: "北京市海淀区成府路28号五道口华联购物中心D座" },
                        { img: require('../assets/schoolList/school10_05.png').default, address: "#", title: "望京校区", text: "北京市朝阳区广顺北大街33号福码大厦" },
                        { img: require('../assets/schoolList/school11_05.png').default, address: "#", title: "回龙观校区", text: "北京市昌平区回龙观西大街北店时代广场" },
                        { img: require('../assets/schoolList/school12_05.png').default, address: "#", title: "磁器口校区", text: "崇文区珠市口东大街2号1层105" },
                        { img: require('../assets/schoolList/school13_05.png').default, address: "#", title: "通州校区", text: "北京市通州万达广场C区 101-109" },
                        { img: require('../assets/schoolList/school14_05.png').default, address: "#", title: "安贞校区", text: "北京市东城区北三环东路安贞桥东" },
                        { img: require('../assets/schoolList/school15_05.png').default, address: "#", title: "管庄校区", text: "北京市朝阳区管庄路未来域C座109y" },
                        { img: require('../assets/schoolList/school16_05.png').default, address: "#", title: "石景山校区", text: "北京市石景山区石景山路22号瀚海长城大厦" }
                    ],
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
