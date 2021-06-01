import React, { Component } from 'react'
import './style.scss'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

let imgMessage = null;
export default class gloryListEdit extends Component {
    state = {
        indexed: null
    }
    deleteData = (e) => {
        //阻止点击事件冒泡   不设置会再触发一次switchData 会顶替掉setstate
        e.stopPropagation();
        //删除一条数据
        const { props, props: { data } } = this.props.detail[0],
            { indexed: [flag1, flag2] } = this.state;
        if (data[0].length === 1) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请保留一条有效数据，如需删除请先添加" });
            return;
        }
        data[flag1].splice(flag2, 1);
        //扁平化数组
        let separate = data.flat(Infinity),
            ary = [],
            newary = [];
        separate.forEach((item, index) => {
            item.id = index + 1;
            ary.push(item);
            if ((index + 1) % 2 === 0) {
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
        props.data = newary;
        this.setState({
            indexed: null
        });
    }
    switchData = (num) => {
        return () => {
            console.log(num)
            this.setState({
                indexed: num
            })
        }
    }

    addData = () => {
        //添加一条数据
        const { props: { data } } = this.props.detail[0],
            len = data[data.length - 1].length + (data.length - 1) * 2,
            obj = {
                "id": len + 1,
                "src": require('../../../assets/template/img5.png').default,
                "title": "桔子树4岁小学员登上央视舞台",
                "detail": "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台"
            },
            ary = data[data.length - 1];

        if (ary.length < 2) {
            ary.push(obj);
        } else {
            data[data.length] = [obj]
        }

        this.setState({});
    }
    chaneText = (type) => {
        return (e) => {
            const { props: { data } } = this.props.detail[0],
                { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改数据" });
                return;
            }
            data[indexed[0]][indexed[1]][type] = e.target.value;
            this.setState({});
        }
    }
    changeImage = () => {
        const { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的图片" });
            return false;
        }
        const { props: { data } } = this.props.detail[0],
            { indexed: [flag1, flag2] } = this.state;

        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);
        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            if (typeof imgData === 'string') {
                data[flag1][flag2].src = imgData;
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
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;
        return (
            <div className="gloryListEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>展示列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        data.map((item, index) => {
                            return item.map((itemChild, j) => {
                                return <div key={`${index}-${j}`} className={(indexed !== null && indexed[0] === index && indexed[1] === j) ? 'active' : ""} onClick={this.switchData([index, j])}>
                                    <img src={itemChild.src} alt="" />
                                    <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                        <CloseCircleOutlined />
                                    </Popconfirm>
                                </div>
                            })
                        })
                    }
                    <div className="add" onClick={this.addData}>+</div>
                </div>
                <div className="input_box">
                    <span>更改选中图片：</span><button className="changeImg" onClick={this.changeImage}>点击更改</button>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" placeholder="请输入文字" key={indexed} onChange={this.chaneText('title')} defaultValue={indexed !== null ? data[indexed[0]][indexed[1]].title : ''} /></label>
                </div>
                <div className="input_box">
                    <label><span>文案：</span><textarea key={indexed} defaultValue={indexed !== null ? data[indexed[0]][indexed[1]].detail : ''} onChange={this.chaneText('detail')}></textarea></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
