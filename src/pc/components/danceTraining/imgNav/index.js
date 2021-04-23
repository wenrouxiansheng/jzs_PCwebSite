import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default class imgNav extends Component {
    render() {
        const { navList } = this.props;
        return (
            <div className="courseImgNav">
                <nav>
                    {
                        navList.map((item, index) => {
                            return <Link to={item.href} key={index}>
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