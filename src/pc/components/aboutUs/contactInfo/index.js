import React, { Component } from 'react'
import './style.scss'
import img from '@assets/aboutUs/contactUs/img.png'
import subscribe from '@assets/aboutUs/contactUs/subscribe.png'
import service from '@assets/aboutUs/contactUs/service.png'
import wb from '@assets/aboutUs/contactUs/wb.png'

export default class contactInfo extends Component {
    render() {
        return (
            <div className="contactInfo">
                <div className="suspension">
                    <img src={img} alt="" />
                    <div>
                        <h1>全国总部</h1>
                        <p>北京市通州区新华西街60号万达广场A座30层</p>
                    </div>
                </div>
                <div className="info">
                    <h1>联系我们</h1>
                    <h3>Contact Us</h3>
                    <div className="phone">
                        <div><span>咨询电话：</span>400-900-8898</div>
                        <div><span>商务合作：</span>010-5956-2885</div>
                        <div><span>人才招聘：</span><p>010-5956-2862<br />010-5956-2861</p>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h1>官方邮箱</h1>
                    <h3>The official E-mail</h3>
                    <div className="phone">
                        <div>juzishuyishu2011@163.com</div>
                    </div>
                </div>
                <div className="info">
                    <h1>微信有约</h1>
                    <h3>WeChat about</h3>
                    <div className="QR">
                        <div>
                            <img src={subscribe} alt="" />
                            <p>订阅号：juzishujiaoyu</p>
                        </div>
                        <div>
                            <img src={service} alt="" />
                            <p>服务号：juzishuyishujiaoyu</p>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h1>官方微博</h1>
                    <h3>The official weibo</h3>
                    <div className="QR">
                        <div>
                            <img src={wb} alt="" />
                            <p>官方微博：桔子树艺术教育培训</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
