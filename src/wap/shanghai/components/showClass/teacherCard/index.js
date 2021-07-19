import React, { Component } from 'react'
import './style.scss'
import DataJson from '../../../public/pageData'

export default class teacherCard extends Component {
    state = {
        data: DataJson.musicTeacher
    }
    render() {
        const { data } = this.state;

        const node = data.map((item, index) => {
            return <div className="CharacterIntroduction" key={index}>
                <a href={item.address}>
                    <img src={item.img} alt="" />
                    <div>
                        <h3>{item.name}</h3>
                        <p className="teachingYears">教龄：{item.duration}</p>
                        <p className="course">教学课程：{item.course}</p>
                    </div>
                </a>
            </div>
        })

        return <>
            {node}
            <p className="loadMore">加载更多......</p>
        </>
    }
}
