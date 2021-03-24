import React, { Component } from 'react'
import './style.scss'
import ZoomCarousel from './zoomCarousel'
import Title from '@components/homePage/title'


export default class classScene extends Component {
    
    
    render() {
        return (
            <div className="classScene">
                <div className="container">
                    <Title info={{ title: "快乐课堂", subTitle: "Happy Classroom" }} />
                    <p>桔子树艺术开设的艺术课程全面，上课时间灵活有弹性。尤其是在少儿艺术教学中，引入<span>“奥尔夫音乐教学法”</span>到课堂中，教学游戏化，使孩子们玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。</p>
                    <ZoomCarousel />
                    
                </div>
            </div>
        )
    }
}
