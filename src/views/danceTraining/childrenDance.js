import React, { Component } from 'react'
import ImgNav from '@components/danceTraining/childrenDance/imgNav'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import CourseFlow from '@components/danceTraining/childrenDance/courseFlow'
import LearningGoal from '@components/danceTraining/childrenDance/learningGoal'
import Table from '@components/common/table'
import QuestionConsultation from '@components/common/questionConsultation'
import TeacherList from '@components/homePage/teacherList'
import Form from '@components/common/form'

export default class childrenDance extends Component {
    state = {
        navList: [
            { img: require('../../assets/danceTraining/childrenDance/course1.png').default, text: "少儿民族舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course2.png').default, text: "少儿古典舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course3.png').default, text: "少儿芭蕾舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course4.png').default, text: "少儿中国舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course5.png').default, text: "少儿街舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course6.png').default, text: "少儿爵士舞", href: "/home" },
            { img: require('../../assets/danceTraining/childrenDance/course7.png').default, text: "少儿拉丁舞", href: "/home" },
        ],
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
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
                ["少儿舞蹈1V1", "1人", "45分钟", "<span>咨询详情</span>"],
                ["少儿舞蹈1V2", "2人", "45分钟", "<span>咨询详情</span>"],
                ["少儿舞蹈1V3", "3人", "45分钟", "<span>咨询详情</span>"],
                ["少儿舞蹈精品小班课", "6-8人", "90分钟", "<span>咨询详情</span>"],
                ["少儿舞蹈排练班课程", "8-10人", "90分钟", "<span>咨询详情</span>"],
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
        const { navList, bannerData, courseList, tableData, questionList } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <ImgNav navList={navList} />
                <Title info={{ title: "课程流程", subTitle: "" }} />
                <CourseFlow courseList={courseList} />
                <LearningGoal />
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
