import React, { Component } from 'react'
import './style.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class listOfOptionsImg extends Component {
    state = {
        selectedIndex: 0,
        switchIndex: 0
    }
    level1Selected = (num) => {
        //点击一级导航切换
        return () => {
            this.setState({
                selectedIndex: num,
                switchIndex: 0
            })
        }
    }
    switchImgList = (type) => {
        //左右切换图片列表
        return () => {
            const { selectedIndex, switchIndex } = this.state;
            const { list } = this.props;
            const imgList = list[selectedIndex].imgList;
            let num = switchIndex;
            
            if (type === "prev") {
                if (switchIndex === 0) return;
                num--;
            }
            if (type === "next") {
                if (imgList.length - 4 === switchIndex) return;
                num++;
            }
            this.setState({
                switchIndex: num
            })
        }
    }
    activeState = (type) => {
        //初始化左右按钮是否添加active样式 ，每次render之后都会判断一次
        const { switchIndex, selectedIndex } = this.state;
        const { list } = this.props;
        const imgList = list[selectedIndex].imgList;
        if (type === 'right') {
            let num = imgList.length - 4;
            if (num <= switchIndex) return "";
            else return "active";
        }
        if (type === 'left') {
            if (switchIndex !== 0) return "active";
            else return "";
        }
    }
    render() {
        const { selectedIndex, switchIndex } = this.state;
        const { list, style } = this.props;
        const imgList = list[selectedIndex].imgList;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="left" duration="1000" className="listOfOptionsImg-antMotion-box"  style={{...style}}>
                    <div className="listOfOptionsImg" key="listOfOptionsImg">
                        <ul className="level1">
                            {
                                list.map((item, index) => {
                                    return <li className={selectedIndex === index ? "active" : ""} key={index} onClick={this.level1Selected(index)}>{item.text}</li>
                                })
                            }
                        </ul>
                        <ul className="level2 active">
                            {
                                list[selectedIndex].level2.map((item, index) => {
                                    return <li key={index}><a href={item.adress}>{item.text}</a></li>

                                })
                            }
                        </ul>
                        <div className="multiPictureLoop active">
                            <div className="loopContent">
                                <ul style={{ transform: `translateX(${switchIndex * -276}px)`, width: `${imgList.length * 276}px` }}>
                                    {
                                        imgList.map((item, index) => {
                                            return <li key={index}>
                                                <a href={item.adress}>
                                                    <img src={item.src} alt="" />
                                                    <p>{item.text}</p>
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={`controlButton prev ${this.activeState('left')}`} onClick={this.switchImgList('prev')}><LeftOutlined /></div>
                            <div className={`controlButton next ${this.activeState('right')}`} onClick={this.switchImgList('next')}><RightOutlined /></div>
                        </div>
                    </div >
                </QueueAnim>
            </ScrollOverPack >
        )
    }
}