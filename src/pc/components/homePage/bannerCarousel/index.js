import React, { Component } from 'react'
import './style.scss'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
export default class bannerCarousel extends Component {
    componentDidMount() {
        if (window.self !== window.top) {//判断是否被iframe嵌套 挂载监听
            
        }
    }
    render() {
        const { bannerList } = this.props
        return (
            <section className="bannerContent">
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
