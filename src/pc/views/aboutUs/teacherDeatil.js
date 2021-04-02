import React, { Component } from 'react'
import TeacherDetail from '@components/aboutUs/teacherDetail'
import TeacherList from '@components/homePage/teacherList'
import Title from '@components/homePage/title'

export default class teacherDeatil extends Component {
    render() {
        return (
            <div>
                <TeacherDetail />
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术名师" }} />
                <TeacherList />
            </div>
        )
    }
}
