import React, { Component } from 'react'
import './style.scss'
import dance from '@assets/homePage/examLevelList/dance.png'
import music from '@assets/homePage/examLevelList/music.png'
import instrumentalMusic from '@assets/homePage/examLevelList/instrumentalMusic.png'
import art from '@assets/homePage/examLevelList/art.png'
export default class examLevelList extends Component {
    state = {
        list: [
            { src: dance, text: "舞蹈考级", subText: "DANCE DISTINCTION", adress: "www.baidu.com" },
            { src: music, text: "声乐考级", subText: "VOCAL MUSIC EMPLOYS", adress: "www.baidu.com" },
            { src: instrumentalMusic, text: "器乐考级", subText: "INSTRUMENTAL MUSIC", adress: "www.baidu.com" },
            { src: art, text: "美术考级", subText: "FINE ARTS", adress: "www.baidu.com" },
        ]
    }
    render() {
        const { list } = this.state;
        return (
            <div className="examLevelList">
                {
                    list.map((item, index) => {
                        return <a href="www.baidu.com" key={index}>
                            <div className="container">
                                <img src={item.src} alt="" />
                                <p className="titleBlock">
                                    <span>{item.text}</span>
                                    <span>{item.subText}</span>
                                    <button>了解更多</button>
                                </p>
                            </div>
                        </a>
                    })
                }
            </div >
        )
    }
}
