import React, { Suspense, lazy, Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Skeleton } from 'antd';
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
    //这里可以当作hoc 判断移动还是pc    
    //地址  或是  端口用域名判断
    componentDidMount() {
        const isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        if (document.body.clientWidth > 850 && !isPhone) {
            console.log('进入pc端')
        } else {
            console.log('进入wap端')
        }
    }
    render() {
        return (
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/site/pcEdit" component={lazy(() => import('../pcEditWebsite/views'))} />{/**pc编辑 */}
                    <Route path="/site/pc" component={lazy(() => import('../pc/views'))} /> {/**pc官网 */}
                    <Route path="/site/wap" component={lazy(() => import('../wap/control'))} /> {/**pc官网 */}
                    <Redirect to="/site/pc" />
                </Switch>
            </Suspense>
        )
    }
}
