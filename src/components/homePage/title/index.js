import React, { Component } from 'react'
import './index.scss'

export default class title extends Component {
    render() {
        const { info } = this.props;
        return (
            <div className="animationTitle">
                <h3><b>{info.title}</b></h3>
                <h6>{info.subTitle}</h6>
            </div>
        )
    }
}
