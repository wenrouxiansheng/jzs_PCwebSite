import React, { Component } from 'react'

import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../publicjs'

let getChangeComponent = null;
export default class contactUs extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/aboutUs/contactUs/banner.png").default },
                    ]
                }
            },
            {
                component: 'ContactInfo',
                props: {
                }
            },

        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-联系我们';
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
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'contactUs')
                }
            </div>
        )
    }
}
