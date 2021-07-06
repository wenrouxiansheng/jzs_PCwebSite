import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default class imgNav extends Component {
    render() {
        const { navList, style } = this.props;
        return (
            <div className="courseImgNav" style={{ ...style }}>
                <nav>
                    {
                        navList.map((item, index) => {
                            return item.href === 'service' ?
                                <span  key={index} className="btnsh_udesk_im">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </span>
                                :
                                <Link to={item.href} key={index}>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </Link>
                        })
                    }
                </nav >
            </div>

        )
    }
}