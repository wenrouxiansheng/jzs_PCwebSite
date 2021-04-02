import React, { Component } from 'react'
import './style.scss'

export default class courseFlow extends Component {
    render() {
        const { courseList } = this.props;
        return (
            <div className="courseFlow">
                {
                    courseList.map((item, index) => {
                        return <div className="flowContainer" style={{ backgroundImage: `url(${item.img})` }} key={index}>
                            <p className="num">{item.num}</p>
                            <p className="text">{item.text}</p>
                        </div>
                    })
                }

            </div>
        )
    }
}