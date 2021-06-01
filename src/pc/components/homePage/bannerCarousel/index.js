import React, { Component } from 'react'
import './style.scss'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
export default class bannerCarousel extends Component {
    render() {
        const { bannerList, style } = this.props
        return (
            <section className="bannerContent" style={{...style}}>
                <Carousel autoplay>
                    {
                        bannerList.map(item => {
                            return (

                                <div key={item.id}>
                                    <Link to={item.adress}>
                                        <img src={item.src} alt="" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>

        )
    }
}
