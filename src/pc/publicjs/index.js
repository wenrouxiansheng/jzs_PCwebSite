export function getParents(el, name) {//向上查找指定类名，如父元素有指定类名则返回自身
    let dom = el;
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