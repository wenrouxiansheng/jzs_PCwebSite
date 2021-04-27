import React, { Component } from 'react'

import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
export default class contactUs extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/aboutUs/contactUs/banner.png").default },
                    ]
                }
            },
            {
                component: 'ContactInfo',
                props: {
                    info: {
                        headOffice: {
                            img : require('../../assets/aboutUs/contactUs/img.png').default,
                            title: "全国总部",
                            address: "北京市通州区新华西街60号万达广场A座30层"
                        },
                        phoneInfo: {
                            title: "联系我们",
                            subTitle: "Contact Us",
                            phone: [
                                { text: "咨询电话：", number: ["400-900-8898"] },
                                { text: "商务合作：", number: ["010-5956-2885"] },
                                {
                                    text: "人才招聘：", number: ["010-5956-2862", "010-5956-2861"]
                                },
                            ]
                        },
                        emailInfo: {
                            title: "官方邮箱",
                            subTitle: "The official E-mail",
                            email: "juzishuyishu2011@163.com"
                        },
                        weChatInfo: {
                            title: "微信有约",
                            subTitle: "WeChat about",
                            detail: [
                                { text: "订阅号：juzishujiaoyu", img: require('../../assets/aboutUs/contactUs/subscribe.png').default },
                                { text: "服务号：juzishuyishujiaoyu", img: require('../../assets/aboutUs/contactUs/service.png').default }
                            ]
                        },
                        microBlogInfo: {
                            title: "官方微博",
                            subTitle: "official micro-blog",
                            detail: [
                                { text: "官方微博：桔子树艺术教育培训", img: require('../../assets/aboutUs/contactUs/wb.png').default },
                            ]
                        },
                    }
                }
            },

        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'contactUs') {
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
        //组件即将销毁后移除订阅
        PubSub.unsubscribe(getChangeComponent);
    }
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'contactUs'), 300) : null}
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
            </div>
        )
    }
}
