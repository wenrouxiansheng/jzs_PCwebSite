/** 
 * 创建检测是否是编辑器状态
*/
const init = false
export default function checkEditingStatus(preState, active) {
    const { data = init } = active;//设置默认值false  如果不是编辑器状态不会调用active
    return data
}

