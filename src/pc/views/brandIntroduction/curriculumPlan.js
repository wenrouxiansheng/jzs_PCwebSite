import React, { Component } from 'react'
import Title from '@components/homePage/title'
import CurriculumPlan from '@components/brandIntroduction/curriculumPlan'
import BrandHonor from '@components/homePage/brandHonor'
import PubSub from 'pubsub-js'

import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import switchComponents from '@components/allComponents'//汇总的组件

//品牌介绍教研课程
let getChangeComponent = null;
export default class curriculumPlan extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/brandIntroduction/course", src: require("../../assets/brandIntroduction/course/banner.png").default }
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "一位学员  一份计划  一种方法", subTitle: "" }
                }
            }
        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'curriculumPlan') {
                window.parent.PubSub.publish('operationMessage', {
                    message: '组件名不对应',
                    type: 'error'
                });
                return false;
            }
            this.setState({
                componentJson: data.componentJson
            })
            window.parent.PubSub.publish('operationMessage', {
                message: '修改成功',
                type: 'success'
            })
        });
    }
    componentWillUnmount() {
        PubSub.unsubscribe(getChangeComponent);
    }
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'curriculumPlan'), 300) : null}
                key={index} flag={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    render() {
        return (
            <div>
                {
                    this.seekComponents()
                }
                <CurriculumPlan />
                <Title info={{ title: "品牌荣誉", subTitle: "汇聚国内外艺术名师" }} />
                <BrandHonor />
            </div>
        )
    }
}
