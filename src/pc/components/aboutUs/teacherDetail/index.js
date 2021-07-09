import React, { Component } from 'react'
import './style.scss'
import detailJson from './detailJson'

export default class teacherDetail extends Component {
    render() {
        const { style } = this.props;
        const sign = this.props.sign ?? 1;//没有参数的情况取1

        const { img, name, course, duration, honor } = detailJson[sign] ?? detailJson[1];//有参数  但是对象里面没有  也取1
        return (
            <div className="teacherDetail" style={{ ...style }}>
                <img src={img} alt="" />
                <div className="info">
                    <h1>{name}</h1>
                    <h3>个人简介</h3>
                    <div>
                        <span>教龄<span style={{ width: '100%' }}></span></span>：
                        <div> {course}</div>
                    </div>
                    <div>
                        <span>教学课程<span style={{ width: '100%' }}></span> </span>：
                        <div className="text">{duration}</div>
                    </div>
                    <h3>个人荣誉</h3>
                    <div className="honor" dangerouslySetInnerHTML={{__html: honor}}></div>
                </div>
            </div>
        )
    }
}
