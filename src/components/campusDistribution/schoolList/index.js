import React, { Component } from 'react'
import './style.scss'
import { Pagination } from 'antd';

import Title from '@components/homePage/title'
import img from '@assets/aboutUs/teacherDetail/teacher.jpg'
import phone from '@assets/schoolList/phone.png'
import position from '@assets/schoolList/position.png'

export default class schoolList extends Component {
    state = {
        list: [
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等 ", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
            { img: img, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
        ]
    }
    pageChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }
    render() {
        const { list } = this.state;
        return (
            <div className="schoolList">
                <Title info={{ title: "校区分布", subTitle: "Campus Distribution" }} />
                <div className="list">
                    {
                        list.map((item, index) => {
                            return <div key={index}>
                                <img src={item.img} alt="" />
                                <div className="container">
                                    <h1>{item.name}</h1>
                                    <div>
                                        <span>开设课程：</span><p>{item.course}</p>
                                    </div>
                                    <div>
                                        <span>开设班级：</span><p>{item.classed}</p>
                                    </div>
                                    <p className="position"><img src={position} alt="" />{item.position}</p>
                                    <p className="phone"><img src={phone} alt="" />400-900-8898</p>
                                    <button>立即咨询</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="pagination">
                    <Pagination showQuickJumper defaultCurrent={1} total={20} onChange={this.pageChange} pageSize={6} showSizeChanger={false} />
                </div>
            </div>
        )
    }
}
