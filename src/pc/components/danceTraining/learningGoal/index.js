import React, { Component } from 'react'
import './style.scss'
import Title from '@components/homePage/title'
import bg from '@assets/danceTraining/childrenDance/bg.png'
import circular from '@assets/danceTraining/childrenDance/circular.png'

export default class learningGoal extends Component {
    render() {
        const { textList } = this.props;
        return (
            <div className="learningGoal" style={{ backgroundImage: `url(${bg})` }}>
                <Title info={{ title: "学习目标", subTitle: "" }} />
                <div className="circular-box">
                    <div className="circular"></div>
                    <div className="circular-center"></div>
                    <div className="circular-spot">
                        <img src={circular} alt="" />
                    </div>
                    <p className="line1"></p>
                    <p className="line2"></p>
                    <p className="line3"></p>
                    <p className="line4"></p>
                    <p className="line5"></p>
                    <p className="line6"></p>
                    <p className="line7"></p>
                    <p className="line8"></p>
                    <p className="line9"></p>
                    {
                        textList.map((item, index) => {
                            return <span className={`text${index + 1}`} key={index}>{item}</span>
                        })
                    }
                </div>

            </div>
        )
    }
}
