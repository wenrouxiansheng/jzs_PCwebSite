import React, { Component } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import './style.scss'
// 编辑组件悬浮窗
export default class editorSuspension extends Component {
    state = {
        isShow: true,
        top: 0,
        indexed: 0
    }
    closeEditorSuspension = () => {
        this.setState({
            isShow: false
        })
    }
    switchBox = (num) => {
        return () => {
            this.setState({
                top: num * 60,
                indexed: num
            })
        }
    }
    render() {
        const { isShow, top, indexed } = this.state;
        return (
            <div className="control_editorSuspension" style={{ display: isShow ? 'flex' : 'none' }}>
                <div className="zoom">
                    <div className="editorHead">
                        <h3>编辑模块</h3>
                        <CloseOutlined onClick={this.closeEditorSuspension} />
                    </div>
                    <div className="editorBody">
                        <nav>
                            <p className={indexed === 0 ? 'active' : ''} onClick={this.switchBox(0)}>编辑</p>
                            <p className={indexed === 1 ? 'active' : ''} onClick={this.switchBox(1)}>高级</p>
                            <p className="line" style={{ top: `${top}px` }}></p>
                        </nav>
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
