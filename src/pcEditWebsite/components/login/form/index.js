import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.scss'
import RetrievePassword from '../retrievePassword'

const LoginForm = class loginForm extends Component {
    state = {
        inputShow: true,//默认手机登录
        inputBox: false//忘记密码切换
    }
    passwordSwitch = (flag) => {
        //切换登录方式
        return () => {
            this.setState({
                inputShow: flag
            })
        }
    }
    sendCodeClick = (e) => {
        let num = 59;
        let sendVerificationCode = e.currentTarget;
        let countDown = e.currentTarget.nextElementSibling;
        sendVerificationCode.style.display = "none";
        countDown.style.display = "block";
        var timeDown = setInterval(() => {
            if (num < 2) {
                clearInterval(timeDown);
                sendVerificationCode.style.display = "block";
                countDown.style.display = "none";
                num = 59;
                countDown.innerHTML = "";
                countDown.innerHTML += `${num}s`
            } else {
                num--;
                countDown.innerHTML = "";
                countDown.innerHTML += `${num}s`
            }
        }, 1000);
    }
    switchInput = () => {
        //切换忘记密码盒子
        const { inputBox } = this.state;
        this.setState({
            inputBox: !inputBox
        })
    }
    signIn = () => {
        const [number, password] = [this.accountNumaber.value, this.accountPassword.value];
        if (number === 'jzs' && password === '88888888') {
            localStorage.setItem("state", true);
            this.props.history.push('/site/pcEdit/home');
        }
    }
    onKeyDown = (e) => {
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code === 13) {
            this.signIn();
        }
    }
    render() {
        const { inputShow, inputBox } = this.state;
        return (
            <div className="overlay">
                {/* <!-- 标题内容 --> */}
                <div className="overlay-content">
                    <div className="slogan sofiaBold">
                        <div className="slogan-title">
                            与热爱艺术的人&nbsp;&nbsp;一起追逐梦想
                    </div>
                        <div className="slogan-subtitle">CHASING DREAMS</div>
                    </div>
                    {/* <!-- 表单容器 --> */}
                    <div className="inputContent" style={{ display: inputBox ? 'none' : 'block' }}>
                        {/* <!-- 登录输入框 --> */}
                        <div className="import-content">
                            {/* <!-- 做动画的盒子 --> */}
                            <div className="code_animation">
                                {/* <!-- 验证码登录 --> */}
                                <div className="verification_code" style={{ left: inputShow ? '0px' : '-440px', opacity: inputShow ? "1" : "0" }}>
                                    <div className="import-form">
                                        <div className="icon iphone"></div>
                                        <input autoComplete="off" className="import-input" placeholder="请输入手机号"
                                            type="number" />
                                    </div>
                                    <div className="import-form">
                                        <div className="icon codeNum"></div>
                                        <input autoComplete="off" className="import-input" placeholder="请输入验证码"
                                            type="number" />
                                        <div className="sendVerification_code" onClick={this.sendCodeClick}>
                                            发送
                                        </div>
                                        <div className="countDown">59s</div>
                                    </div>
                                </div>
                                {/* <!-- 密码登录 --> */}
                                <div className="password_code" style={{ left: inputShow ? '440px' : '0px', opacity: inputShow ? "0" : "1" }}>
                                    <div className="import-form">
                                        <div className="icon userName"></div>
                                        <input autoComplete="off" className="import-input" placeholder="请输入用户名/手机号" type="text" ref={e => { this.accountNumaber = e }}
                                        />
                                    </div>
                                    <div className="import-form">
                                        <div className="icon password"></div>
                                        <input autoComplete="off" className="import-input"
                                            placeholder="请输入密码" type="password" ref={e => { this.accountPassword = e }} onKeyDown={this.onKeyDown} />
                                        <div className="forget_password" onClick={this.switchInput}>忘记密码</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 登录按钮 --> */}
                            <div className="loginBtn" onClick={this.signIn}>登录</div>
                        </div>
                        {/* <!-- 切换登录方式 --> */}
                        <div className="switchingMode verification_switching" onClick={this.passwordSwitch(false)} style={{ display: inputShow ? 'block' : 'none' }}>
                            <div className="switchText">密码登录</div>
                            <div className="switchIcon"></div>
                        </div>
                        <div className="switchingMode password_switching" onClick={this.passwordSwitch(true)} style={{ display: inputShow ? 'none' : 'block' }}>
                            <div className="switchText">手机登录</div>
                            <div className="switchIcon"></div>
                        </div>
                        {/* <!-- 阅读并同意 --> */}
                        <div className="protocol">
                            点击登录，即同意我们的
                        <a id="agreement_href" href="./agreement.html" target="_blank" className="txt2">
                                《桔子树在线用户注册协议及桔子树在线艺术教育平台购课须知》</a>
                        </div>
                    </div>
                    <RetrievePassword inputBox={inputBox} switchInput={this.switchInput} />
                </div>
            </div >
        )
    }
}
export default withRouter(LoginForm)