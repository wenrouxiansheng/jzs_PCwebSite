import React, { Component } from 'react'
import './index.scss'

export default class title extends Component {
    render() {
        const { info } = this.props;
        console.log(info)
        return (
            <div className="animationTitle" style={{ marginTop: `${info.top || 50}px`, marginBottom: `${info.bottom || 40}px` }}>
                <h3><b>{info.title}</b></h3>
                <h6>{info.subTitle}</h6>
            </div>
        )
    }
}
