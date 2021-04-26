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
            }
        }
    }
    render() {
        const { info } = this.state,
            { headOffice, phoneInfo } = info;
        return (
            <div className="contactInfo">
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
