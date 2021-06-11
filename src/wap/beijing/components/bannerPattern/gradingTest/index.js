import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const fakeNum = 3;
let timer = null;
export default class gradingTestShowLoop extends Component {
    state = {
        list: [
            { address: "#", img: require('../../../assets/homepage/music.png').default, title: "声乐考级", text: 'VOCAL MUSIC EMPLOYS' },
            { address: "#", img: require('../../../assets/homepage/dance.png').default, title: "舞蹈考级", text: 'DANCE DISTINCTION' },
            { address: "#", img: require('../../../assets/homepage/instrumentalMusic.png').default, title: "器乐考级", text: 'INSTRUMENTAL MUSIC' },
            { address: "#", img: require('../../../assets/homepage/art.png').default, title: "美术考级", text: 'FINE ARTS' },
        ],
        wait: 2500,
        index: 0,
        width: 3.58,
        isTransition: true,//是否执行动画
        move: 0,//平移距离
        moveInfo: {
            onOff: false,
            begin: 0,
            moveX: 0
        }
    }
    bannerNode = (item, index) => {//节点封装
        const { address, img, title, text } = item;
        return <div className="swiper-vague" key={index}>
            <Link to={address}>
                <img src={img} alt="" />
                <p><strong>{title}</strong>{text}</p>
                <button>了解更多</button>
            </Link>
        </div>
    }
    componentDidMount() {
        const { list } = this.state;
        const isLoop = list.length >= fakeNum ? true : false;

        //如果图片不超过三张不执行轮播逻辑
        if (!isLoop) return;

        this.startSlide('next');
    }
    startSlide = (type) => {//启动
        this.stopSlide();

        timer = setInterval(() => {
            this.slideFun(type);

        }, this.state.wait)
    }
    stopSlide = () => {//结束
        clearInterval(timer);
    }

    slideFun = (type) => {//滚动策略
        const { list, index, width } = this.state;
        let newIndex;
        if (type === 'next') newIndex = index + 1;
        if (type === 'prev') newIndex = index - 1;
        if (index === list.length) {//返回第一张
            console.log(index)

            this.setState({
                index: 0,
                move: 0,
                wait: 0,
                isTransition: false
            })
            this.startSlide('next')
        } else {
            this.setState({
                index: newIndex,
                move: -(newIndex * width),
                wait: 2500,
                isTransition: true
            })
            this.startSlide('next')
        }
    }

    beginTouch = (e) => {
        this.stopSlide();
        const { pageX } = e.touches[0];
        const { moveInfo } = this.state;
        this.setState({
            moveInfo: {
                ...moveInfo,
                onOff: true,
                begin: pageX
            }
        })
    }
    touchMove = (e) => {
        const { moveInfo, moveInfo: { onOff, begin }, index, width, list } = this.state;

        if (onOff) {
            //获取根元素缩放比例
            const { pageX } = e.touches[0];
            let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;

            let left = ((pageX - begin) / num - index * width).toFixed(1),
                minLeft = -((list.length - 2) * width);

            left = left > 0 ? 0 : left;//左侧边距最大为0
            left = left < minLeft ? minLeft : left;//不小于左侧最小边距

            this.setState({
                move: left,
                isTransition: false,
                moveInfo: {
                    ...moveInfo,
                    moveX: left
                }
            })
        }
    }
    endTouch = () => {
        const { moveInfo: { moveX }, width } = this.state;

        let newIndex = -(moveX / (width * 0.7)) | 0;//纠正比例

        this.setState({
            moveInfo: {
                onOff: false,
                begin: 0,
                moveX: 0
            },
            index: newIndex,
            isTransition: true,
            move: -(newIndex * width)
        })
        this.startSlide('next')
    }
    render() {
        const { list, width, move, isTransition } = this.state;

        console.log(isTransition, move)
        const style = {
            width: `${(list.length + fakeNum) * width}rem`,//
            transform: `translateX(${move}rem)`,
            transition: `${isTransition ? '.3s' : 'none'}`
        }

        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        //无缝滚动需要的假节点
        const fakeNode = list
            .slice(0, fakeNum)
            .map((item, index) => {
                return this.bannerNode(item, index)
            });
        return (
            <div className="gradingTestShowLoop">
                <div className="swiper-contentBox" style={style} onTouchStart={this.beginTouch} onTouchMove={this.touchMove} onTouchEnd={this.endTouch}>
                    {node}
                    {fakeNode}
                </div>
            </div>
        )
    }
}
