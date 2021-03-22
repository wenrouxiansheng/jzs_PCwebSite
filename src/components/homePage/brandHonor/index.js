import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.scss'
import bgImg from '@assets/homePage/brandHonor/Bg.png'
import glory1 from '@assets/homePage/brandHonor/glory1.png'
import glory2 from '@assets/homePage/brandHonor/glory2.png'
import glory3 from '@assets/homePage/brandHonor/glory3.png'
import glory4 from '@assets/homePage/brandHonor/glory4.png'
import glory5 from '@assets/homePage/brandHonor/glory5.png'
import glory6 from '@assets/homePage/brandHonor/glory6.png'
import list1 from '@assets/homePage/brandHonor/list1.png'
import list2 from '@assets/homePage/brandHonor/list2.png'
import list3 from '@assets/homePage/brandHonor/list3.png'
import list4 from '@assets/homePage/brandHonor/list4.png'

export default class brandHonor extends Component {
    state = {
        list: [
            [
                { img: glory1, detail: "2018北京文化创意大赛 全国总决赛二等奖" },
                { img: glory2, detail: "2018通州文创产业人才提升计划路演展示一等奖" },
                { img: glory3, detail: "2018世界移动互联网大会最具品牌影响力企业" },
                { img: glory4, detail: "百度教育2017年度教育行业典范" },
                { img: glory5, detail: "网易教育2014年度最具影响力教育集团" },
            ],
            [
                { img: glory6, detail: "腾讯大燕网京津冀十佳教育辅导机构" },
            ]
        ],
        introduceList: [
            { img: list1, text: "艺术教育培训经验", font: ["9", "年"] },
            { img: list2, text: "直营校区覆盖北京、上海", font: ["18", "家"] },
            { img: list3, text: "专业课程精心设计", font: ["88", "种"] },
            { img: list4, text: "学员信赖选择", font: ["40", "余万"] },
        ]
    }
    render() {
        const { list, introduceList } = this.state;
        return (
            <div className="brandHonor" style={{ backgroundImage: `url(${bgImg})` }}>
                <Carousel className="honorBox" autoplay>
                    {
                        list.map((item, index) => {
                            return <div key={index}>
                                {
                                    item.map((data, j) => {
                                        return <div className="honor" key={j}>
                                            <img src={data.img} alt="" />
                                            <p className="text">
                                                {data.detail}
                                            </p>
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </Carousel>
                <div className="introduceList">
                    {
                        introduceList.map((item, index) => {
                            return <div key={index}>
                                <p><strong>{item.font[0]}</strong>{item.font[1]}</p>
                                <p>{item.text}</p>
                                <img src={item.img} alt="" />
                            </div>
                        })
                    }

                </div>
            </div>
        )
    }
}
