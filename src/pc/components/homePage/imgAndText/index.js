import React, { Component } from 'react'
import './style.scss'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class imgAndText extends Component {
    modeleType = () => {
        const { detail } = this.props;
        if (detail.type === "left") {
            return <div className="imgAndText" key={detail.id}>
                <img src={detail.src} alt="" />
                <div>
                    <h1>{detail.title}</h1>
                    <p>
                        {detail.text}
                    </p>
                </div>
            </div>
        }
        return <div className="imgAndText" key={detail.id}>
            <div>
                <h1>{detail.title}</h1>
                <p>
                    {detail.text}
                </p>
            </div>
            <img src={detail.src} alt="" />
        </div>
    }
    render() {
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="bottom" duration="1000" className="imgAndText-antMotion-box">
                    {this.modeleType()}
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}