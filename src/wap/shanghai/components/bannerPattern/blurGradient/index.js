import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default class BlurGradient extends Component {
    state = {
        objInfo: {
            background: require('../../../assets/homepage/show/dance.png').default,
            list: [
                { img: require('../../../assets/homepage/show/honor4.png').default, title: "“青春风采”国际青少年艺术节开幕式", text: "桔子树学员登上亮相国家级艺术殿堂——北京音乐厅，绽放青春风采" },
                { img: require('../../../assets/homepage/show/honor3.png').default, title: "炫丽童年梦艺术大赛", text: "桔子树学员受关工委邀请参加全国总决赛，登上国家大剧院舞台" },
                { img: require('../../../assets/homepage/show/honor5.png').default, title: "世界华人青少年艺术节", text: "桔子树学员在北京选拔赛、马来西亚吉隆坡总决赛中大放异彩" },
                { img: require('../../../assets/homepage/show/honor1.png').default, title: "海外桃李杯国际舞蹈大赛", text: "桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖" },
                { img: require('../../../assets/homepage/show/honor2.png').default, title: "花儿朵朵少儿舞蹈展演", text: "展演由中国舞蹈家协会主办，桔子树学员连续多届屡获殊荣" },
                { img: require('../../../assets/homepage/show/honor6.png').default, title: "李斯特杯香港国际钢琴公开赛", text: "桔子树学员登上世界级舞台，在国家未来大剧院歌剧厅奏响华美乐章" },
                { img: require('../../../assets/homepage/show/honor7.png').default, title: "金桔杯艺术大赛", text: "桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季" },
            ]
        },
        indexed: 0,
        wait: 4000
    }
    bannerNode = (item, index) => {//节点
        const { img, title, text } = item;
        const { indexed } = this.state
        return <div className={`swiper-vague ${indexed === index ? 'active' : ''}`} key={index}>
            <div className="flex_box">
                <Link to="#">
                    <img src={img} alt="" />
                </Link>
                <div className="text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <button className="prev" onClick={this.onPrev}>上一赛事</button>
                    <button className="next" onClick={this.onNext}>下一赛事</button>
                    <em></em>
                </div>
            </div>
        </div>
    }
    onPrev = () => {//上一个
        this.stopTimer();
        const { indexed } = this.state;
        let newIndexed = indexed - 1;
        if (newIndexed >= 0) {
            this.setState({
                indexed: newIndexed
            })
        }
        this.startTimer();
    }
    onNext = () => {//下一个
        this.stopTimer();
        const { indexed, objInfo: { list } } = this.state;
        let newIndexed = indexed + 1;
        if (newIndexed < list.length) {
            this.setState({
                indexed: newIndexed
            })
        }
        this.startTimer();
    }
    timer = null;
    componentDidMount() {
        const { list } = this.props.propsData.data;
        if (list) {//如果传了数据   不使用默认数据
            this.setState({
                objInfo: list
            })
        }
        this.startTimer()
    }
    componentWillUnmount() {
        this.stopTimer();
    }
    startTimer = () => {
        this.timer = setInterval(() => {
            this.slideFun();
        }, this.state.wait)
    }
    stopTimer = () => {
        clearInterval(this.timer)
    }
    slideFun = () => {
        const { objInfo: { list }, indexed } = this.state;
        let newIndexed = indexed + 1;

        if (newIndexed >= list.length) {
            this.setState({
                indexed: 0
            })
        } else {
            this.setState({
                indexed: newIndexed
            })
        }
    }
    render() {
        const { objInfo: { list, background }, indexed } = this.state;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        const dots = list.map((item, index) => {
            return <span className={indexed === index ? 'active' : ''} key={index}></span>
        })
        return (
            <div className="blurGradient" style={{ backgroundImage: `url(${background})` }}>
                <div className="swiper-contentBox">
                    {node}
                </div>
                <div className="swiper-pagination">
                    {dots}
                </div>
                <div className="filter"></div>
            </div>
        )
    }
}
