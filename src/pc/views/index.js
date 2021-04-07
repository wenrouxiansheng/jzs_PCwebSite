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
import routeList from '../router'



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

const childRoute = detail => {//二级路由遍历
    return detail.children.map((item, index) => {
        return <Route path={routeList.path + detail.path + item.path} component={item.component} key={index} />
    })
}

export default class page extends Component {
    state = {
        selection: {
            display: 'none',
            width: '500px',
            height: '200px',
            left: '50px',
            top: '60px'
        }
    }
    componentDidMount() {
        if (window.self === window.top) return;
        //是编辑状态 订阅更改信息
        PubSub.subscribe('changeSelection', (msg, data) => {
            this.setState({
                selection: data
            })
        });
    }
    isEdit = () => {
        //是不是编辑状态
        if (window.self === window.top) return;
        const { selection } = this.state;
        return <SelectionModifiers info={selection} />
    }

    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <Header />
                <Nav />

                <Suspense fallback={Loading}>
                    <Switch>
                        {
                            routeList.children.map((item, index) => {
                                return item.children ? childRoute(item) : <Route path={routeList.path + item.path} component={item.component} key={index} />
                            })
                        }
                        <Redirect to="/pc/home" />
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
