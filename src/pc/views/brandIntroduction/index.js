import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Banner from '@components/homePage/bannerCarousel'
import Title from '@components/homePage/title'
import Exhibition from '@components/brandIntroduction/index/exhibition'
import Introduce from '@components/brandIntroduction/index/introduce'
import ClassScene from '@components/brandIntroduction/index/classScene'
import { editingStatus } from '../../../store/store'
//品牌介绍 - 页面汇总管理
let getChangeComponent = null;
export default class brandIntroduction extends Component {
    state = {
        bannerData: [
            { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            console.log(data, 'brandIntroduction')
        });
    }
    componentWillUnmount() {
        PubSub.unsubscribe(getChangeComponent);
    }
    render() {
        const { bannerData } = this.state;
        return (
            <div>
                <Banner bannerList={bannerData} />
                <Title info={{ title: "品牌介绍", subTitle: "Brand Introduction" }} />
                <Exhibition />
                <Introduce />
                <ClassScene />
            </div>
        )
    }
}
