import React, { Suspense, lazy, Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Skeleton } from 'antd';
import PcPage from '@pcPage';

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

export default class routeDom extends Component {
    
    render() {
        return (
            <main>
                <Suspense fallback={Loading}>
                    <Switch>
                        <Route path="/site/pcEdit" component={lazy(() => import('../pcEditWebsite/views'))} />{/**pc编辑 */}
                        <Route path="/site/pc" component={PcPage} /> {/**pc官网 */}
                        <Redirect to="/site/pc" />
                    </Switch>
                </Suspense>
            </main>
        )
    }
}