import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import Exhibition from '@components/brandIntroduction/exhibition'
import Introduce from '@components/brandIntroduction/introduce'

export default class brandIntroduction extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/homePage/banner/homepage1.png").default },
        ]
    }
    render() {
        const { bannerData } = this.state
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "品牌介绍", subTitle: "Brand Introduction" }} />
                <Exhibition />
                <Introduce />
                <Title info={{ title: "快乐课堂", subTitle: "Happy Classroom" }} />
            </div>
        )
    }
}
