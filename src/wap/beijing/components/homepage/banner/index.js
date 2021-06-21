import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DefaultBanner from '../../bannerPattern/defaultBanner'
import GradingTest from '../../bannerPattern/gradingTest'
import TeacherLoop from '../../bannerPattern/teacherLoop'
import Honor from '../../bannerPattern/honor'
import RealityImages from '../../bannerPattern/realityImages'
import BlurGradient from '../../bannerPattern/blurGradient'
import StudentShowLoop from '../../bannerPattern/studentShow'
import ClassLive from '../../bannerPattern/classLive'
import VagueLoop from '../../bannerPattern/vagueLoop'

export default class Banner extends Component {
    static propTypes = {
        data: PropTypes.shape({
            type: PropTypes.string.isRequired
        })
    }
    render() {
        const { type } = this.props.data
        const obj = {
            'default': <DefaultBanner propsData={this.props} />,
            'gradingTest': <GradingTest propsData={this.props} />,
            'teacherLoop': <TeacherLoop propsData={this.props} />,
            'horizontal': <Honor propsData={this.props} />,
            'classroom': <RealityImages propsData={this.props} />,
            'blurGradient': <BlurGradient propsData={this.props} />,
            'studentShowLoop': <StudentShowLoop propsData={this.props} />,
            'classLive': <ClassLive propsData={this.props} />,
            'vagueLoop': <VagueLoop propsData={this.props} />,
        }
        return obj[type];
    }
}

