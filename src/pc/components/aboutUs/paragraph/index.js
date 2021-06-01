import React, { Component } from 'react'
import './style.scss'

export default class paragraph extends Component {
    render() {
        const { style, text } = this.props;
        return (
            <div className="paragraph" style={{...style}} dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }
}
