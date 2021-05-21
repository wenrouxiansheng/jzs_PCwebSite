import React, { Component } from 'react'

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
            <div style={{ fontSize: "0.36rem", textAlign: 'center' }}>
                wap端正在开发中
            </div>
        )
    }
}
