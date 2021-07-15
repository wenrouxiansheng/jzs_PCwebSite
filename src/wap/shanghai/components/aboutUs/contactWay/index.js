import React, { Component } from 'react'
import './style.scss'

export default class ContactWay extends Component {
    render() {
        return (
            <div className="contactWay">
                <h4>联系我们</h4>
                <h5>Contact Us</h5>
                <p>咨询电话：<a href="tel:400-999-9127">400-999-9127</a></p>
                <p>商务合作：<a href="tel:010-5956-2885">010-5956-2885</a></p>
                <p>人才招聘：<a href="tel:010-5956-2862">010-5956-2862</a> / <a href="tel:010-5956-2861">010-5956-2861</a></p>
                <h4>微信有约</h4>
                <h5>WeChat about</h5>
                <div className="img_box">
                    <img src={require('../../../assets/aboutUs/dy_QR.png').default} alt="" />
                    <p>订阅号：juzishujiaoyu</p>
                </div>
                <div className="img_box">
                    <img src={require('../../../assets/aboutUs/fw_QR.png').default} alt="" />
                    <p>服务号：juzishuyishujiaoyu</p>
                </div>
                <h4>官方微博</h4>
                <h5>The official weibo </h5>
                <div className="img_box">
                    <img src={require('../../../assets/aboutUs/microBlog_QR.png').default} alt="" />
                    <p>官方微博：桔子树艺术教育培训</p>
                </div>
                <h4>官方邮箱</h4>
                <h5>The official E-mail</h5>
                <p>juzishuyishu2011@163.com</p>
            </div>
        )
    }
}
