import React, { Component } from 'react'
import './index.scss'

export default class title extends Component {
    state = {
        info: {
            "title": "为什么选择桔子树",
            "subTitle": "Core advantages"
        }
    }
    render() {
        const { info } = this.props;
        return (
            <div className="animationTitle" style={{ marginTop: `${info.top || 50}px`, marginBottom: `${info.bottom || 40}px` }}>
                <h3><b>{info.title}</b></h3>
                <h6>{info.subTitle}</h6>
            </div>
        )
    }
}
