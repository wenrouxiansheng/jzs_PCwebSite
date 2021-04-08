import React, { Component } from 'react'
import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import PubSub from 'pubsub-js'

import './style.scss'
let imgMessage = null
export default class bannerEdit extends Component {
    state = {
        list: null,
        indexed: null
    }
    awakenPhotoGallery = (list, num) => {
        return () => {
            this.setState({
                list,
                indexed: num
            })
            //唤醒图片库
            PubSub.publish('awakenPhotoGallery', true);
            //订阅 - 更改图片后回调
            imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, data) => {
                const { list, indexed } = this.state;
                const { props: detailList } = list[0];
                detailList.bannerList[indexed].src = data;
                //使用的是props数据源  更改state时 props.detail会更改
                this.setState({
                    list
                })
                //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
                PubSub.unsubscribe(imgMessage);
            });
        }
    }
    changeBanner = () => {
        const { list } = this.state;
        //发布  -修改后的banner数据
        PubSub.publish('revisedDataList', list);
    }
    render() {
        const { detail } = this.props;
        const { props: detailList } = detail[0];
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
                                        <img src={item.src} alt="" title="单击图片可修改" onClick={this.awakenPhotoGallery(detail, index)} />
                                    </td>
                                    <td>
                                        <p className="href">{item.adress}</p>
                                    </td>
                                    <td>
                                        <ArrowUpOutlined title="上移" />
                                        <ArrowDownOutlined title="下移" />

                                    </td>
                                    <td>
                                        <EditOutlined title="编辑" />
                                        <DeleteOutlined title="删除" />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div className="addBanner">+ 添加横幅</div>
                <div className="input_box">
                    <label><span>跳转链接：</span><input type="text" name="href"
                        placeholder="请输入链接" /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeBanner}>确认</button>
                </div>
            </div>
        )
    }
}
