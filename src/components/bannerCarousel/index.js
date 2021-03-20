import React, { Component } from 'react'
import './style.scss'
import { Carousel } from 'antd';
export default class index extends Component {
    render() {
        const { bannerList } = this.props
        
        return (
            <section className="bannerContent">
                <Carousel autoplay>
                    {
                        bannerList.map(item => {
                            return (

                                <div key={item.id}>
                                    <a href={item.adress}>
                                        <img src={item.src} alt="" />
                                    </a>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>

        )
    }
}
