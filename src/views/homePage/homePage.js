import React, { Component } from 'react'
import Header from '@components/header'
import Nav from '@components/horizontalNav'
import Banner from '@components/bannerCarousel'
export default class homePage extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/banner/homepage1.png").default },
            { id: 2, adress: "www.baidu.com", src: require("../../assets/banner/homepage2.png").default },
        ]
    }
    render() {
        const { bannerData } = this.state
        return (
            <div>
                <Header />
                <Nav />
                <Banner bannerList={bannerData} />
            </div>
        )
    }
}
