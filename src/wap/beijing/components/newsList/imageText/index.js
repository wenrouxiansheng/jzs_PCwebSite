import React, { Component } from 'react'
import './style.scss'

export default class NewsImageText extends Component {
    state = {
        data: [
            { img: require('../../../assets/brandIntroduction/history/school10_05.png').default, text: '冬日情暖·喜迎元旦 |桔子树家人们喜气洋洋庆新年！', time: '2021-01-05' },
            { img: require('../../../assets/brandIntroduction/history/school10_05.png').default, text: '冬日情暖·喜迎元旦 |桔子树家人们喜气洋洋庆新年！', time: '2021-01-05' }
        ]
    }
    render() {

        const { data } = this.state;

        const node = data.map((item, index) => {
            return <a href="./secondLevelPage/newsDetail.html" className="NewsList" key={index}>
                <img src={item.img} alt="" />
                <div>
                    <p>{item.text}</p>
                    <time>{item.time}</time>
                </div>
            </a>
        })

        return node
    }
}
