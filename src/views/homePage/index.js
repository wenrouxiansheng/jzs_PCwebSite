import React, { Component } from 'react'


import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import ImgAndText from '@components/homePage/imgAndText'
import SchoolListImgText from '@components/homePage/schoolListImgText'
import ListOfOptionsImg from '@components/homePage/listOfOptionsImg'
import ExamLevelList from '@components/homePage/examLevelList'
import TeacherList from '@components/homePage/teacherList'
import GloryList from '@components/homePage/gloryList'
import BrandHonor from '@components/homePage/brandHonor'
import DropDownPrompt from '@components/common/dropDownPrompt'

export default class homePage extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/homePage/banner/homepage1.png").default },
            { id: 2, adress: "www.baidu.com", src: require("../../assets/homePage/banner/banner.jpg").default },
        ],
        imgAndText: [
            { id: 1, title: "强大的办学规模", text: "已开设北京16家，上海2家，18家直营校区，总教学面积近35000平米", src: require("../../assets/homePage/imgText/inImg1.png").default, type: "left" },
            { id: 2, title: "雄厚的师资力量", text: "数百名专业教师，毕业于国内外专业艺术院校", src: require("../../assets/homePage/imgText/inImg2.png").default, type: "right" },
            { id: 3, title: "艺术培训综合体", text: "声乐、器乐、舞蹈、美术齐头并进，科学、系统、完善的课程研发团队", src: require("../../assets/homePage/imgText/inImg3.png").default, type: "left" },
        ],
        status: ""
    }
    componentDidMount() {
        //组件挂载后监听滚轮
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    bindHandleScroll = (event) => {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if (scrollTop > 4000) {
            this.setState({
                status: 'hidden'
            })
        }
    }
    componentWillUnmount() {
        //组件即将销毁后删除监听滚轮事件
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    render() {
        const { bannerData, imgAndText, status } = this.state
        return (
            <div style={{ minHeight: '5313px' }}>
                <Banner bannerList={bannerData} />
                <DropDownPrompt status={status} />
                <Title key="title1" info={{ title: "为什么选择桔子树", subTitle: "Core advantages" }} />
                {
                    imgAndText.map((item, index) => {
                        return <ImgAndText detail={item} key={index} />
                    })
                }
                <Title info={{ title: "校区环境展示", subTitle: "Core advantages" }} />
                <SchoolListImgText />
                <Title info={{ title: "开设课程", subTitle: "Offering courses" }} />
                <ListOfOptionsImg />
                <Title info={{ title: "艺考考级", subTitle: "汇聚国内外艺术名师" }} />
                <ExamLevelList />
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术名师" }} />
                <TeacherList />
                <Title info={{ title: "学员风采", subTitle: "桔子树STAR  闪耀中外" }} />
                <GloryList />
                <Title info={{ title: "品牌荣誉", subTitle: "艺术教育素质品牌" }} />
                <BrandHonor />
            </div>
        )
    }
}