import React, { Component } from 'react'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import Table from '@components/common/table'
import QuestionConsultation from '@components/common/questionConsultation'
import CourseFlow from '@components/danceTraining/childrenDance/courseFlow'
import LearningGoal from '@components/danceTraining/childrenDance/learningGoal'
import TeacherList from '@components/homePage/teacherList'
import ZoomCarousel from '@components/brandIntroduction/index/classScene/zoomCarousel'
import Form from '@components/common/form'

export default class latinGrading extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "/artGrading/artExamDance/latinGrading", src: require("../../../assets/artGrading/artExamDance/latin/banner.jpg").default },
        ],
        tableData: {
            title: ["课程", "人数", "上课时常", "咨询"],
            list: [
                {
                    rowspan: 1,
                    row: ["艺考国标舞1V1", "1人", "60分钟", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["艺考乐理1V1", "1人", "60分钟", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["艺考乐理精品小班", "6-8人", "90分钟", "<span>考级咨询</span>"]
                },
                {
                    rowspan: 1,
                    row: ["艺考舞蹈考试模拟班", "6-8人", "90分钟", "<span>考级咨询</span>"]
                }
            ]
        },
        questionList: [
            "国标舞考级有哪些注意事项？",
            "什么是拉丁考级？",
            "为什么让孩子参加考级？",
            "拉丁舞考级需要注意什么?",
            "国标舞的考级要求有哪些？"
        ],
        courseList: [
            { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "专业测评，了解学员上课愿望" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专业老师，系统上课" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "完成学习愿景" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，模拟考场训练" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "量身定制”一对一”教学计划" },
        ],
        textList: [
            "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "变得更加自信", "表演细节处理"
        ],
        classList: [
            { src: require('../../../assets/danceTraining/childrenDance/dance_1.png').default },
            { src: require('../../../assets/danceTraining/childrenDance/dance_2.png').default },
            { src: require('../../../assets/danceTraining/childrenDance/dance_3.png').default },
            { src: require('../../../assets/danceTraining/childrenDance/dance_4.png').default },
            { src: require('../../../assets/danceTraining/childrenDance/dance_5.png').default },
        ]
    }
    render() {
        const { bannerData, tableData, questionList, courseList, textList, classList } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "小班授课，学习效果更显著", subTitle: "" }} />
                <Table tableData={tableData} />
                <Title info={{ title: "专业顾问全天候在线解决您的学习问题", subTitle: "" }} />
                <QuestionConsultation questionList={questionList} />
                <Title info={{ title: "课程流程", subTitle: "" }} />
                <CourseFlow courseList={courseList} />
                <LearningGoal textList={textList} />
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术名师" }} />
                <TeacherList />
                <Title info={{ title: "课堂实景", subTitle: "", bottom: "0" }} />
                <ZoomCarousel classList={classList}/>
                <Form />
            </div>
        )
    }
}
