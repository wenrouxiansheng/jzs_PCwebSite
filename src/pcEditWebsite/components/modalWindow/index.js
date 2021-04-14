import React, { Component, lazy, Suspense } from 'react'
import { AppstoreFilled, SettingFilled, FormatPainterFilled, CloseCircleFilled } from '@ant-design/icons';
import PubSub from 'pubsub-js'

import './style.scss'
const ComponentsModal = lazy(() => import('../../editorComponents/modalWindow/componentsModal')),
    StyleModal = lazy(() => import('../../editorComponents/modalWindow/styleModal')),
    SetupModal = lazy(() => import('../../editorComponents/modalWindow/setupModal'));
const Loading = <div style={{ fontSize: '14px', textAlign: 'center', lineHeight: '100px' }}>稍等...</div>;
let showMessage = null;
export default class modalWindow extends Component {
    state = {
        headerList: [
            {
                text: "模块",
                icon: <AppstoreFilled />
            },
            {
                text: "样式",
                icon: <FormatPainterFilled />
            },
            {
                text: "设置",
                icon: <SettingFilled />
            },
        ],
        record: 0,
        isShow: false,
        moveObj: {
            left: 200,
            top: 100,
            status: false,
            x: null,
            y: null
        }
    }
    componentDidMount() {
        //订阅 - 唤醒模态窗事件
        showMessage = PubSub.subscribe('showModalWindow', (msg, data) => {
            const { select, isShow } = data;
            this.setState({
                isShow,
                record: select || 0
            })
        });
    }
    componentWillUnmount() {
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(showMessage);
    }
    switchHeader = (num) => {
        //导航切换
        return () => {
            this.setState({
                record: num
            })
        }
    }
    switchModal = (num) => {
        switch (num) {
            case 0: return <ComponentsModal />;//模块模态窗
            case 1: return <StyleModal />;//样式模态窗
            case 2: return <SetupModal />;//设置模态窗
            default: <div>模态窗组件检索 null</div>
        }
    }
    closeWindow = () => {
        //关闭模态窗
        this.setState({
            isShow: false
        })
    }
    onMouseDown = (e) => {
        //鼠标按下开启可拖拽
        const { moveObj: { left, top } } = this.state;

        this.setState({
            moveObj: {
                left,
                top,
                status: true,
                y: e.clientY,
                x: e.clientX
            }
        })
    }
    onMouseMove = (e) => {
        //鼠标移动
        let { moveObj: { left, top, status, x, y } } = this.state;
        if (status) {
            top = e.clientY - y + top;
            left = e.clientX - x + left;
            this.setState({
                moveObj: {
                    left,
                    top,
                    status: true,
                    y: e.clientY,
                    x: e.clientX
                }
            })
        }
    }
    onMouseUp = () => {
        //鼠标松开关闭可拖拽
        const { moveObj: { left, top } } = this.state;
        this.setState({
            moveObj: {
                left,
                top,
                status: false
            }
        })
    }
    render() {
        const { record, headerList, isShow, moveObj: { left, top, status } } = this.state;
        return (
            <div className="modalWindow" style={{ top: `${top}px`, left: `${left}px`, display: isShow ? 'block' : 'none', cursor: status ? 'move' : 'default' }} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}>
                <div className="suspendedWindow_header">
                    {
                        headerList.map((item, index) => {
                            return <div className={record === index ? "active" : ""} onClick={this.switchHeader(index)} key={index}>
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        })
                    }
                    <CloseCircleFilled onClick={this.closeWindow} />
                </div>
                <div className="suspendedWindow_body">
                    <Suspense fallback={Loading}>
                        {
                            this.switchModal(record)
                        }
                    </Suspense>
                </div>

            </div>
        )
    }
}
