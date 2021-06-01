import React, { Component } from 'react'
import './style.scss'
import switchComponents from '@components/allComponents'//汇总的组件
//品牌介绍 - 页面汇总管理
export default class componentsContainer extends Component {
    seekComponents = () => {
        const { components } = this.props;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return components.map((item, index) => {
            return <div key={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    render() {
        const {style} = this.props
        return (
            <div className="componentsContainer"  style={{...style}}>
                {
                    this.seekComponents()
                }
            </div>
        )
    }
}
