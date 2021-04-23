import PubSub from 'pubsub-js'

export function getParents(el, name) {//向上查找指定类名，如父元素有指定类名则返回自身
    let dom = el;
    if (!(el?.className?.indexOf)) return;
    if (el.className.indexOf(name) === -1) {
        for (let i = 0; i < Infinity; i++) {
            if (!dom.parentNode) return;
            if (dom.parentNode.nodeName === 'BODY' || dom.parentNode.nodeName === '#document') {
                return false;
            }
            if (dom.parentNode.className.indexOf(name) === -1) {
                dom = dom.parentNode;
            } else {
                return dom;
            }
        }
    }
    return el;
}
//节流
export function throttle(func, time) {
    let timer = null;
    return function (event) {
        if (timer) return;
        timer = setTimeout(() => {
            func(event)
            timer = null;
        }, time);
    }
}

export function homePageMouseMove(componentJson, type) {
    return (e) => {
        //在编辑时调整右上角悬浮窗位置
        const target = getParents(e.target, 'componentContainer');
        if (!target || !target.parentNode) return;
        const num = target.parentNode.getAttribute('flag'),//选中组件的下标
            info = {
                display: 'block',
                width: `${target.offsetWidth}px`,
                height: `0px`,
                left: `${target.offsetLeft}px`,
                top: `${target.offsetTop}px`,
            },
            activeObjInfo = {
                num,
                componentJson,
                type
            };
        //更改悬浮窗位置
        PubSub.publish('changeSelectionPosition', info);
        //选中之后把页面的组件数据   以及选择的组件下标传到悬浮小窗口中
        PubSub.publish('getActiveObj', activeObjInfo);
    }
}