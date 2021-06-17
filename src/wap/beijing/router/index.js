import React, { Component, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Skeleton } from 'antd';
import router from './router'
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

    verify = () => {
        const { location: { pathname } } = this.props;
        const { publicPath, list } = router;

        const page = list.filter(item => {
            return pathname === publicPath + item.path
        })

        if (page.length === 0) { //路径无效进入
            return <Redirect to="/site/wap/beijing/home" />
        } else {
            return <Route path={publicPath + page[0].path} component={page[0].component} />
        }
    }

    render() {
        return (
            <Suspense fallback={Loading}>
                {this.verify()}
            </Suspense>
        )
    }
}
