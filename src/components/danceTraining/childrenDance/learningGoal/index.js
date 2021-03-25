import React, { Component } from 'react'
import './style.scss'
import Title from '@components/homePage/title'
import bg from '@assets/danceTraining/childrenDance/bg.png'
import circular from '@assets/danceTraining/childrenDance/circular.png'

export default class learningGoal extends Component {
    render() {
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
                    <span className="text1">基本功大幅提升</span>
                    <span className="text2">即兴反应迅速</span>
                    <span className="text3">丰富专业知识</span>
                    <span className="text4">熟悉乐理知识</span>
                    <span className="text5">适合个人的表演</span>
                    <span className="text6">形成个人特色</span>
                    <span className="text7">展示完整个人技巧</span>
                    <span className="text8">变得更加自信</span>
                    <span className="text9">表演细节处理</span>
                </div>

            </div>
        )
    }
}
