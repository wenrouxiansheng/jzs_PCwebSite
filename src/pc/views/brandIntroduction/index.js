import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Exhibition from '@components/brandIntroduction/index/exhibition'
import Introduce from '@components/brandIntroduction/index/introduce'
import ClassScene from '@components/brandIntroduction/index/classScene'
import { editingStatus } from '../../../store/store'
import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
//品牌介绍 - 页面汇总管理
let getChangeComponent = null;
export default class brandIntroduction extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "品牌介绍", subTitle: "Brand Introduction" }
                }
            },
            {
                component: 'Exhibition',
                props: {
                    info: { title: "品牌介绍", subTitle: "Brand Introduction" }
                }
            },
            {
                component: 'Introduce',
                props: {
                    info: { title: "品牌介绍", subTitle: "Brand Introduction" }
                }
            }
        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'brandIntroduction') {
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
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'brandIntroduction'), 300) : null}
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
                <Exhibition />
                <Introduce />
                <ClassScene />
            </div>
        )
    }
}
