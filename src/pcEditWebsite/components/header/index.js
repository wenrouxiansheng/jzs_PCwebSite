import React, { Component } from 'react'
import "./style.scss"


export default class editHeader extends Component {
    render() {
        return (
            <div className="editHeader">
                <div className="user">
                    <img src={require('../../assets/template/swiper1.png').default} alt=""/>
                    <span>admin</span>
                </div>
                <button>保存修改</button>
            </div>
        )
    }
}