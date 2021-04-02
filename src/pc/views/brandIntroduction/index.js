import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import Exhibition from '@components/brandIntroduction/index/exhibition'
import Introduce from '@components/brandIntroduction/index/introduce'
import ClassScene from '@components/brandIntroduction/index/classScene'
//品牌介绍 - 页面汇总管理
export default class brandIntroduction extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "品牌介绍", subTitle: "Brand Introduction" }} />
                <Exhibition />
                <Introduce />
                <ClassScene />
            </div>
        )
    }
}
