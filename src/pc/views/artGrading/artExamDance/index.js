import React, { Component } from 'react'
import ImgNav from '@components/danceTraining/imgNav'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import Table from '@components/common/table'
import QuestionConsultation from '@components/common/questionConsultation'
import TeacherList from '@components/homePage/teacherList'
import Form from '@components/common/form'

export default class danceGrading extends Component {
    state = {
        navList: [
            { img: require('../../../assets/artGrading/artExamDance/indexImg1.png').default, text: "民族舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg2.png').default, text: "爵士舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg3.png').default, text: "芭蕾舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg4.png').default, text: "古典舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg5.png').default, text: "街舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg6.png').default, text: "现代舞", href: "/home" },
            { img: require('../../../assets/artGrading/artExamDance/indexImg7.png').default, text: "国标舞", href: "/pc/artGrading/artExamDance/latinGrading" },
        ],
        bannerData: [
            { id: 1, adress: "/artGrading/artExamDance", src: require("../../../assets/artGrading/artExamDance/banner.jpg").default },
        ],
        tableData: {
            title: ["考级类别", "考级级别", "适合范围", "咨询"],
            list: [
                {
                    rowspan: 1,
                    row: ["童声", "1-9级", "3-12岁", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["架子鼓", "1-9级", "不限", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["尤克里里", "1-10级", "不限", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["钢琴", "1-9级", "不限", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 5,
                    row: ["少儿舞蹈"]
                },
                {
                    owspan: 1,
                    row: ["1-3级", "4-6岁零基础少儿", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["4-5级", "6-8岁少儿", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["6-7级", "8-10岁少儿", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["8-10级", "10-13岁青少年", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 8,
                    row: ["国标舞考级"]
                },
                {
                    owspan: 1,
                    row: ["1-9级", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["铜牌", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["银牌", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["金牌", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["金星一级", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["金星二级", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["金星三级", "不限", "<span>考级咨询</span>"]
                },
                {
                    owspan: 1,
                    row: ["美术考级<p>(油画、国画、速写、水粉、动漫、山水等）</p>", "1-9级", "不限", "<span>考级咨询</span>"]
                },
            ]
        },
        questionList: [
            "什么是小升初特长考试？",
            "声乐考级一年有几次？",
            "视听练耳怎么考？",
            "鼻音重如何解决？",
            "民族唱法的气息怎么能稳？",
            "钢琴考级第一次最高能考几级？",
            "几岁可以考级？",
            "成人声乐考级包括哪些曲目？",
            "什么是假声？",
        ]
    }
    render() {
        const { navList, bannerData, tableData, questionList } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <ImgNav navList={navList} />
                <Title info={{ title: "桔子树社会考级考牌明细表", subTitle: "" }} />
                <Table tableData={tableData} />
                <Title info={{ title: "专业顾问全天候在线解决您的学习问题", subTitle: "" }} />
                <QuestionConsultation questionList={questionList} />
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术名师" }} />
                <TeacherList />
                <Form />
            </div>
        )
    }
}
