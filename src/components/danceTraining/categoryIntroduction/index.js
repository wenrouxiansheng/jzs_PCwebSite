import React, { Component } from 'react'
import './style.scss'


export default class categoryIntroduction extends Component {
    render() {
        const { introduction } = this.props;
        return (
            <div className="categoryIntroduction">
                <div className="img">
                    <img src={introduction.img} alt="" />
                    <p>{introduction.subTitle}</p>
                </div>
                <div className="text">
                    <h1>{introduction.title}</h1>
                    <p>{introduction.text}</p>
                </div>
            </div>
        )
    }
}
