import React, { Component } from 'react'
import './style.scss'

export default class Title extends Component {
    
    render() {
        const { text } = this.props;
        return (
            <div className="titleSpindrift">
                <div className="titleSpindriftContent">{text}</div>
            </div>
        )
    }
}
