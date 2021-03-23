import React, { Component } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import QRappDown from '@assets/homePage/footer/QR_appDown.png'
import QRpublic from '@assets/homePage/footer/QR_public.png'
import tel from '@assets/homePage/footer/tel.png'
import local from '@assets/homePage/footer/location.png'

export default class footer extends Component {
    state = {
        linkStyle: [
            {
                title: "关于我们", list: [
                    { text: "师资力量", adress: "/home" },
                    { text: "教学模式", adress: "/home" },
                    { text: "课程研发", adress: "/home" },
                    { text: "加入我们", adress: "/home" },
                    { text: "桔子树介绍", adress: "/home" }
                ]
            },
            {
                title: "课程设置", list: [
                    { text: "声乐培训", adress: "/home" },
                    { text: "舞蹈培训", adress: "/home" },
                    { text: "器乐培训", adress: "/home" },
                    { text: "美术培训", adress: "/home" }
                ]
            },
            {
                title: "精彩视频", list: [
                    { text: "歌唱大赛", adress: "/BrandIntroduction" },
                    { text: "才艺大赛", adress: "/home" },
                    { text: "教学视频", adress: "/home" }
                ]
            },
            {
                title: "服务专区", list: [
                    { text: "我要报名", adress: "/home" },
                    { text: "免费试听", adress: "/home" },
                    { text: "校区地址", adress: "/home" },
                    { text: "约课电话", adress: "/home" }
                ]
            }
        ]
    }
    render() {
        const { linkStyle } = this.state;
        return (
            <footer className="footer">
                <div className="container">
                    <div className="nav">
                        {
                            linkStyle.map((item, index) => {
                                return <dl key={index}>
                                    <dt>{item.title}</dt>
                                    {
                                        item.list.map((data, j) => {
                                            return <dd key={j}><Link to={data.adress}>{data.text}</Link></dd>
                                        })
                                    }
                                </dl>
                            })
                        }
                    </div>
                    <div className="infoBox">
                        <div className="QRBox">
                            <div>
                                <img src={QRpublic} alt="" />
                                <p>扫码关注公众号</p>
                            </div>
                            <div>
                                <img src={QRappDown} alt="" />
                                <p>扫码下载app</p>
                            </div>
                        </div>
                        <p>
                            <img src={tel} alt="" />联系我们:<strong>400-900-8898</strong>
                        </p>
                        <p>
                            <img src={local} alt="" />北京市通州区新华西街60号万达广场A座30层
                        </p>
                    </div>
                </div>
                <p>商务合作：010-5965-2885</p>
                <p>北京桔子树文化传播有限责任公司</p>
                <p>京公网安备 11011202001383号</p>
            </footer>
        )
    }
}
