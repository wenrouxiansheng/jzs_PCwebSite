import React, { Component } from 'react'
import './style.scss'
import DataJson from '../../../public/pageData'

export default class teacherInfo extends Component {
    render() {
        const num = this.props.type;
        const { name, duration, img, course, honor } = DataJson.musicTeacher[num];

        return (
            <div className="teacherInfo">
                <img src={img} className="aPicture" alt="" />
                <div className="CharacterDetails">
                    <h3 className="name">{name}</h3>
                    <p className="text duration">教龄：{duration}</p>
                    <p className="text course">教学课程：{course}</p>
                    <h4>个人荣誉</h4>
                    <p className="honor" dangerouslySetInnerHTML={{ __html: honor }}></p>
                </div>
            </div>
        )
    }
}
