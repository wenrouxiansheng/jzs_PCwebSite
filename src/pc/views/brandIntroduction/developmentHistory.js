import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'

//品牌介绍  - 历史历程
let getChangeComponent = null;
export default class developmentHistory extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "发展历程", subTitle: "Development Process" }
                }
            },
            {
                component: 'History',
                props: {
                }
            },
        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-发展历程';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'history') {
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
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'history')
                }
            </div>
        )
    }
}
