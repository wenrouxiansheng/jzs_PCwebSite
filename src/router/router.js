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

    isPhone = () => {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    }
    //判断移动还是pc    
    verify = () => {
        const isPhone = this.isPhone();
        const screenWidth = document.body.clientWidth

        if (isPhone !== null || screenWidth < 1200) {
            return <Redirect to="/site/wap" />
        }
        /**
         * isPhone是null 并且 屏幕宽度大于等于1200
         * 执行这一步
         */

        return <Redirect to="/site/pc" />
    }

    componentDidMount() {

        //设置站长统计样式
        const statistics = window.document.querySelector('#cnzz_stat_icon_1271255367');
        if(statistics) {
            statistics.style="position: fixed;bottom: 0px;left: 0px;"
        }
    }
    render() {
        return (
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/site/pcEdit" component={lazy(() => import('../pcEditWebsite/views'))} />{/**pc编辑 */}
                    <Route path="/site/wap" component={lazy(() => import('../wap/control'))} /> {/**wap官网 */}
                    <Route path="/site/pc" component={lazy(() => import('../pc/views'))} /> {/**pc官网 */}
                    {this.verify()}
                </Switch>
            </Suspense>
        )
    }
}