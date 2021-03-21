import React, { Component } from 'react'
import './style.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
export default class listOfOptionsImg extends Component {
    state = {
        list: [
            {
                text: "舞蹈培训",
                level2: [{ text: "少儿舞蹈", adress: "www.baidu.com" }, { text: "成人舞蹈", adress: "www.baidu.com" }],
                active: true,
                imgList: [
                    { text: "民族舞0", src: require('../../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "www.baidu.com" },
                    { text: "古典舞", src: require('../../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "www.baidu.com" },
                    { text: "中国舞", src: require('../../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "www.baidu.com" },
                    { text: "舞", src: require('../../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "www.baidu.com" },
                ]
            },
            {
                text: "声乐培训",
                level2: [{ text: "少儿声乐", adress: "www.baidu.com" }, { text: "成人声乐", adress: "www.baidu.com" }],
                active: false,
                imgList: [
                    { text: "民族舞1", src: require('../../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "www.baidu.com" },
                    { text: "古典舞", src: require('../../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "www.baidu.com" },
                    { text: "中国舞", src: require('../../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "www.baidu.com" },
                ]
            },
            {
                text: "器乐培训",
                level2: [{ text: "少儿器乐", adress: "www.baidu.com" }, { text: "成人器乐", adress: "www.baidu.com" }],
                active: false,
                imgList: [
                    { text: "民族舞2", src: require('../../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "www.baidu.com" },
                    { text: "古典舞", src: require('../../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "www.baidu.com" },
                    { text: "中国舞", src: require('../../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "www.baidu.com" },
                    { text: "舞", src: require('../../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "www.baidu.com" },
                ]
            },
            {
                text: "美术培训",
                level2: [{ text: "少儿美术", adress: "www.baidu.com" }, { text: "成人美术", adress: "www.baidu.com" }],
                active: false,
                imgList: [
                    { text: "民族舞3", src: require('../../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "www.baidu.com" },
                    { text: "古典舞", src: require('../../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "www.baidu.com" },
                    { text: "中国舞", src: require('../../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "www.baidu.com" },
                    { text: "舞", src: require('../../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "www.baidu.com" },
                    { text: "芭蕾舞", src: require('../../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "www.baidu.com" },
                ]
            },
        ],
        selectedIndex: 0,
        switchIndex: 0
    }
    level1Selected = (num) => {
        //点击一级导航切换
        return () => {
            const { list } = this.state;
            const newList = list.map((item, index) => {
                item.active = false;
                if (index === num) item.active = true;
                return item;
            })
            this.setState({
                list: newList,
                selectedIndex: num,
                switchIndex: 0
            })
        }
    }
    switchImgList = (type) => {
        //左右切换图片列表
        return () => {
            const { selectedIndex, list, switchIndex } = this.state;
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
        const { list, switchIndex, selectedIndex } = this.state;
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
        const { list, selectedIndex, switchIndex } = this.state;
        const imgList = list[selectedIndex].imgList;
        return (
            <div className="listOfOptionsImg">

                <ul className="level1">
                    {
                        list.map((item, index) => {
                            return <li className={item.active ? "active" : ""} key={index} onClick={this.level1Selected(index)}>{item.text}</li>
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
        )
    }
}