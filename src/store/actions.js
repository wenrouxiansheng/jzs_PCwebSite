export const changeEditingStatus = data => ({type: 'checkEditingStatus', data}) //pc 是编辑器状态就会调用的动作
export const checkComponentContainer = data => ({type: 'checkComponentContainer', data}) //pc 是组件容器就会调用的动作