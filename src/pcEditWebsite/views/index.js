import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import EditorSuspension from "../components/suspensionEditor";
import ImgGalleryEditor from "../components/imgGalleryEditor";

const style = {
    position: 'relative',
    minWidth: '1200px',
    maxWidth: '1920px',
    height: '100vh'
};
let selectPageMessage = null,
    revisedMessage = null
export default class pcEditWebsite extends Component {
    iframe = React.createRef()
    state = {
        suspensionIsShow: false,//组件编辑器是否显示
        changedComponents: null,//传过来的页面组件和选中组件的下标
        componentInfo: null//选中组件的信息
    }
    getIframe = () => {
        // const iframe = this.iframe.current.contentWindow;
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
    }
    componentWillUnmount() {
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(selectPageMessage);
        PubSub.unsubscribe(revisedMessage);
    }
    changeRevisedDataList = (data) => {
        //获得修改后的数据 根据下标替换
        const { changedComponents } = this.state,
         { num, componentJson } = changedComponents;
        componentJson[num] = data[0];
        console.log(changedComponents)
        //这里改写  判断是那个页面  传递修改后的数据
    }
    filterComponentInfo = (info) => {
        //筛选要更改的组件信息
        let obj = info.componentJson.filter((item, index) => {
            return (info.num * 1) === index ? item : null;
        })
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
                <iframe id="iframe" src="../../pc/views/index.js" title="pc" ref={this.iframe} style={{ width: "100%", height: "100vh" }} />
                <EditorSuspension suspensionIsShow={suspensionIsShow} closeSuspension={this.closeSuspension} componentInfo={componentInfo} />
                <ImgGalleryEditor />
            </div>
        )
    }
}
