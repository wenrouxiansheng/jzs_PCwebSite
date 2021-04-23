import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

import './style.scss'

let imgMessage = null;
export default class brandHonorEdit extends Component {
    state = {
        indexed: null,
    }
    switchData = (num) => {
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    deleteData = (e) => {
        //阻止点击事件冒泡   不设置会再触发一次switchData 会顶替掉setstate
        e.stopPropagation();
        //删除一条数据
        const { props, props: { list } } = this.props.detail[0],
            { indexed: [flag1, flag2] } = this.state;
        if (list[0].length === 1) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请保留一条有效数据，如需删除请先添加" });
            return;
        }
        list[flag1].splice(flag2, 1);
        //扁平化数组
        let separate = list.flat(Infinity),
            ary = [],
            newary = [];
        separate.forEach((item, index) => {
            ary.push(item);
            if ((index + 1) % 5 === 0) {
                newary.push(ary);
                ary = [];
                return;
            }
            //单数结尾添加进去
            if (index === separate.length - 1) {
                newary.push(ary);
                ary = [];
            }
        });
        props.list = newary;
        this.setState({
            indexed: null
        });
    }
    addListData = () => {
        //添加一条数据
        const { props: { list } } = this.props.detail[0],
            obj = {
                "img": require('../../../assets/template/honor2.png').default,
                "detail": "2018北京文化创意大赛 全国总决赛二等奖"
            },
            ary = list[list.length - 1];

        if (ary.length < 5) {
            ary.push(obj);
        } else {
            list[list.length] = [obj]
        }
        this.setState({});
    }
    chaneListText = (type) => {
        return (e) => {
            const { props: { list } } = this.props.detail[0],
                { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改数据" });
                return;
            }
            list[indexed[0]][indexed[1]][type] = e.target.value;
            this.setState({});
        }
    }
    changeImage = () => {
        const { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的图片" });
            return false;
        }
        const { props: { list } } = this.props.detail[0],
            { indexed: [flag1, flag2] } = this.state;

        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                list[flag1][flag2].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
        PubSub.unsubscribe(imgMessage);
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { indexed } = this.state;
        const { props: { list } } = this.props.detail[0]
        //introduceList
        return (
            <div className="brandHonorEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>荣誉列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list.map((item, index) => {
                            return item.map((itemChild, j) => {
                                return <div key={`${index}-${j}`} className={(indexed !== null && indexed[0] === index && indexed[1] === j) ? 'active' : ""} onClick={this.switchData([index, j])}>
                                    <img src={itemChild.img} alt="" />
                                    <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                        <CloseCircleOutlined />
                                    </Popconfirm>
                                </div>
                            })
                        })
                    }
                    <div className="add" onClick={this.addListData}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                <div className="input_box">
                    <label><span>详情：</span><input type="text" name="text" placeholder="请输入文字" key={indexed} onChange={this.chaneListText('detail')} defaultValue={indexed !== null ? list[indexed[0]][indexed[1]].detail : ''} /></label>
                </div>

                <div className="changeComponentConf">
                    <button onClick={this.changeData}>确认</button>
                </div>
            </div>
        )
    }
}
