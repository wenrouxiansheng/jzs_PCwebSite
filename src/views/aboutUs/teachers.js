import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from '@components/homePage/bannerCarousel'
import TeacherList from './teacherList'
import TeacherDeatil from './teacherDeatil'


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
                <Switch>
                    <Route path="/teachers/detail" component={TeacherDeatil} />{/**教师详情 */}
                    <Route path="/teachers" component={TeacherList} />{/**教师列表 */}
                </Switch>
            </div>
        )
    }
}
