import React, { Suspense, Component } from 'react'
import { ConfigProvider, Skeleton } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import PubSub from 'pubsub-js'

import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
import SuspendedWindow from '@components/common/suspendedWindow'  //右侧悬浮窗
import SelectionModifiers from '@components/common/selectionModifiers'  //右侧悬浮窗
import { routeList, pcPathName } from '../router'
import { editingStatus } from '../../store/store'
import { changeEditingStatus } from '../../store/actions'


//页面汇总文件

//懒加载需要配合Suspense
//骨架屏
const loadingStyle = {
    width: '1200px',
    margin: '0 auto',
    minHeight: '1000px',
    padding: '50px 0px'
}

const Loading = <div className="lazyLoading" style={loadingStyle}>
    <Skeleton.Image active style={{ width: '1200px', height: '480px' }} />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
</div>;

let changeSelection = null;
export default class page extends Component {
    state = {
        selection: {
            display: 'none',
            width: '500px',
            height: '0px',
            left: '50px',
            top: '60px'
        }
    }
    componentDidMount() {
        if (window.self === window.top) return;
        editingStatus.dispatch(changeEditingStatus(true))

        //是编辑状态 订阅更改信息
        changeSelection = PubSub.subscribe('changeSelectionPosition', (msg, data) => {
            this.setState({
                selection: data
            })
        });
    }
    isEdit = () => {
        //是不是编辑状态
        if (!editingStatus.getState()) return;
        const { selection } = this.state;
        return <SelectionModifiers info={selection} />
    }
    componentWillUnmount() {
        if (!editingStatus.getState()) return;
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(changeSelection);
    }
    childRoute = detail => {//二级路由遍历

        return detail.children.map((item, index) => {
            return <Route path={pcPathName + detail.path + item.path} component={item.component} key={index} />
        })
    }
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <Header />
                <Nav />
                <Suspense fallback={Loading}>
                    <Switch>
                        {
                            routeList.map((item, index) => {
                                return item.children ? this.childRoute(item) : <Route path={pcPathName + item.path} component={item.component} key={index} />
                            })
                        }
                        <Redirect to="/site/pc/home" />
                    </Switch>
                    {
                        this.isEdit()
                    }
                </Suspense>

                <SuspendedWindow />
                <Footer />
            </ConfigProvider>
        )
    }
}
