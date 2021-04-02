import React, { Component } from 'react'
import TeacherStandards from '@components/aboutUs/teacherStandards'
import TeachersClassification from '@components/aboutUs/teachersClassification'

export default class teacherList extends Component {
    render() {
        return (
            <div>
                <TeacherStandards />
                <TeachersClassification />
            </div>
        )
    }
}
