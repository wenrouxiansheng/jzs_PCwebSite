import React, { Component, lazy, Suspense } from 'react'
import { Skeleton } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import { editingStatus } from '../../store/store'
import { changeEditingStatus } from '../../store/actions'
import '../assets/css/pcStyle.scss'//pc重置样式

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

const routeList = [
    { path: "/site/pcEdit/editor", name: "edit", component: lazy(() => import('./editor')), auth: true },
    { path: "/site/pcEdit/home", name: "home", component: lazy(() => import('./home')), auth: true },
    { path: "/site/pcEdit/login", name: "home", component: lazy(() => import('./login')), auth: false },
]
export default class pcEditRouter extends Component {
    //这里作为HOC 路由守卫 先简易实现
    guard = () => {
        const { location: { pathname } } = this.props,//页面访问路径
            isLogin = localStorage.getItem("state"),//模拟登录信息
            targetRouterConfig = routeList.find(item => item.path === pathname);//筛选路径是否有效

        if (!targetRouterConfig) return <Redirect to='/site/pcEdit/login' />;//如果路径无效就重置到login页面   目前没有404

        const { component } = targetRouterConfig;

        if (isLogin) {//有登录信息的情况下
            if (pathname === '/site/pcEdit/login') {//有登录信息不可进入login页面重定向到home页面
                return <Redirect to='/site/pcEdit/home' />
            } else {
                return <Route path={pathname} component={component} />;//有登录信息编辑页面除登录都可以进入
            }
        } else {//没有登录信息的情况
            if (targetRouterConfig.auth) return <Redirect to='/site/pcEdit/login' />;//需要授权的路由
            else return <Route path={pathname} component={component} />;//无需授权没有登录信息直接进入
        }
    }
    componentDidMount() {
        editingStatus.dispatch(changeEditingStatus(true))
    }
    render() {
        return (
            <main className="pcResetStyle">
                <Suspense fallback={Loading}>
                    <Switch>
                        {
                            this.guard()
                        }
                    </Switch>
                </Suspense>
            </main>
        )
    }
}
