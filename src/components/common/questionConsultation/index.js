import React, { Component } from 'react'
import './style.scss'
import adorn from '@assets/danceTraining/childrenDance/adorn.png'

export default class questionConsultation extends Component {
    render() {
        const { questionList } = this.props;
        return (
            <div className="questionConsultation">
                {
                    questionList.map((item, index) => {
                        return <p key={index}><span>{item}</span><button>点击咨询 ></button></p>
                    })
                }
                <img src={adorn} alt=""/>
                <img src={adorn} alt=""/>
                <img src={adorn} alt=""/>
            </div>
        )
    }
}
