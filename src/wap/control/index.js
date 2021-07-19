import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './clearUIdefaultStyle.scss'
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
export default class wapRouterControl extends Component {
    //这个文件作为区分北京上海官网跳转  hoc
    componentDidMount() {
        (function (doc, win) {//rem换算 1rem = 100px
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                };

            if (!doc.addEventListener) return;
            recalc();
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    }
    
    verify = () => {
        //检查北京 还是上海
        const pathName = window.location.host;
        if(pathName.indexOf('shanghai') !== -1){
            return <Redirect to="/site/wap/shanghai" />
        }
        return <Redirect to="/site/wap/beijing" />
    }
    render() {
        return (
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/site/wap/beijing" component={lazy(() => import('../beijing/router'))} />{/* 北京站点 */}
                    <Route path="/site/wap/shanghai" component={lazy(() => import('../shanghai/router'))} />{/* 上海站点 */}
                    
                    {this.verify()}
                </Switch>
            </Suspense>
        )
    }
}
