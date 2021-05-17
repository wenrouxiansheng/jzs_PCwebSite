import React, { Component } from 'react'
import './style.scss'
import adorn from '@assets/danceTraining/childrenDance/adorn.png'
import { RightOutlined } from '@ant-design/icons';

export default class questionConsultation extends Component {
    render() {
        const { questionList, style } = this.props;
        return (
            <div className="questionConsultation" style={{ ...style }}>
                {
                    questionList.map((item, index) => {
                        return <p key={index}><span>{item}</span><button>点击咨询 <RightOutlined /></button></p>
                    })
                }
                <img src={adorn} alt="" />
                <img src={adorn} alt="" />
                <img src={adorn} alt="" />
            </div>
        )
    }
}
