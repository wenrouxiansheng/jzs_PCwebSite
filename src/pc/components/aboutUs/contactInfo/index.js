import React, { Component } from 'react'
import './style.scss'
import img from '@assets/aboutUs/contactUs/img.png'
import subscribe from '@assets/aboutUs/contactUs/subscribe.png'
import service from '@assets/aboutUs/contactUs/service.png'
import wb from '@assets/aboutUs/contactUs/wb.png'

export default class contactInfo extends Component {
    state = {
        info: {
            headOffice: {
                img,
                title: "全国总部",
                address: "北京市通州区新华西街60号万达广场A座30层"
            },
            phoneInfo: {
                title: "联系我们",
                subTitle: "Contact Us",
                phone: [
                    { text: "咨询电话：", number: ["400-900-8898"] },
                    { text: "商务合作：", number: ["010-5956-2885"] },
                    {
                        text: "人才招聘：", number: ["010-5956-2862", "010-5956-2861"]
                    },
                ]
            },
            emailInfo: {
                title: "官方邮箱",
                subTitle: "The official E-mail",
                email: "juzishuyishu2011@163.com"
            },
            weChatInfo: {
                title: "微信有约",
                subTitle: "WeChat about",
                detail: [
                    { text: "订阅号：juzishujiaoyu", img: subscribe },
                    { text: "服务号：juzishuyishujiaoyu", img: service }
                ]
            },
            microBlogInfo: {
                title: "官方微博",
                subTitle: "Official micro-blog",
                detail: [
                    { text: "官方微博：桔子树艺术教育培训", img: wb },
                ]
            },
        }
    }
    render() {
        const { info, style } = this.props?.info ? this.props : this.state,
            { headOffice, phoneInfo, emailInfo, weChatInfo, microBlogInfo } = info;
        return (
            <div className="contactInfo" style={{ ...style }}>
                <div className="suspension">
                    <img src={headOffice.img} alt="" />
                    <div>
                        <h1>{headOffice.title}</h1>
                        <p>{headOffice.address}</p>
                    </div>
                </div>
                <div className="info">
                    <h1>{phoneInfo.title}</h1>
                    <h3>{phoneInfo.subTitle}</h3>
                    <div className="phone">
                        {
                            phoneInfo.phone.map((item, index) => {
                                return <div key={index}>
                                    <span>{item.text}</span>
                                    <p>
                                        {
                                            item.number.map((number, j) => {
                                                return <span key={j}>{number}</span>
                                            })
                                        }
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="info">
                    <h1>{emailInfo.title}</h1>
                    <h3>{emailInfo.subTitle}</h3>
                    <div className="phone">
                        <div>{emailInfo.email}</div>
                    </div>
                </div>
                <div className="info">
                    <h1>{weChatInfo.title}</h1>
                    <h3>{weChatInfo.subTitle}</h3>
                    <div className="QR">
                        {
                            weChatInfo.detail.map((item, index) => {
                                return <div key={index}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="info">
                    <h1>{microBlogInfo.title}</h1>
                    <h3>{microBlogInfo.subTitle}</h3>
                    <div className="QR">
                        {
                            microBlogInfo.detail.map((item, index) => {
                                return <div key={index}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
