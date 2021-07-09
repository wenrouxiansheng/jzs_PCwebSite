import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import TeacherList from './teacherList'
import TeacherDeatil from './teacherDeatil'

import { seekComponents } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'

let getChangeComponent = null;
const Teachers = class teachers extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/teachers", src: require("../../assets/aboutUs/teachers/banner.jpg").default },
                    ]
                }
            },
        ],
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'teachersCommon') {
                //这里不用提醒错误     因为这是个嵌套组件会有两个相同的消息
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
                    seekComponents(componentJson, 'teachersCommon')
                }
                <Switch>
                    <Route path="/site/pc/aboutUs/teachers/detail/:sign" component={TeacherDeatil} />{/**教师详情 */}
                    <Route path="/site/pc/aboutUs/teachers" component={TeacherList} />{/**教师列表 */}
                </Switch>
            </div>
        )
    }
}
export default withRouter(Teachers);