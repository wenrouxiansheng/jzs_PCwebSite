import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import TeacherStandards from '@components/aboutUs/teacherStandards'
import TeachersClassification from '@components/aboutUs/teachersClassification'
export default class teachers extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "/teachers", src: require("../../assets/aboutUs/teachers/banner.jpg").default },
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <TeacherStandards />
                <TeachersClassification />
            </div>
        )
    }
}
