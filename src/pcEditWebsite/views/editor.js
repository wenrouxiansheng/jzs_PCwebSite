import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { message } from 'antd';

import EditorSuspension from "../components/suspensionEditor";//编辑器容器
import Header from "../components/header";//编辑器容器
import ImgGalleryEditor from "../components/imgGalleryEditor";//图片库
import ModalWindow from "../components/modalWindow";//悬浮模态窗
import Toolbar from "../components/toolbar";//左侧工具栏
import RichTextEditor from "../components/richTextEditor";//富文本编辑器
import { containerStatus } from '../../store/store'
import { checkComponentContainer } from '../../store/actions'

const style = {
    position: 'relative',
    minWidth: '1200px',
    maxWidth: '1920px',
    height: '100vh'
};
let selectPageMessage = null,
    revisedMessage = null,
    operationMessage = null;
export default class pcEditWebsite extends Component {
    iframe = React.createRef()
    state = {
        suspensionIsShow: false,//组件编辑器是否显示
        changedComponents: null,//传过来的页面组件和选中组件的下标
        componentInfo: null//选中组件的信息
    }
    componentDidMount() {
        //接收要更改页面组件和组件信息 打开编辑悬浮窗
        selectPageMessage = PubSub.subscribe('selectPageComponent', (msg, data) => {
            this.setState({
                suspensionIsShow: true,
                changedComponents: data
            })
            this.filterComponentInfo(data)
        });

        //订阅 - 修改后的数据都会走这个消息 拿到后在此页面判断更改那条数据
        revisedMessage = PubSub.subscribe('revisedDataList', (msg, data) => {
            this.changeRevisedDataList(data)
        });

        //订阅 - 修改组件后的消息是成功还是什么失败
        operationMessage = PubSub.subscribe('operationMessage', (msg, data) => {
            if (data.type === 'success') message.success(data.message);

            if (data.type === 'warning') message.warning(data.message);

            if (data.type === 'error') message.error(data.message);
        });

    }
    componentWillUnmount() {
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(selectPageMessage);
        PubSub.unsubscribe(revisedMessage);
        PubSub.unsubscribe(operationMessage);
    }
    changeRevisedDataList = (data) => {

        if (!Array.isArray(data)) {
            throw new Error("传递的值应为数组");
        }
        const iframe = this.iframe.current.contentWindow;
        //获得修改后的数据 根据下标替换
        const { changedComponents } = this.state,
            { num, componentJson } = changedComponents;
        componentJson[num] = data[0];
        //这里要获取iframe下的window
        iframe.PubSub.publish('getChangeComponentData', changedComponents);
    }
    filterComponentInfo = (info) => {
        //更新编辑组件是否是组件容器
        containerStatus.dispatch(checkComponentContainer(info.isContainer))
        //筛选要更改的组件信息
        let obj = info.componentJson.filter((item, index) => {
            return (info.num * 1) === index ? item : null;
        })
        obj[1] = info.num;//这个属性是为了更新样式编辑器的个个数值
        this.setState({
            componentInfo: obj
        })
    }
    closeSuspension = () => {
        //关闭组件编辑器
        this.setState({
            suspensionIsShow: false
        })
    }

    render() {
        const { suspensionIsShow, componentInfo } = this.state;
        return (
            <div className="editorPage" style={style}>
                <Header type={'edit'} />
                <iframe id="iframe" src="/site/pc/home" title="pc" ref={this.iframe} style={{ width: "100%", height: "calc(100vh - 80px)" }} />
                <EditorSuspension suspensionIsShow={suspensionIsShow} closeSuspension={this.closeSuspension} componentInfo={componentInfo} />
                <ImgGalleryEditor />
                <ModalWindow />
                <Toolbar />
                <RichTextEditor />
            </div>
        )
    }
}