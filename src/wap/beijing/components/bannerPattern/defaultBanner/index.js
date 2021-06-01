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
        move: 0,//移动距离
        moveInfo: {
            onOff: false, //节流阀
            begin: 0,
            moveX: 0
        }
    }
    dotsNode = React.createRef()//光标
    componentDidMount() {//初始化轮播
        const { continuous, index, width } = this.state;
        let newIndex = index + 1;
        if (continuous) {
            this.setState({
                index: newIndex,
                startFlag: true,
                move: -(newIndex * width)
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
        const { index, width } = this.state;
        const { list } = this.props;
        if (index > list.length) {
            this.stopSlide();
            setTimeout(() => {
                let newIndex = 1;
                this.setState({
                    index: newIndex,
                    flag: false,
                    move: -(newIndex * width)
                })
                this.autoSlide()
            }, 300);
        }
    }
    autoSlide = (num) => {//启动
        timer = setInterval(() => {
            const { width, index } = this.state;
            let newIndex = index + 1;
            this.setState({
                index: newIndex,
                flag: true,
                move: -(newIndex * width)
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
        const { pageX, moveInfo } = e.touches[0];
        this.stopSlide();
        this.setState({
            moveInfo: { ...moveInfo, begin: pageX, onOff: true }
        })
    }
    touchMove = (e) => {//手指移动
        const { moveInfo: { begin, onOff }, moveInfo, index, width } = this.state;
        if (onOff) {
            let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
            const { pageX } = e.touches[0];
            console.log(index)
            console.log(((pageX - begin) / num) - index * width)

            this.setState({
                moveInfo: { ...moveInfo, moveX: (pageX - begin) / num },
                move: (pageX - begin) / num - (index * width)
            })
        }
    }
    endTouch = (e) => {
        const { moveInfo: { moveX }, index, width } = this.state;
        let newIndex = moveX > 0 ? index - 1 : index + 1;
        console.log(newIndex, index)
        // this.setState({
        //     moveInfo: { begin: 0, moveX: 0, onOff: false, },
        //     index: newIndex
        // })
        // this.autoSlide();
    }

    render() {
        const { index, flag, width, continuous, startFlag, move } = this.state;
        const { list } = this.props;

        const style = {
            width: `${(list.length + (continuous ? 2 : 0)) * width}rem`,//不是循环  不用加2
            transform: `translateX(${move}rem)`,
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