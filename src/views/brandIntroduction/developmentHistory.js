import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import History from '@components/brandIntroduction/history'

//品牌介绍  - 历史历程
export default class developmentHistory extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
            // { id: 2, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/course/banner.png").default }
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "发展历程", subTitle: "Development Process" }} />
                <History />
            </div>
        )
    }
}
