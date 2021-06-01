import React, { Component } from 'react'
import './style.scss'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class imgBlindPlatoon extends Component {
    state = {
        imgList: [
            { img: [require('../../../assets/aboutUs/studentHonor/img1.png').default], id: 1 },
            {
                img: [
                    require('../../../assets/aboutUs/studentHonor/img2.png').default,
                    require('../../../assets/aboutUs/studentHonor/img3.png').default
                ], id: 2
            },
            {
                img: [
                    require('../../../assets/aboutUs/studentHonor/img4.png').default,
                    require('../../../assets/aboutUs/studentHonor/img5.png').default
                ], id: 3
            },
            {
                img: [
                    require('../../../assets/aboutUs/studentHonor/img6.png').default,
                    require('../../../assets/aboutUs/studentHonor/img7.png').default,
                    require('../../../assets/aboutUs/studentHonor/img8.png').default
                ], id: 4
            },
            {
                img: [
                    require('../../../assets/aboutUs/studentHonor/img9.png').default,
                    require('../../../assets/aboutUs/studentHonor/img10.png').default
                ], id: 5
            },
            {
                img: [require('../../../assets/aboutUs/studentHonor/img11.png').default]
                , id: 6
            },
        ]
    }
    render() {
        const { imgList, style } = this.props?.imgList ? this.props : this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="right" duration="1000" className="imgBlindPlatoon" interval="200" style={{ ...style }}>
                    {
                        imgList.map(item => {
                            return <div className={`imgBox${item.id}`} key={item.id}>
                                {
                                    item.img.map((img, index) => {
                                        return <img src={img} alt="" key={index} />
                                    })
                                }
                            </div>
                        })
                    }
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
