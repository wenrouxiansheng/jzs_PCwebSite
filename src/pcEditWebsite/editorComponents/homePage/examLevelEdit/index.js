import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';
import './style.scss'

let imgMessage = null;
export default class examLevelEdit extends Component {
    state = {
        indexed: null
    }
    switchData = (num) => {
        return () => {
            //切换选中样式   记录下标
            this.setState({
                indexed: num
            })
        }
    }
    chaneImage = () => {
        const { props: { list } } = this.props.detail[0]
        const { indexed } = this.state;
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);

        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            list[indexed].src = imgData;
            this.setState({})
        });
    }
    deleteData = (e) => {
        e.stopPropagation();
        //删除一条数据
        const { indexed } = this.state,
            { props: { list } } = this.props.detail[0];
        list.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addData = () => {
        //添加一条数据
        const { props: { list } } = this.props.detail[0],
            obj = {
                "src": require('../../../assets/template/banner.png').default,
                "text": "舞蹈考级",
                "subText": "DANCE DISTINCTION",
                "adress": "/"
            };
        list.push(obj);
        this.setState({});
    }
    onInputChange = (type) => {
        return (e) => {
            const { target: { value } } = e,
                { indexed } = this.state,
                { props: { list } } = this.props.detail[0];
            list[indexed][type] = value;
        }
    }
    changeData = () => {
        //传递修改数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //卸载订阅
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { list } } = this.props.detail[0]
        const { indexed } = this.state;
        return (
            <div className="examLevelEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>考级导航列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list.map((item, index) => {
                            return <div key={index} className={indexed === index ? "active" : ""} onClick={this.switchData(index)}>
                                <img src={item.src} alt="" />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addData}>+</div>
                </div>
                {
                    indexed !== null ?
                        <div>
                            <div className="input_box">
                                <label><span>点击图片更改：</span><button className="changeImg" onClick={this.chaneImage}>点击图片更改：</button></label>
                            </div>
                            <div className="input_box">
                                <label><span>标题：</span><input type="text" name="title" placeholder="请输入标题" key={indexed} defaultValue={list[indexed].text} onChange={this.onInputChange('text')} /></label>
                            </div>
                            <div className="input_box">
                                <label><span>副标题：</span><input type="text" name="subtitle" placeholder="请输入副标题" key={indexed} defaultValue={list[indexed].subText} onChange={this.onInputChange('subText')} /></label>
                            </div>
                            <div className="input_box">
                                <label><span>跳转地址：</span><input type="text" name="address" placeholder="请输入地址" key={indexed} defaultValue={list[indexed].adress} onChange={this.onInputChange('adress')} /></label>
                            </div>
                        </div> : null
                }
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}