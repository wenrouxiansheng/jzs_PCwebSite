import React, { Component } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import QRappDown from '@assets/homePage/footer/QR_appDown.png'
import QRpublic from '@assets/homePage/footer/QR_public.png'
import tel from '@assets/homePage/footer/tel.png'
import local from '@assets/homePage/footer/location.png'
import gongan from '@assets/homePage/footer/gongan.jpg'

export default class footer extends Component {
    state = {
        linkStyle: [
            {
                title: "关于我们", list: [
                    { text: "师资力量", adress: "/site/pc/aboutUs/teachers" },
                    { text: "教学模式", adress: "/site/pc/brandIntroduction" },
                    { text: "课程研发", adress: "/site/pc/brandIntroduction/course" },
                    { text: "加入我们", adress: "/site/pc/aboutUs/contactUs" },
                    { text: "桔子树介绍", adress: "/site/pc/brandIntroduction" }
                ]
            },
            {
                title: "课程设置", list: [
                    { text: "声乐培训", adress: "/site/pc/vocalMusic" },
                    { text: "舞蹈培训", adress: "/site/pc/danceTraining" },
                    { text: "器乐培训", adress: "/site/pc/instrumentalMusic" },
                    { text: "美术培训", adress: "/site/pc/fineArt" }
                ]
            },
            {
                title: "精彩视频", list: [
                    { text: "歌唱大赛", adress: "/site/pc/aboutUs/studentHonor" },
                    { text: "才艺大赛", adress: "/site/pc/aboutUs/studentHonor" },
                    { text: "教学视频", adress: "#" }
                ]
            },
            {
                title: "服务专区", list: [
                    { text: "我要报名", adress: "#" },
                    { text: "免费试听", adress: "#" },
                    { text: "校区地址", adress: "/site/pc/campusDistribution" },
                    { text: "约课电话", adress: "/site/pc/aboutUs/contactUs" }
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

                                            return <dd key={j}>
                                                {/* 如果没有跳转地址就唤醒客服 */}
                                                <Link to={data.adress} className={data.adress === '#' ? 'btnsh_udesk_im' : ''}
                                                    onClick={data.adress === '#' ? event => { event.preventDefault() } : null}>{data.text}</Link>


                                            </dd>
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
                <p>京ICP备17024125号-1</p>
                <p>版权所有@2021.北京桔子树文化传播有限责任公司</p>
                <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011202001383" target="_blank" rel="noreferrer"><img src={gongan} alt=""/> 京公网安备 11011202001383号</a></p>
            </footer>
        )
    }
}
