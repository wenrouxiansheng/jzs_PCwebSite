import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { message, Popconfirm } from 'antd';

import './style.scss'
let imgMessage = null;
export default class schoolListEdit extends Component {
    state = {
        selectedImg: {
            type: null,
            num: null,
            tel: null,
            name: null
        }
    }
    recordSelectedImage = (type, num) => {
        return () => {
            if (type === 'big') {
                //大图
                this.awakenPhotoGallery(type, num);
                return;
            }

            //小图列表记录被选中的图片
            const { props: { data: { smallList } } } = this.props.detail[0],
                { list, phone } = smallList;
            this.setState({
                selectedImg: {
                    type,
                    num,
                    tel: phone,
                    name: list[num].name
                }
            })
        }
    }
    onInputChange = (genre) => {
        //修改列表中校区电话信息
        return (e) => {
            const { props: { data: { smallList }, data } } = this.props.detail[0]
            const { selectedImg: { type, num } } = this.state;
            if (genre === 'title') {
                data.title = e.target.value;
                return;
            }

            if (type !== 'small') {
                message.warning('请选择列表中要更改的信息');
                return;
            }

            if (genre === 'school') {
                smallList.list[num].name = e.target.value;
            }
            if (genre === 'tel') {
                smallList.phone = e.target.value;
            }
        }
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    changeImage = () => {
        //修改列表中的图片
        const { selectedImg: { type, num } } = this.state;
        if (type !== 'small') {
            message.warning('请选择列表中要更改的图片');
            return;
        }
        this.awakenPhotoGallery(type, num);
    }

    awakenPhotoGallery = (type, num) => {
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);

        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                const { props } = this.props.detail[0]
                if (type === 'big') {//大图
                    props.data.src = imgData;
                }
                if (type === 'small') {//小图列表
                    props.data.smallList.list[num].src = imgData;
                }
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    addSchoolList = () => {
        //添加列表校区
        const { props: { data: { smallList } } } = this.props.detail[0];
        let obj = { name: '校区名', src: require('../../../assets/photoGallery/school3.jpg').default, tel: "400-900-8898" };
        smallList.list.push(obj);
        this.setState({})
    }
    delectInfo = (num) => {
        //删除校区
        return () => {
            const { props: { data: { smallList } } } = this.props.detail[0];

            smallList.list.splice(num, 1);
            this.setState({})
        }
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        console.log(this.props.detail[0])
        const { props: { data: { src, title, smallList } } } = this.props.detail[0]
        const { selectedImg } = this.state;

        return (
            <div className="schoolListEdit">
                <div className="input_box">
                    <label><span>点击图片更改：</span><img src={src} alt="" onClick={this.recordSelectedImage('big', 0)} /></label>
                </div>
                <div className="input_box">
                    <label><span>左图标题：</span><input type="text" name="title" defaultValue={title} placeholder="请输入标题" onChange={this.onInputChange('title')} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>右侧图片列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        smallList.list.map((item, index) => {
                            return <div className={selectedImg.num === index ? 'active' : ''} key={index}>
                                <img src={item.img} alt="" onClick={this.recordSelectedImage('small', index)} />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.delectInfo(index)} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addSchoolList}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                <div className="input_box">
                    <label><span>校区：</span><input type="text" name="school" placeholder="请输入校区" key={selectedImg.num} defaultValue={selectedImg.name} onChange={this.onInputChange('school')} /></label>
                </div>
                <div className="input_box">
                    <label><span>联系电话：</span><input type="text" name="tel" placeholder="请输入联系电话" key={selectedImg.num} defaultValue={selectedImg.tel} onChange={this.onInputChange('tel')} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
