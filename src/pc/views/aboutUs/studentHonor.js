import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import ZoomCarousel from '@components/brandIntroduction/index/classScene/zoomCarousel'
import ImgTextCrossing from '@components/aboutUs/imgTextCrossing'
import ImgBlindPlatoon from '@components/aboutUs/imgBlindPlatoon'
import TeacherStandards from '@components/aboutUs/teacherStandards'
import Form from '@components/common/form'


const h1Style = {
    color: '#333', fontSize: '18px', fontWeight: 'bold', textAlign: 'center',marginBottom: '10px'
};
const h2Style = {
    color: '#555', fontSize: '15px', fontWeight: 'bold', textAlign: 'center'
};
export default class studentHonor extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "/studentHonor", src: require("../../assets/aboutUs/studentHonor/banner.jpg").default },
        ]
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "更大舞台，成就更好的你", subTitle: "" }} />
                <h1 style={h1Style}>“青春风采”国际青少年艺术节开幕式</h1>
                <h2 style={h2Style}>桔子树学员登上国家级艺术殿堂——北京音乐厅，绽放青春风采</h2>
                <ZoomCarousel />
                <h1 style={{ marginTop: '30px', ...h1Style }}>其他重大赛事活动</h1>
                <h2 style={h2Style}>桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季</h2>
                <ImgTextCrossing />
                <Title info={{ title: "更多活动", subTitle: "" }} />
                <ImgBlindPlatoon />
                <TeacherStandards />
                <Form />
            </div>
        )
    }
}
