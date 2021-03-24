import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import CurriculumPlan from '@components/brandIntroduction/curriculumPlan'
import BrandHonor from '@components/homePage/brandHonor'

//品牌介绍教研课程
export default class curriculumPlan extends Component {
    state = {
        bannerData: [
            { id: 2, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/course/banner.png").default }
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "一位学员  一份计划  一种方法", subTitle: "" }} />
                <CurriculumPlan />
                <Title info={{ title: "品牌荣誉", subTitle: "汇聚国内外艺术名师" }} />
                <BrandHonor />
            </div>
        )
    }
}
