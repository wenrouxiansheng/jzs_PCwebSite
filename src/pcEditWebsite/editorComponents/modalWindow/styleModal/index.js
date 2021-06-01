import React, { Component } from 'react'
import './style.scss'

export default class styleModal extends Component {
    render() {
        return (
            <div className='suspendedWindow_box'>
                <ul className="suspendedWindow_boxHead">
                    <li className="active">背景</li>
                    <li>占位</li>
                    <li className="line"></li>
                </ul>
                <div className="suspendedWindow_boxBody active">
                    没写
                </div>
                <div className="suspendedWindow_boxBody">

                </div>
            </div>
        )
    }
}
