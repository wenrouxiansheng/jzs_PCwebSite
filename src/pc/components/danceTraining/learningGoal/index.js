import React, { Component } from 'react'
import './style.scss'
import Title from '@components/homePage/title'
import bg from '@assets/danceTraining/childrenDance/bg.png'
import circular from '@assets/danceTraining/childrenDance/circular.png'

export default class learningGoal extends Component {
    render() {
        const { textList, info: { title, subTitle }, style } = this.props;
        return (
            <div className="learningGoal" style={{ backgroundImage: `url(${bg})`, ...style }}>
                <Title info={{ title: title, subTitle: subTitle }} />
                <div className="circular-box">
                    <div className="circular"></div>
                    <div className="circular-center"></div>
                    <div className="circular-spot">
                        <img src={circular} alt="" />
                    </div>
                    {
                        textList.map((_, index) => {
                            return <p className={`line${index + 1}`} key={index}></p>
                        })
                    }
                    {
                        textList.map((item, index) => {
                            return <span className={`text${index + 1}`} key={index} title={item}>{item}</span>
                        })
                    }
                </div>

            </div>
        )
    }
}
