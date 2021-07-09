import React, { Component } from 'react'
import './style.scss'
import { Pagination } from 'antd';

import Title from '@components/homePage/title'
import phone from '@assets/schoolList/phone.png'
import position from '@assets/schoolList/position.png'
import schoolJson from './schoolJson'

const SHOWLENGTH = 5//一页显示条数
export default class schoolList extends Component {
    state = {
        list: schoolJson,
        showList: []//当前显示的校区
    }
    pageChange = (pageNumber) => {

        document.documentElement.scrollTop = 0//切换分页返回顶部

        const { list } = this.state,
        end = pageNumber * SHOWLENGTH,//结尾
        start = end - SHOWLENGTH;//开头

        const showList = list.slice(start, end)

        this.setState({
            showList
        })
    }
    componentDidMount() {
        //初始化显示校区
        const { list } = this.state,
        end = SHOWLENGTH,//结尾
        start = end - SHOWLENGTH;//开头

        const showList = list.slice(start, end)

        this.setState({
            showList
        })
    }
    render() {
        const { showList,list } = this.state;
        const { style } = this.props;
        return (
            <div className="schoolList" style={{ ...style }}>
                <Title info={{ title: "校区分布", subTitle: "Campus Distribution" }} />
                <div className="list">
                    {
                        showList.map((item, index) => {
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
                                    <button className="btnsh_udesk_im">立即咨询</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="pagination">
                    <Pagination showQuickJumper defaultCurrent={1} total={list.length} onChange={this.pageChange} pageSize={SHOWLENGTH} showSizeChanger={false} />
                </div>
            </div>
        )
    }
}
