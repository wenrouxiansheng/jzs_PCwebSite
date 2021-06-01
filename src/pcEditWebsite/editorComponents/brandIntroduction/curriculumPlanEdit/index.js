import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm, Radio } from 'antd';

import './style.scss'
let imgMessage = null,
    textMessage = null;
export default class curriculumPlanEdit extends Component {
    state = {
        indexed: null,
        level2: null
    }
    switchData = (num) => {
        //一级选中切换
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    switchLevel2 = (num) => {
        //二级文字切换选中
        return () => {
            this.setState({
                level2: num
            })
        }
    }
    changeImage = () => {
        //更换图片
        const { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的图片" });
            return;
        }
        const { props: { data } } = this.props.detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                data[indexed].img = imgData;
                this.setState({})
            }
            //只要走这个订阅  都需要取消订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    onRadioChange = (e) => {
        //更改图片位置
        const { target: { value } } = e,
            { indexed } = this.state,
            { props: { data } } = this.props.detail[0];

        data[indexed].type = value;
        this.setState({})
    }
    deleteData = (e) => {
        e.stopPropagation();
        //删除一级
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;
        data.splice(indexed, 1);
        this.setState({
            indexed: null,
            level2: null
        })
    }
    addData = (type) => {
        //添加一条数据
        return () => {
            const { props: { data } } = this.props.detail[0],
                { indexed } = this.state,
                level1 = {
                    "id": (data.length + 1),
                    "img": require('../../../assets/photoGallery/glory1.png').default,
                    "text": [
                        "文案编写"
                    ],
                    "type": "left"
                },
                level2 = "输入文案";

            if (type === 'level1') {
                data.push(level1);
            }

            if (type === 'level2') {
                data[indexed].text.push(level2);
            }

            this.setState({});
        }

    }
    awakenRichText = () => {
        const { props: { data: list } } = this.props.detail[0],
            { indexed, level2 } = this.state;
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: list[indexed].text[level2] });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');
                list[indexed].text[level2] = str;
                this.setState({})
            }
            PubSub.unsubscribe(textMessage);
        });
    }
    deleteLevel2 = (e) => {
        //二级文案删除
        e.stopPropagation();
        //删除一级
        const { props: { data } } = this.props.detail[0],
            { indexed, level2 } = this.state;
        data[indexed].text.splice(level2, 1);
        this.setState({
            level2: null
        })
    }
    changeData = () => {
        //传递修改数据
        const { detail } = this.props
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //销毁订阅
        PubSub.unsubscribe(textMessage);
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { data } } = this.props.detail[0],
            { indexed, level2 } = this.state;
        return (
            <div className="curriculumPlanEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        data.map((item, index) => {
                            return <div key={index} className={(indexed === index) ? 'active' : ""} onClick={this.switchData(index)}>
                                <img src={item.img} alt="" />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addData('level1')}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                {
                    indexed !== null ?
                        <div className="redio">
                            <span>图片位置：</span>
                            <Radio.Group onChange={this.onRadioChange} value={data[indexed].type}>
                                <Radio value={"left"}>图片居左</Radio>
                                <Radio value={"right"}>图片居右</Radio>
                            </Radio.Group>
                        </div>
                        : null
                }
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>选择数据：</span></label>
                </div>
                {
                    indexed !== null ?
                        <div>
                            <ul className="level level2">
                                {
                                    data[indexed].text.map((item, index) => {
                                        return <li className={level2 === index ? 'active' : ''} key={index} onClick={this.switchLevel2(index)}>
                                            <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteLevel2} okText="是" cancelText="否">
                                                <CloseCircleOutlined />
                                            </Popconfirm>
                                            <p>{item}</p>
                                        </li>
                                    })
                                }
                                <li className="add" onClick={this.addData('level2')}>+</li>
                            </ul>
                            {
                                level2 !== null ?
                                    <div className="input_box">
                                        <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                                    </div> : null
                            }
                        </div>
                        : null
                }

                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
