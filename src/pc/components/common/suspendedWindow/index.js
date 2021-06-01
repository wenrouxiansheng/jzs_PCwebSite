import React, { Component } from 'react'
import { UpOutlined } from '@ant-design/icons';
import { Popover, Input } from 'antd';

import './style.scss'
import QR from '@assets/homePage/window/QR.png'
import tel from '@assets/homePage/window/tel.png'
import consult from '@assets/homePage/window/consult.png'
import QRpublic from '@assets/homePage/footer/QR_public.png'



export default class suspendedWindow extends Component {
    inputNode = React.createRef();
    onNumber = (e) => {
        const { target } = e;
        target.value = target.value.replace(/[^0-9]/g, '');
    }
    onSubmit = () => {
        const { value } = this.inputNode.current.state;
        if (!(/^1[34578]\d{9}$/.test(value))) {
            return false;
        }
    }
    returnTop = (event) => {
        // 返回顶部
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 0) {
            let timer = setInterval(() => {

                document.documentElement.scrollTop -= 60;
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(timer)
                }

            }, 10);
        }
    }
    render() {
        //以下是弹出组件
        const QRcontent = (
            <div style={{ textAlign: 'center' }}>
                <img src={QRpublic} alt="" style={{ width: "135px", height: "135px", objectFit: 'cover' }} />
            </div>
        );
        const callBack = (
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "200px" }}>
                <Input placeholder="请输入手机号码" style={{ borderRadius: "5px", backgroundColor: "#DCDCDC" }} onInput={this.onNumber} maxLength="11" ref={this.inputNode} />
                <button onClick={this.onSubmit} style={{ padding: "5px 20px", backgroundColor: "#ffab32", border: "0px", color: "white", margin: "10px 0px", cursor: "pointer", borderRadius: "5px" }}>给我回电</button>
                <p style={{ width: "100%", textAlign: "center", fontSize: "14px", margin: "0px" }}>免费电话咨询服务，请放心致电</p>
            </div>
        );

        return (
            <div className="suspendedWindow animate__bounceInRight">
                <Popover placement="left" content={QRcontent} title="请扫描二维码">
                    <div className="container QR">
                        <img src={QR} alt="" />
                        <p>公众号关注</p>
                    </div>
                </Popover>
                <Popover placement="left" trigger="click" content={callBack}>
                    <div className="container">
                        <img src={tel} alt="" />
                        <p>电话咨询</p>
                    </div>
                </Popover>
                <div className="container">
                    <img src={consult} alt="" />
                    <p>在线咨询</p>
                </div>
                <div className="container" onClick={this.returnTop}>
                    <UpOutlined />
                </div>
            </div>
        )
    }
}
