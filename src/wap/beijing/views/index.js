import React, { Component } from 'react'
import DrawerNav from '../components/common/drawerNav'
import { seekComponents } from '../public'



export default class homePage extends Component {
  state = {
    componentsJson: [
      {
        component: 'Banner',
        props: {
          data: [
            { img: require('../assets/homepage/banner/banner1.png').default, address: "#" },
            { img: require('../assets/homepage/banner/banner2.png').default, address: "#" },
            { img: require('../assets/homepage/banner/banner3.png').default, address: "#" },
          ]
        }
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/icon1_03.png').default,
            title: { address: "#", text: "舞蹈培训" },
            linkList: [{ address: "#", text: "少儿舞蹈" }, { address: "#", text: "成人舞蹈" }],
            rightLink: null,
            subtitle: null
          }
        },
      },
      {
        component: 'TabControl',
        props: {
          data: [
            { address: "#", text: "民族舞", img: require('../assets/homepage/tabControl/tabbar1_03.png').default },
            { address: "#", text: "古典舞", img: require('../assets/homepage/tabControl/tabbar2_03.png').default },
            { address: "#", text: "中国舞", img: require('../assets/homepage/tabControl/tabbar3_03.png').default },
            { address: "#", text: "芭蕾舞", img: require('../assets/homepage/tabControl/tabbar4_03.png').default },
            { address: "#", text: "爵士舞", img: require('../assets/homepage/tabControl/tabbar5_03.png').default },
            { address: "#", text: "拉丁舞", img: require('../assets/homepage/tabControl/tabbar6_03.png').default },
            { address: "#", text: "街舞", img: require('../assets/homepage/tabControl/tabbar7_03.png').default },
          ]
        }
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/icon2_06.png').default,
            title: { address: "#", text: "声乐培训" },
            linkList: [{ address: "#", text: "少儿声乐" }, { address: "#", text: "成人声乐" }],
            rightLink: null,
            subtitle: null
          }
        },
      },
      {
        component: 'TabControl',
        props: {
          data: [
            { address: "#", text: "流行唱法", img: require('../assets/homepage/tabControl/tabbar8_03.png').default },
            { address: "#", text: "美声唱法", img: require('../assets/homepage/tabControl/tabbar9_03.png').default },
            { address: "#", text: "民族唱法", img: require('../assets/homepage/tabControl/tabbar10_03.png').default },
            { address: "#", text: "童声", img: require('../assets/homepage/tabControl/tabbar11_03.png').default },
            { address: "#", text: "音基", img: require('../assets/homepage/tabControl/tabbar12_03.png').default },
            { address: "#", text: "视唱练耳", img: require('../assets/homepage/tabControl/tabbar13_03.png').default },
            { address: "#", text: "音乐大师课", img: require('../assets/homepage/tabControl/tabbar14_03.png').default },
            { address: "#", text: "K歌训练营", img: require('../assets/homepage/tabControl/tabbar15_03.png').default },
          ]
        }
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/icon3_06.png').default,
            title: { address: "#", text: "器乐培训" },
            linkList: [{ address: "#", text: "少儿器乐" }, { address: "#", text: "成人器乐" }],
            rightLink: null,
            subtitle: null
          }
        },
      },
      {
        component: 'TabControl',
        props: {
          data: [
            { address: "#", text: "吉他", img: require('../assets/homepage/tabControl/tabbar16_03.png').default },
            { address: "#", text: "钢琴", img: require('../assets/homepage/tabControl/tabbar17_03.png').default },
            { address: "#", text: "架子鼓", img: require('../assets/homepage/tabControl/tabbar18_03.png').default },
            { address: "#", text: "尤克里里", img: require('../assets/homepage/tabControl/tabbar19_03.png').default },
          ]
        }
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/icon4_06.png').default,
            title: { address: "#", text: "美术培训" },
            linkList: [{ address: "#", text: "少儿美术" }, { address: "#", text: "成人美术" }],
            rightLink: null,
            subtitle: null
          }
        },
      },
      {
        component: 'TabControl',
        props: {
          data: [
            { address: "#", text: "素描", img: require('../assets/homepage/tabControl/tabbar20_03.png').default },
            { address: "#", text: "速写", img: require('../assets/homepage/tabControl/tabbar21_03.png').default },
            { address: "#", text: "油画", img: require('../assets/homepage/tabControl/tabbar22_03.png').default },
            { address: "#", text: "水粉", img: require('../assets/homepage/tabControl/tabbar23_03.png').default },
            { address: "#", text: "漫画", img: require('../assets/homepage/tabControl/tabbar24_03.png').default },
            { address: "#", text: "创意美术", img: require('../assets/homepage/tabControl/tabbar25_03.png').default },
          ]
        }
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/homePage1_03.png').default,
            title: { address: "#", text: "艺考考级" },
            linkList: null,
            rightLink: { text: "MORE>>", address: "#" },
            subtitle: null
          }
        },
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/homePage2_03.png').default,
            title: { address: "#", text: "全职教师" },
            linkList: null,
            rightLink: { text: "MORE>>", address: "#" },
            subtitle: "汇聚国内外专业院校优秀师资"
          }
        },
      },
      {
        component: 'TitleBar',
        props: {
          data: {
            icon: require('../assets/homepage/tabControl/homePage2_03.png').default,
            title: { address: "#", text: "品牌介绍" },
            linkList: null,
            rightLink: { text: "MORE>>", address: "#" },
            subtitle: "中国艺术教育优质品牌"
          }
        },
      },
      {
        component: 'BrandImageText',
        props: {
        },
      }
    ],

  }
  render() {
    const { componentsJson } = this.state;
    return (
      <>
        <DrawerNav />
        {seekComponents(componentsJson)}
      </>
    )
  }
}