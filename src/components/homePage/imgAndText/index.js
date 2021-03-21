import React, { Component } from 'react'
import './style.scss'

export default class imgAndText extends Component {
    modeleType = () => {
        const { detail } = this.props;

        if (detail.type === "left") {
            return <div className="imgAndText">
                <img src={detail.src} alt="" />
                <div>
                    <h1>{detail.title}</h1>
                    <p>
                        {detail.text}
                    </p>
                </div>
            </div>
        }

        return <div className="imgAndText">
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
            <div>
                {this.modeleType()}
            </div>
        )
    }
}