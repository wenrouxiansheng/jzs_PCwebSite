import React, { Component, Suspense } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import './style.scss'
import switchComponentEdit from '../../editorComponents/allEditor'
import StyleEdit from '../../editorComponents/modalWindow/styleEdit'
// 编辑组件悬浮窗

const Loading = <div style={{ fontSize: '14px', textAlign: 'center', lineHeight: '100px' }}>稍等...</div>;
export default class suspensionEditor extends Component {
    state = {
        isShow: false,
        top: 0,
        indexed: 0,
        hasError: false
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
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error, errorInfo);
    }
    
    render() {
        const { top, indexed, hasError } = this.state;
        const { suspensionIsShow, closeSuspension, componentInfo } = this.props;
        if (hasError) {
            return <div>运行时错误</div>;
        }
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
                                <div style={{ display: indexed === 1 ? 'block' : 'none' }}>
                                    {
                                        suspensionIsShow ? <StyleEdit detail={componentInfo} /> : <div>数据传递错误</div>
                                    }
                                </div>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
