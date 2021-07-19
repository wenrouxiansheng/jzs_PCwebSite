import { Link } from 'react-router-dom'

import './style.scss'

import React, { Component } from 'react'

let timer = null//计时器
//没有写不循环的逻辑
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
    pre = null//记录上一个光标  好清除样式
    componentDidMount() {//初始化轮播
        const { continuous, index, width } = this.state;
        const { data: { list } } = this.props.propsData;
        const isLoop = list.length > 1 ? true : false;

        //如果图片只有一张不执行轮播逻辑
        if (!isLoop) return;


        //这里可以加判断  循环才+1
        let newIndex = index + 1;
        if (continuous) {
            this.setState({
                index: newIndex,
                startFlag: true,
                move: -(newIndex * width)
            })
        }
        this.autoSlide('next');
    }
    componentWillUnmount() {
        clearInterval(timer);
    }
    slideFun = (type, num) => {//判断特定条件做出反应 为循环轮播和不循环解耦
        const { continuous } = this.state;
        if (continuous) {
            //continuous为true是循环播放 循环播放的动作
            this.loopSilde(type, num);
        }
    }
    loopSilde = (type, num) => {//循环轮播条件判断
        const { data: { list } } = this.props.propsData;
        const { width, index } = this.state;
        let newIndex;
        if (type === 'next') newIndex = index + 1;
        if (type === 'prev') newIndex = index - 1;

        if (index > list.length) {
            //返回第一张图
            let defaultVal = 1;//这里是默认的1 第0张是最后一张
            this.setState({
                index: defaultVal,
                flag: false,
                move: -(defaultVal * width),
                wait: 0
            })
            this.autoSlide('next')
        } else if (index <= 0) {
            let lenNum = list.length;
            this.setState({
                index: lenNum,
                flag: false,
                move: -(lenNum * width),
                wait: 0
            })
            this.autoSlide('next')
        } else {
            //正常继续调用
            this.setState({
                index: newIndex,
                flag: true,
                move: -(newIndex * width),
                wait: 2000
            })
            this.autoSlide('next')
        }
    }
    autoSlide = (type, num) => {//启动
        this.stopSlide();
        timer = setInterval(() => {
            this.slideFun(type, num);
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

    beginTouch = (e) => {
        const { pageX } = e.touches[0];
        const { data: { list } } = this.props.propsData;
        const { continuous, width, index, moveInfo } = this.state;
        this.stopSlide();
        if (continuous) {
            //循环轮播的动作
            if (index > list.length) {//返回第一张图
                const first = 1;
                this.setState({
                    index: first,
                    move: -(first * width),
                    flag: false,
                })
            }
            if (index === 0) {//返回最后一张图
                const last = list.length;
                this.setState({
                    index: last,
                    move: -(last * width),
                    flag: false,
                })
            }

        }
        this.setState({
            moveInfo: { ...moveInfo, begin: pageX, onOff: true },
        })
    }

    touchMove = (e) => {//手指移动
        const { moveInfo: { begin, onOff }, moveInfo, index, width } = this.state;
        if (onOff) {
            //获取根元素缩放比例
            let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
            const { pageX } = e.touches[0];
            let left = ((pageX - begin) / num - index * width).toFixed(1)

            this.setState({
                moveInfo: { ...moveInfo, moveX: pageX - begin },
                move: left
            })
        }
    }
    endTouch = (e) => {
        const { moveInfo: { moveX } } = this.state;
        //判断是返回还是下一个
        let type = moveX > 0 ? 'prev' : 'next';
        this.setState({
            moveInfo: { begin: 0, moveX: 0, onOff: false }
        })
        this.loopSilde(type);
    }

    pagination = () => {//banner指示页码
        const { index, continuous, startFlag, } = this.state;
        const { data: { list } } = this.props.propsData;
        const isLoop = list.length > 1 ? true : false;//一张图片不执行轮播逻辑
        if (!isLoop) return;

        if (continuous && startFlag) {//循环播放并且是正式开始轮播
            let num = index - 1;
            num = num === -1 ? list.length - 1 : num;//第一张图判断
            num = num === list.length ? 0 : num;//最后一张图判断
            const node = this.dotsNode.current.children;
            if (this.pre !== null) node[this.pre].className = '';//第一次不清空

            node[num].className = 'active';
            this.pre = num;
        }
    }
    render() {
        const { index, flag, width, continuous, move } = this.state;
        const { data: { list }, style: propsStyle } = this.props.propsData;

        const isLoop = list.length > 1 ? true : false;//一张图片不执行轮播逻辑

        const style = {
            width: `${(list.length + (continuous ? 2 : 0)) * width}rem`,//不是循环  不用加2
            transform: `translateX(${move}rem)`,
            transition: `${flag ? '.3s' : 'none'}`
        }

        const banner = list.map((item, index) => {//节点
            return this.bannerNode(item, index)
        })

        const dots = list.map((_, i) => {//光标
            return <li key={i} className={!continuous && index === i ? 'active' : ''}></li>
        })

        this.pagination()

        return <div className='DefaultBanner' style={{ ...propsStyle }}>
            <div className='container' style={style} onTouchStart={isLoop ? this.beginTouch : null} onTouchMove={isLoop ? this.touchMove : null} onTouchEnd={isLoop ? this.endTouch : null}>
                {continuous && isLoop ? this.bannerNode(list[list.length - 1]) : null}
                {banner}
                {continuous && isLoop ? this.bannerNode(list[0]) : null}
            </div>
            <ul className='slick-dots' ref={this.dotsNode}>
                {isLoop ? dots : null}
            </ul>
        </div >;

    }
}