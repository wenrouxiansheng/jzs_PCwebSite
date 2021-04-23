import React, { Component } from 'react'
import './style.scss'

export default class courseFlow extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="courseFlow">
                {
                    data.map((item, index) => {
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