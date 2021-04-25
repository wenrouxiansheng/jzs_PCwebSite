import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import TeacherList from './teacherList'
import TeacherDeatil from './teacherDeatil'

import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
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
        // this.props.history.listen((e) => {
        //     //监听路由跳转返回顶部
        //     console.log('>>>>>>>>>>>>>>>>>', e)
        // })
        this.mountMessage()
    }
    mountMessage = () => {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'teachersCommon') {
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
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'teachersCommon'), 300) : null}
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
                <Switch>
                    <Route path="/site/pc/aboutUs/teachers/detail" component={TeacherDeatil} />{/**教师详情 */}
                    <Route path="/site/pc/aboutUs/teachers" component={TeacherList} />{/**教师列表 */}
                </Switch>
            </div>
        )
    }
}
export default withRouter(Teachers);