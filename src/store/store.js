import { createStore } from 'redux'//创建store对象
import checkEditingStatus from './reducer'

export const editingStatus = createStore(checkEditingStatus);//创建store   是否是编辑器状态