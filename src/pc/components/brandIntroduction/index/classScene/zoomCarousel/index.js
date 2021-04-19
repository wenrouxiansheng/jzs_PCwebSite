import React, { Component } from 'react'
import './style.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import swiper1 from '@assets/brandIntroduction/classScene/swiper1.png'
import swiper2 from '@assets/brandIntroduction/classScene/swiper2.png'
import swiper3 from '@assets/brandIntroduction/classScene/swiper3.png'
import swiper4 from '@assets/brandIntroduction/classScene/swiper4.png'
import swiper5 from '@assets/brandIntroduction/classScene/swiper5.png'



export default class zoomCarousel extends Component {
    carouselList = React.createRef()
    state = {
        currentSub: 1,
        imgList: [
            { src: swiper1 },
            { src: swiper2 },
            { src: swiper3 },
            { src: swiper4 },
            { src: swiper5 },
        ]
    }
    slidingControl = (type) => {
        return () => {
            const { current } = this.carouselList;
            let len = current.children.length,
                { currentSub } = this.state;
            if (type === 'next') {
                if (len > (currentSub + 1)) {
                    currentSub++;

                }
            }
            if (type === 'prev') {
                if (currentSub > 0) {
                    currentSub--;
                }
            }
            this.setState({
                currentSub
            })
        }
    }
    render() {
        const { currentSub, imgList } = this.state;
        const { list: classList } = this.props;
        let list = classList || imgList;
        return (
            <div className="zoomCarousel">
                <div className="carousel-container">
                    <div className="carousel-list" flag={currentSub} ref={this.carouselList} style={{ transform: `translateX(${-((currentSub * 370) - 370)}px)` }}>
                        {
                            list.map((item, index) => {
                                return <div className={`carousel-slide ${currentSub === index ? 'active' : ""}`} key={index}>
                                    <img src={item.src} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="button prev" onClick={this.slidingControl('prev')}><LeftOutlined /></div>
                <div className="button next" onClick={this.slidingControl('next')}><RightOutlined /></div>
            </div>
        )
    }
}
