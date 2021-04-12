import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';
import './style.scss'

let imgMessage = null;
export default class listOptionsImgEdit extends Component {
    state = {
        level1: 0,
        level2: 0,
        level2Img: 0,
        templateObj: {
            "text": "文案",
            "level2": [
                {
                    "text": "文案",
                    "adress": "/"
                },
                {
                    "text": "文案",
                    "adress": "/"
                }
            ],
            "active": true,
            "imgList": [
                {
                    "text": "文案",
                    "src": require('../../../assets/photoGallery/glory1.png').default,
                    "adress": "/"
                },
                {
                    "text": "文案",
                    "src": require('../../../assets/photoGallery/glory2.png').default,
                    "adress": "/"
                }
            ]
        },
        templateLevel2: {
            "text": "文案",
            "adress": "/"
        },
        templateImg: {
            "text": "文案",
            "src": require('../../../assets/photoGallery/inImg2.png').default,
            "adress": "/"
        }
    }

    changeData = () => {
        //传递修改后的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    switchLevel1 = (num) => {
        //切换一级导航
        return () => {
            this.setState({
                level1: num
            })
        }
    }
    changeLevel1Text = (e) => {
        //更改一级导航的文字
        const { level1 } = this.state;
        const { props: { list } } = this.props.detail[0];
        list[level1].text = e.target.value;
        this.setState({})
    }
    addLevel1 = () => {
        //添加一级导航
        const { templateObj } = this.state;
        const { props: { list } } = this.props.detail[0];
        list.push(templateObj);
        this.setState({})
    }
    switchLevel2 = (num) => {
        //切换二级导航
        return () => {
            this.setState({
                level2: num
            })
        }
    }
    changeLevel2Text = (type) => {
        return (e) => {
            //更改二级导航文字及跳转地址
            const { level1, level2: level2Num } = this.state;
            const { props: { list } } = this.props.detail[0];
            if (type === 'text') {
                list[level1].level2[level2Num].text = e.target.value;
            }
            if (type === 'address') {
                list[level1].level2[level2Num].adress = e.target.value;
            }
            this.setState({})
        }
    }
    addLevel2 = () => {
        //添加二级导航
        const { level1, templateLevel2 } = this.state;
        const { props: { list } } = this.props.detail[0];
        list[level1].level2.push(templateLevel2);
        this.setState({})
    }
    switchlevel2Img = (num) => {
        return () => {
            //更改二级导航图片选中
            this.setState({
                level2Img: num
            })
        }
    }
    changeLevel2ImgText = (type) => {
        return (e) => {
            //更改图片导航信息
            const { level1, level2Img } = this.state,
                { props: { list } } = this.props.detail[0],
                { target: { value } } = e;
            if (type === 'text') {
                list[level1].imgList[level2Img].text = value;
            }
            if (type === 'address') {
                list[level1].imgList[level2Img].adress = value;
            }
            this.setState({});
        }
    }
    deleteImg = () => {
        //删除图片
        const { level1, level2Img } = this.state,
            { props: { list } } = this.props.detail[0];
        list[level1].imgList.splice(level2Img, 1);
        this.setState({});
    }
    addImg = () => {
        const { level1, templateImg } = this.state,
            { props: { list } } = this.props.detail[0];
        list[level1].imgList.push(templateImg);
        this.setState({});
    }
    changeImage = () => {
        const { level1, level2Img } = this.state,
            { props: { list } } = this.props.detail[0];
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);

        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            list[level1].imgList[level2Img].src = imgData;

            this.setState({})
            //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
            PubSub.unsubscribe(imgMessage);
        });
    }
    render() {
        const { props: { list } } = this.props.detail[0]
        const { level1, level2, level2Img } = this.state;
        return (
            <div className="listOptionsImgEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ fontSize: '18px', fontWeight: 'bold' }}>一级导航列表：</span></label>
                </div>
                <ul className="level">
                    {
                        list.map((item, index) => {
                            return <li className={level1 === index ? 'active' : ''} key={index} onClick={this.switchLevel1(index)}>{item.text}</li>
                        })
                    }
                    <li className="add" onClick={this.addLevel1}>+</li>
                </ul>
                <div className="input_box">
                    <label><span>更改文字：</span><input type="text" name="level1Text" placeholder="请输入文字" onChange={this.changeLevel1Text} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ fontSize: '18px', fontWeight: 'bold' }}>二级导航：</span></label>
                </div>
                <ul className="level">
                    {
                        list[level1].level2.map((item, index) => {
                            return <li className={level2 === index ? 'active' : ''} key={index} onClick={this.switchLevel2(index)}>{item.text}</li>
                        })
                    }
                    <li className="add" onClick={this.addLevel2}>+</li>
                </ul>
                <div className="input_box">
                    <label><span>更改文字：</span><input type="text" name="level2Text" placeholder="请输入文字" onChange={this.changeLevel2Text('text')} /></label>
                </div>
                <div className="input_box">
                    <label><span>更改跳转链接：</span><input type="text" name="level2Address" placeholder="请输入文字" onChange={this.changeLevel2Text('address')} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ fontSize: '18px', fontWeight: 'bold' }}>二级图片导航：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list[level1].imgList.map((item, index) => {
                            return <div key={index} className={level2Img === index ? "active" : ""} onClick={this.switchlevel2Img(index)}>
                                <img src={item.src} alt="" />
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteImg} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </div>
                        })
                    }
                    <div className="add" onClick={this.addImg}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                <div className="input_box">
                    <label><span>更改文案：</span><input type="text" name="text" placeholder="请输入文字" onChange={this.changeLevel2ImgText('text')} /></label>
                </div>
                <div className="input_box">
                    <label><span>更改跳转链接：</span><input type="text" name="href" placeholder="请输入文字" onChange={this.changeLevel2ImgText('address')} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
