import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default class CampusShow extends Component {
    render() {
        const { list } = this.props;
        const node = list.map((item, index) => {
            return <div key={index}>
                <Link to={item.address} target='_self'>
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
