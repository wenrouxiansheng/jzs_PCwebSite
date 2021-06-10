import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Skeleton } from 'antd';
//骨架屏
const loadingStyle = {
    width: '100vw',
    margin: '0 auto',
    height: '100vh',
    padding: '0.5rem 0.3rem'
}

const Loading = <div className="lazyLoading" style={loadingStyle}>
    <Skeleton.Image active style={{ width: '6.9rem', height: '3.2rem' }} />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
</div>;
export default class wapBeijingRouter extends Component {
    render() {
        return (
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/site/wap/beijing/home" component={lazy(() => import('../views'))} />
                    <Route path="/site/wap/beijing/brandIntroduction" component={lazy(() => import('../views/brandIntroduction'))} />
                    <Route path="/site/wap/beijing/teachersList" component={lazy(() => import('../views/teachersList'))} />
                    <Route path="/site/wap/beijing/studentShow" component={lazy(() => import('../views/studentShow'))} />
                    <Route path="/site/wap/beijing/newsList" component={lazy(() => import('../views/newsList'))} />
                    <Route path="/site/wap/beijing/modelOfTeaching" component={lazy(() => import('../views/modelOfTeaching'))} />
                    <Route path="/site/wap/beijing/schoolList" component={lazy(() => import('../views/schoolList'))} />
                    <Route path="/site/wap/beijing/aboutUs" component={lazy(() => import('../views/aboutUs'))} />
                    <Redirect to="/site/wap/beijing/home" />
                </Switch>
            </Suspense>
        )
    }
}
