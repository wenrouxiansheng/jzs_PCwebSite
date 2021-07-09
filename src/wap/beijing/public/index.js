import switchComponents from './allComponent'
export function seekComponents(componentJson) {
    //遍历页面结构  返回组件
    return componentJson.map((item, index) => {
        return switchComponents(item.component, item.props, index)
    })
}