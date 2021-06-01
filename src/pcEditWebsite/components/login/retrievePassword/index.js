import React, { Component } from 'react'
import './style.scss'

export default class retrievePassword extends Component {
    switchInput = () => {

    }
    render() {
        const { inputBox, switchInput } = this.props;
        return (
            <div className="inputContent" style={{ display: inputBox ? 'block' : 'none' }}>
                {/* <!-- 登录输入框 --> */}
                <div className="import-content findPasswordBox">
                    {/* <!-- 做动画的盒子 --> */}
                    <div className="code_animation findPassword">
                        {/* <!-- 验证码登录 --> */}
                        <div className="verification_code" id="changePasswordBox">

                            <div className="import-form">
                                <div className="icon iphone"></div>
                                <input autoComplete="off" className="import-input" placeholder="请输入手机号"
                                    type="number" name="tel" />
                            </div>

                            <div className="import-form">
                                <div className="icon codeNum"></div>
                                <input autoComplete="off" className="import-input" placeholder="请输入验证码" name="code"
                                    type="number" />
                                <div className="sendVerification_code" onClick={this.sendCodeClick}>
                                    发送
                                    </div>
                                <div className="countDown">59s</div>
                            </div>

                            <div className="import-form" style={{ marginBottom: "0" }}>
                                <div className="icon password"></div>
                                <input autoComplete="off" id="pwsinput" className="import-input" placeholder="请输入密码" type="password"
                                    maxLength="16" />
                            </div>
                            <div className="passwordStrengthStyle">
                                <span>密码强度：</span>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="import-form confirmPasswordInput">
                                <div className="icon password"></div>
                                <input autoComplete="off" className="import-input" placeholder="请再次输入密码" type="password" name="confirmPassword"
                                    maxLength="16" />
                            </div>

                        </div>
                    </div>

                    <div className="loginBtn" id="changePassword">确定</div>
                </div>
                {/* <!-- 返回登录 --> */}
                <div className="switchingMode verification_switching returnLogin" flag="0">
                    <div className="switchText" onClick={switchInput}>返回登录</div               >
                    <div className="switchIcon"></div>
                </div>
            </div>
        )
    }
}
