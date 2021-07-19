import React, { Component } from 'react'
import './style.scss'

export default class Title extends Component {
    
    render() {
        const { text, style } = this.props;
        return (
            <div className="titleSpindrift" style={{...style}}>
                <div className="titleSpindriftContent">{text}</div>
            </div>
        )
    }
}
