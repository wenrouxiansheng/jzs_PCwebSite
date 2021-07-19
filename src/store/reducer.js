/** 
 * 创建检测是否是编辑器状态
*/
export function checkEditingStatus(preState = false, active) {
    const { type } = active;//设置默认值false  如果不是编辑器状态不会调用active
    switch (type) {
        case 1: return true;

        case 0: return false;

        default: return preState;
    }
}

/** 
 * 点击编辑组件时 根据isContainer来传送是否是组件容器   
 * 根据这个值隐藏组件编辑器的确定按钮  保留组件容器的确认按钮
*/
export function checkComponentContainer(preState, active) {
    const { data = false } = active;//设置默认值false  如果不是编辑器状态不会调用active
    return data
}

