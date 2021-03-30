import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import SchoolList from '@components/campusDistribution/schoolList'

export default class campusDistribution extends Component {
    state = {
        bannerData: [
            { id: 2, adress: "/campusDistribution", src: require("../../assets/schoolList/banner.png").default }
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <SchoolList />
            </div>
        )
    }
}
