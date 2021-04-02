import React, { Suspense } from 'react'
import { ConfigProvider, Skeleton } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import Header from '@components/common/header'
import Nav from '@components/common/horizontalNav'
import Footer from '@components/common/footer'
import SuspendedWindow from '@components/common/suspendedWindow'  //右侧悬浮窗
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

const pcPage = () => {
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
                    <Redirect to="/pc/home"/>
                </Switch>
            </Suspense>

            <SuspendedWindow />
            <Footer />
        </ConfigProvider>
    )
}
export default pcPage

