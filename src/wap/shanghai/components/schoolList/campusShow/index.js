import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default class CampusShow extends Component {
    render() {
        const { list: { list } } = this.props;
        const node = list.map((item, index) => {
            return <div key={index}>
                {/* 和pc的数据共用没有  跳转地址  手动记录下标 跳转的时候取*/}
                <Link to={`/site/wap/shanghai/schoolDetail/${index}`} target='_self'>
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                </Link>
            </div>
        })
        return (
            <div className="campusShow">
                {node}
            </div>
        )
    }
}
