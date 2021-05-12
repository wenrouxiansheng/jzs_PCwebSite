import React, { Component } from 'react'
import Form from '../../components/login/form'
import './style.scss'

export default class login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="video-react-video-box">
                    <video className="video-react-video" muted preload="auto" autoPlay loop playsInline=""
                        x5-video-player-type='h5-page' poster={require('../../assets/login/jzs-video1Img.jpg').default}
                        src={require('../../assets/login/jzs-video.mp4').default} tabIndex="-1" id="screenVideo"></video>
                </div>
                <Form />
            </div>
        )
    }
}
