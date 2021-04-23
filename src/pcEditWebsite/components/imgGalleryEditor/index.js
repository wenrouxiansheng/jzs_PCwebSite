import React, { Component } from 'react'
import { CloseOutlined, CloseCircleFilled, FolderOpenFilled } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import './style.scss'

//<!-- 图片库及上传图片 -->
let awaken = null;
export default class imgGalleryEditor extends Component {
    state = {
        isShow: false,
        top: 0,
        indexed: 0,
        photoList: [
            { src: require('../../assets/photoGallery/banner.jpg').default, id: 0, type: false },
            { src: require('../../assets/photoGallery/dance.png').default, id: 1, type: false },
            { src: require('../../assets/photoGallery/glory1.png').default, id: 2, type: false },
            { src: require('../../assets/photoGallery/glory2.png').default, id: 3, type: false },
            { src: require('../../assets/photoGallery/inImg2.png').default, id: 4, type: false },
            { src: require('../../assets/photoGallery/school3.jpg').default, id: 5, type: false },
            { src: require('../../assets/photoGallery/schoolBanner.png').default, id: 6, type: false },
        ],
        selectedImg: null
    }
    switchBox = (num) => {
        return () => {
            this.setState({
                top: num * 60,
                indexed: num
            })
        }
    }
    selectedImage = (num) => {
        //记录被选中的图片   
        return () => {
            const { photoList, selectedImg } = this.state;
            if (selectedImg !== null) photoList[selectedImg].type = false;
            photoList[num].type = true;
            this.setState({
                photoList,
                selectedImg: num
            })
        }
    }
    deliverImage = () => {
        //把选中图片传递
        const { photoList, selectedImg } = this.state;
        const imageSrc = photoList[selectedImg].src;

        PubSub.publish('transmitSelectedImg', imageSrc);
        this.setState({
            isShow: false
        })
    }
    close = () => {
        this.setState({
            isShow: false
        })
        //这里涉及到唤醒图片库后不更改图片直接关闭也需要通知唤醒页面   取消订阅
        PubSub.publish('transmitSelectedImg', { type: 'close' });
    }
    componentDidMount() {
        awaken = PubSub.subscribe('awakenPhotoGallery', (msg, data) => {
            this.setState({
                isShow: data
            })
        });
    }
    componentWillUnmount() {
        // 组件销毁前去除订阅消息
        PubSub.unsubscribe(awaken);
    }
    render() {
        const { indexed, top, photoList, isShow } = this.state;
        return (
            <div className="control_photoGallery" style={{ display: isShow ? 'flex' : 'none' }}>
                <div >
                    <div className="head">
                        <h3>添加图片</h3>
                        <CloseOutlined onClick={this.close} />
                    </div>
                    <div className="body">
                        <nav>
                            <p className={indexed === 0 ? 'active' : ''} onClick={this.switchBox(0)}>我的文件</p>
                            <p className={indexed === 1 ? 'active' : ''} onClick={this.switchBox(1)}>图片库</p>
                            <p className="line" style={{ top: `${top}px` }}></p>
                        </nav>
                        <div className="container">
                            <div style={{ display: indexed === 0 ? 'block' : 'none' }}>
                                <div className="uploadImageTool">
                                    <p>
                                        <FolderOpenFilled />
                                        <span>上传图片</span>
                                    </p>
                                    <input type="file" id="uploadImage" />
                                </div>
                                <div className="imageTypesetting canBeDeleteImage">
                                    <div className="imageBox">
                                        <img src={require('../../assets/photoGallery/glory2.png').default} alt="" />
                                        <CloseCircleFilled />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: indexed === 1 ? 'block' : 'none' }}>
                                <p style={{ height: '30px', lineHeight: '30px', paddingLeft: '15px' }}>
                                    后期可完善图片的分类，一级筛选（素材、横幅图），二级筛选（科技、风景等）</p>
                                <div className="imageTypesetting">
                                    {
                                        photoList.map(item => {
                                            return <div className={`imageBox ${item.type ? 'active' : ''}`} key={item.id} onClick={this.selectedImage(item.id)}>
                                                <img src={item.src} alt="" />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <p className="editorControl"><button onClick={this.deliverImage}>确定</button></p>
                    </div>
                </div>
            </div >
        )
    }
}