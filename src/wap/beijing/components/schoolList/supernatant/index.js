import React, { Component } from 'react'
import './style.scss'

export default class Supernatant extends Component {

    render() {
        const { style } = this.props;
        return (
            <div className="contactInfo" style={{ ...style }}>
                <img src={require('../../../assets/schoolList/phone.png').default} alt="" /><span>免费体验课程：</span>
                
                <a href="tel:400-900-8898">400-900-8898</a>
            </div>
        )
    }
}
