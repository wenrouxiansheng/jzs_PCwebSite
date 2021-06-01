import React, { Component } from 'react'
import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import PubSub from 'pubsub-js'

import './style.scss'

let imgMessage = null
export default class bannerEdit extends Component {
    state = {
        list: null,
        indexed: null,
        inputIsShow: false
    }
    awakenPhotoGallery = (num) => {
        //更换图片
        return () => {
            this.setState({
                indexed: num
            })
            //唤醒图片库
            PubSub.publish('awakenPhotoGallery', true);
            //订阅 - 更改图片后回调
            imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, data) => {
                if (typeof data === 'string') {
                    const { list, indexed } = this.state,
                        { props: detailList } = list[0];
                    detailList.bannerList[indexed].src = data;
                    console.log(detailList);
                    //使用的是props数据源  更改state时 props.detail会更改
                    this.setState({
                        list
                    })
                }
                //接收之后也需要卸载订阅
                PubSub.unsubscribe(imgMessage);
            });
        }
    }
    changeBanner = () => {
        const { list } = this.state;
        //发布  -修改后的banner数据
        //关闭编辑地址框
        this.setState({
            inputIsShow: false
        })
        PubSub.publish('revisedDataList', list);
    }
    componentDidMount() {
        //挂载数据
        const { detail } = this.props;
        this.setState({
            list: detail
        })
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
        PubSub.unsubscribe(imgMessage);
    }
    move = (num, type) => {
        return () => {
            const { list } = this.state,
                { props: { bannerList } } = list[0],
                len = bannerList.length - 1;
            //上移
            if (type === 'up') {
                if (num === 0) {
                    PubSub.publish('operationMessage', { message: '该元素已是第一个显示', type: 'warning' });
                    return false;
                }
                let prev = num - 1;
                bannerList.splice(prev, 0, bannerList[num]);
                bannerList.splice((num + 1), 1)
            }
            //下移
            if (type === 'down') {
                if (num === len) {
                    PubSub.publish('operationMessage', { message: '该元素已是最后显示', type: 'warning' });
                    return false;
                }
                let next = num + 2;
                bannerList.splice(next, 0, bannerList[num]);
                bannerList.splice(num, 1)
            }
            this.setState({
                list
            })
        }
    }
    confirmDelete = (num) => {
        return () => {
            //删除单条数据
            const { list } = this.state,
                { props: { bannerList } } = list[0];
            bannerList.splice(num, 1)
            this.setState({
                list
            })
        }
    }
    addBanner = () => {
        //添加banner
        const { list } = this.state,
            { props: { bannerList } } = list[0];
        let obj = { id: bannerList.length + 1, adress: "#", src: require("../../../assets/photoGallery/banner.jpg").default };
        bannerList.push(obj)
        this.setState({
            list
        })
    }
    editAdress = (num) => {
        return () => {
            //记录选中索要更改地址数据的下标
            this.setState({
                indexed: num,
                inputIsShow: true
            })
        }
    }
    changeAddress = (e) => {
        //修改地址
        const { list, indexed } = this.state,
            { props: { bannerList } } = list[0];
        bannerList[indexed].adress = e.target.value;
        this.setState({})//每次输入时调用setstate更新组件，有虚拟dom对比
    }
    render() {
        const { detail } = this.props;
        const { props: detailList } = detail[0];
        const { inputIsShow } = this.state;
        return (
            <div className="bannerEdit">
                <table>
                    <thead>
                        <tr>
                            <td>图片</td>
                            <td>链接</td>
                            <td>顺序</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detailList.bannerList.map((item, index) => {
                                return <tr key={item.id}>
                                    <td>
                                        <img src={item.src} alt="" title="单击图片可修改" onClick={this.awakenPhotoGallery(index)} />
                                    </td>
                                    <td>
                                        <p className="href">{item.adress}</p>
                                    </td>
                                    <td>
                                        <ArrowUpOutlined title="上移" onClick={this.move(index, 'up')} />
                                        <ArrowDownOutlined title="下移" onClick={this.move(index, 'down')} />
                                    </td>
                                    <td>
                                        <EditOutlined title="编辑" onClick={this.editAdress(index)} />
                                        <Popconfirm
                                            placement="right"
                                            title="确认删除？"
                                            onConfirm={this.confirmDelete(index)}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <DeleteOutlined title="删除" />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className="addBanner" onClick={this.addBanner}>+ 添加横幅</div>
                <div className="input_box">
                    <label style={{ display: inputIsShow ? 'flex' : 'none' }}><span>跳转链接：</span><input type="text" name="href"
                        placeholder="请输入链接" onInput={this.changeAddress} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeBanner}>确认</button>
                </div>
            </div>
        )
    }
}
