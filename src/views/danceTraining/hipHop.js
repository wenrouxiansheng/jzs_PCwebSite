import React, { Component } from 'react'
import img from '@assets/danceTraining/hipHop/course1.png'
import Title from '@components/homePage/title'
import Banner from '@components/homePage/bannerCarousel'
import CourseFlow from '@components/danceTraining/courseFlow'
import Table from '@components/common/table'
import QuestionConsultation from '@components/common/questionConsultation'
import TeacherList from '@components/homePage/teacherList'
import Form from '@components/common/form'
import LearningGoal from '@components/danceTraining/learningGoal'
import CategoryIntroduction from '@components/danceTraining/hipHop/categoryIntroduction'

export default class hipHop extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/danceTraining/hipHop/banner.jpg").default },
        ],
        courseList: [
            { img: require('../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "专业测评，了解学员上课愿望" },
            { img: require('../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专业老师，系统上课" },
            { img: require('../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "完成学习愿景" },
            { img: require('../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，模拟考场训练" },
            { img: require('../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "量身定制”一对一”教学计划" },
        ],
        tableData: {
            title: ["课程", "人数", "上课时长", "咨询"],
            list: [
                {
                    owspan: 1,
                    row: ["少儿街舞1V1", "1人", "45分钟", "<span>咨询详情</span>"],
                },
                {
                    owspan: 1,
                    row: ["少儿街舞1V2", "2人", "45分钟", "<span>咨询详情</span>"],
                },
                {
                    owspan: 1,
                    row: ["少儿街舞1V3", "3人", "45分钟", "<span>咨询详情</span>"],
                },
                {
                    owspan: 1,
                    row: ["少儿街舞精品小班课", "6-8人", "90分钟", "<span>咨询详情</span>"],
                },
                {
                    owspan: 1,
                    row: ["少儿街舞排练班课程", "8-10人", "90分钟", "<span>咨询详情</span>"],
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
        ],
        textList: [
            "基本功大幅提升", "即兴反应迅速", "丰富专业知识", "熟悉乐理知识", "适合个人的表演", "形成个人特色", "展示完整个人技巧", "自信面对考试", "表演完美细节处理"
        ],
        introduction: {
            img: img,
            subTitle: "街舞特色课",
            title: "街舞介绍",
            text: "街舞是起源于美国，基于不同的街头文化或音乐风格而产生的多个不同种类的舞蹈的统称。街舞可以锻炼舞感，节奏感，solo技巧，battle技巧，风格区分等内容。学习大量的成品舞，从而达到准确专业的诠释作品，拥有自信，个人魅力值增强，整体姿态帅气，活泼，站上舞台光芒四射。"
        }
    }
    render() {
        const { bannerData, courseList, tableData, questionList, textList, introduction } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <CategoryIntroduction introduction={introduction} />
                <Title info={{ title: "课程流程", subTitle: "" }} />
                <CourseFlow courseList={courseList} />
                <LearningGoal textList={textList} />
                <Title info={{ title: "班型设置与开课信息", subTitle: "" }} />
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
