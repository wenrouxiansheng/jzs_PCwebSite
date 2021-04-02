import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import ArtNewsList from '@components/aboutUs/artNewsList'

export default class artNews extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "/studentHonor", src: require("../../assets/aboutUs/artNews/banner.jpg").default },
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <ArtNewsList />
            </div>
        )
    }
}
