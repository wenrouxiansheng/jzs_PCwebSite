import React, { Component } from 'react'
import './style.scss'

export default class CompanyImgText extends Component {
    render() {
        return (
            <div className="companyImgText">
                <img src={require('../../../assets/aboutUs/headquarters.png').default} alt="" />
                <div>
                    <p >全国总部</p>
                    <span >北京市通州区新华西街60号万达广场A座30层</span>
                </div>
            </div>
        )
    }
}
