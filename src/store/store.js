import { createStore } from 'redux'//创建store对象
import { checkEditingStatus, checkComponentContainer } from './reducer'

export const editingStatus = createStore(checkEditingStatus);//创建store   是否是编辑器状态

export const containerStatus = createStore(checkComponentContainer);//创建store   是否是组件容器编辑状态