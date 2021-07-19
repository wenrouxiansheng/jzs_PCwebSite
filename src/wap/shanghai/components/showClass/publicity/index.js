import React, { Component } from 'react'
import './style.scss'

export default class Publicity extends Component {
    render() {
        const { img, title, text } = this.props;
        return (
            <div className="publicity" style={{ backgroundImage: `url(${img})` }}>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
