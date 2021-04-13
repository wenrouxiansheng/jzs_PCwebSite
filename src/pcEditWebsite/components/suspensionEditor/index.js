import React, { Component, Suspense } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import './style.scss'
import switchComponentEdit from '../../editorComponents/allEditor'
// 编辑组件悬浮窗

const Loading = <div style={{ fontSize: '14px', textAlign: 'center', lineHeight: '100px'}}>稍等...</div>;
export default class editorSuspension extends Component {
    state = {
        isShow: false,
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
        const { top, indexed } = this.state;
        const { suspensionIsShow, closeSuspension, componentInfo } = this.props;
        return (
            <div className="control_editorSuspension" style={{ display: suspensionIsShow ? 'flex' : 'none' }}>
                <div className="zoom">
                    <div className="editorHead">
                        <h3>编辑模块</h3>
                        <CloseOutlined onClick={closeSuspension} />
                    </div>
                    <div className="editorBody">
                        <nav>
                            <p className={indexed === 0 ? 'active' : ''} onClick={this.switchBox(0)}>编辑</p>
                            <p className={indexed === 1 ? 'active' : ''} onClick={this.switchBox(1)}>高级</p>
                            <p className="line" style={{ top: `${top}px` }}></p>
                        </nav>
                        <div className="container">
                            <Suspense fallback={Loading}>
                                <div style={{ display: indexed === 0 ? 'block' : 'none' }}>

                                    {
                                        switchComponentEdit(componentInfo)
                                    }
                                </div>
                                <div style={{ display: indexed === 1 ? 'block' : 'none' }}>2</div>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
