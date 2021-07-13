import React, { Component } from 'react'
import './style.scss'
import schoolJson from '../../../../../pc/components/campusDistribution/schoolList/schoolJson'

export default class schoolInfo extends Component {
    render() {
        const num = this.props.type;
        const { name, classed, img, course, position } = schoolJson.list[num];

        return (
            <div className="schoolInfo">
                <img src={img} className="aPicture" alt="" />
                <div className="CharacterDetails">
                    <h3>{name}</h3>
                    <h4>校区地址</h4>
                    <p>{position}</p>
                    <h4>授课范围</h4>
                    <p>{course}</p>
                    <h4>开设班级</h4>
                    <p>{classed}</p>
                </div>
            </div>
        )
    }
}
