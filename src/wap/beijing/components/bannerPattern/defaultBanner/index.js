// import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import React, { Component } from 'react'

let timer = null//计时器
export default class DefaultBanner extends Component {
    state = {
        index: 0,//当前显示下标
        flag: true,//是否执行过渡效果
        width: 7.5,//宽度
        wait: 2000,
        startFlag: false,//标记是否开始循环,经过componentdidmount才会改变

        continuous: true,//循环播放
        move: false, //节流阀
        moveInfo: {
            begin: 0,
            moveX: 0
        }
    }
    dotsNode = React.createRef()//光标
    componentDidMount() {
        const { continuous, index } = this.state;
        if (continuous) {
            this.setState({
                index: index + 1,
                startFlag: true
            })
        }
        this.autoSlide();
    }
    componentWillUnmount() {
        clearInterval(timer);
    }
    slideFun = () => {//判断特定条件做出反应
        const { continuous } = this.state;
        if (continuous) {
            this.loopSilde();
        }

    }
    loopSilde = () => {//循环轮播判断
        const { index } = this.state;
        const { list } = this.props;

        if (index > list.length) {
            this.stopSlide();
            setTimeout(() => {
                this.setState({
                    index: 1,
                    flag: false
                })
                this.autoSlide()
            }, 300);
        }
    }
    autoSlide = () => {//启动
        timer = setInterval(() => {
            this.setState({
                index: this.state.index + 1,
                flag: true
            })
            this.slideFun();
        }, this.state.wait);
    }

    stopSlide = () => {//停止
        clearInterval(timer)
    }
    bannerNode = (item, index) => {//封装节点
        const { address, img } = item;
        return <Link to={address} target='_self' key={index}>
            <div className='slick-slide'>
                <img src={img} alt="" />
            </div>
        </Link>
    }
    pre = null

    beginTouch = (e) => {
        this.setState({
            move: true
        })
    }
    touchMove = (e) => {
        const { move } = this.state;
        if (move) {
            const { pageX } = e.touches[0]
            console.log(pageX)
        }
    }
    endTouch = (e) => {
        this.setState({
            move: false
        })
    }
    render() {
        const { index, flag, width, continuous, startFlag } = this.state;
        const { list } = this.props;

        const style = {
            width: `${(list.length + (continuous ? 2 : 0)) * width}rem`,//不是循环  不用加2
            transform: `translateX(-${index * width}rem)`,
            transition: `${flag ? '.3s' : 'none'}`
        }

        const banner = list.map((item, index) => {//节点
            return this.bannerNode(item, index)
        })

        const dots = list.map((item, i) => {//光标
            return <li key={i} className={!continuous && index === i ? 'active' : ''}></li>
        })

        if (continuous && startFlag) {//循环播放并且是正式开始轮播
            let num = index - 1;
            num = num === -1 ? list.length - 1 : num;//第一张图判断
            num = num === list.length ? 0 : num;//最后一张图判断
            const node = this.dotsNode.current.children;

            if (this.pre !== null) node[this.pre].className = '';//第一次不清空

            node[num].className = 'active';
            this.pre = num;
        }



        return <div className='DefaultBanner'>
            <div className='container' style={style} onTouchStart={this.beginTouch} onTouchMove={this.touchMove} onTouchEnd={this.endTouch}>
                {continuous ? this.bannerNode(list[list.length - 1]) : null}
                {banner}
                {continuous ? this.bannerNode(list[0]) : null}
            </div>
            <ul className='slick-dots' ref={this.dotsNode}>
                {dots}
            </ul>
        </div >;

    }
}