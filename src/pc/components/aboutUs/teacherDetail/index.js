import React, { Component } from 'react'
import './style.scss'
import img from '@assets/aboutUs/teacherDetail/teacher.jpg'

export default class teacherDetail extends Component {
    render() {
        return (
            <div className="teacherDetail">
                <img src={img} alt="" />
                <div className="info">
                    <h1>范培熠</h1>
                    <h3>个人简介</h3>
                    <div>
                        <span>教龄<span style={{width: '100%'}}></span></span>：
                        <div>
                            10年
                        </div>
                    </div>
                    <div>
                        <span>教学课程<span style={{width: '100%'}}></span> </span>：
                        <div className="text">
                            高级精品课、竞赛课、少儿中国舞、
                            少儿拉丁、少儿芭蕾
                        </div>
                    </div>
                    <h3>个人荣誉</h3>
                    <div className="honor">
                        <p>桔子树舞蹈组负责人</p>
                        <p>中国舞蹈家协会等级考试教师资格证</p>
                        <p>北京市奥运会开幕式一级舞蹈演员</p>
                        <p>北京市体育舞蹈公开赛第一名</p>
                        <p>北京市体育舞蹈公开赛第一名</p>
                        <p>北京市体育舞蹈公开赛第一名</p>
                    </div>
                </div>
            </div>
        )
    }
}
