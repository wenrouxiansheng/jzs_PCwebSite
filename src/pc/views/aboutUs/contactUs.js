import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import ContactInfo from '@components/aboutUs/contactInfo'

export default class contactUs extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "/studentHonor", src: require("../../assets/aboutUs/contactUs/banner.png").default },
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <ContactInfo />
            </div>
        )
    }
}
