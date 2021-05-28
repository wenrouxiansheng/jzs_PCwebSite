import React, { Component, Suspense, lazy, } from 'react'

import { Route, Switch } from 'react-router-dom'


const Loading = <div>loading</div>;
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
    render() {
        return (
            <div>
                <Suspense fallback={Loading}>
                    <Switch>
                        <Route path="/site/wap/beijing" component={lazy(() => import('../beijing/views'))} />{/* 北京站点 */}
                        <Route path="/site/wap/shanghai" component={lazy(() => import('../shanghai'))} />{/* 上海站点 */}
                    </Switch>
                </Suspense>
            </div>

        )
    }
}
