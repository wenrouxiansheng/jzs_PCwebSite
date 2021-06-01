import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';
import './style.scss'

let imgMessage = null;
export default class teacherListEdit extends Component {
    state = {
        indexed: [0, 0]
    }
    addData = () => {
        //添加一条数据
        const { props: { list } } = this.props.detail[0],
            obj = {
                "img": require('../../../assets/template/teacher.jpg').default,
                "name": "模板",
                "duration": "5年",
                "course": "现代舞、芭蕾舞、古典舞、民族舞、流行舞等",
                "adress": "/"
            },
            ary = list[list.length - 1].info;
        if (ary.length < 5) {
            ary.push(obj);
        } else {
            list[list.length] = { info: [obj] }
        }
        this.setState({});
    }
    switchData = (num) => {
        //切换数据选中的下标
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
        if (list[0].info.length === 1) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请保留一条有效数据，如需删除请先添加" });
            return;
        }
        list[flag1].info.splice(flag2, 1);
        let ary = list.map(item => {
            return item.info
        })
        //扁平化数组
        let separate = ary.flat(Infinity),
            container = {
                info: []
            },
            newAry = [];
        separate.forEach((item, index) => {
            container.info.push(item);
            if ((index + 1) % 5 === 0) {
                newAry.push(container);
                container = {
                    info: []
                };
                return;
            }
            //是最后一位就加上去
            if (index === separate.length - 1) {
                newAry.push(container);
                container = {
                    info: []
                };
            }
        });

        props.list = newAry;
        console.log(separate, newAry, list)
        this.setState({
            indexed: [0, 0]
        })
    }
    onChangeInput = (type) => {
        //更改一条数据
        return (e) => {
            const { indexed } = this.state;
            if (indexed === null) {
                PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
                return false;
            }
            const { props: { list } } = this.props.detail[0],
                { indexed: [flag1, flag2] } = this.state;
            list[flag1].info[flag2][type] = e.target.value;
            this.setState({})
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
                list[flag1].info[flag2].img = imgData;
                this.setState({})
            }
            //接收之后也需要卸载订阅
            PubSub.unsubscribe(imgMessage);
        });
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //每次订阅接收到后 去除订阅   所有编辑器更改图片共用该订阅名称
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { list } } = this.props.detail[0]
        const { indexed } = this.state;
        return (
            <div className="teacherListEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>教师列表：</span></label>
                </div>
                <div className="initElementImgList">
                    {
                        list.map((item, index) => {
                            return item.info.map((data, j) => {
                                return <div key={`${index}-${j}`} className={(indexed !== null && indexed[0] === index && indexed[1] === j) ? 'active' : ""} onClick={this.switchData([index, j])}>
                                    <img src={data.img} alt="" />
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
                    <label><span>姓名：</span><input type="text" name="name" placeholder="请输入文字" key={indexed} defaultValue={indexed !== null ? list[indexed[0]].info[indexed[1]].name : ''} onChange={this.onChangeInput('name')} /></label>
                </div>
                <div className="input_box">
                    <label><span>教龄：</span><input type="text" name="duration" placeholder="请输入文字" key={indexed} defaultValue={indexed !== null ? list[indexed[0]].info[indexed[1]].duration : ''} onChange={this.onChangeInput('duration')} /></label>
                </div>
                <div className="input_box">
                    <label><span>教学课程：</span><input type="text" name="course" placeholder="请输入文字" key={indexed} defaultValue={indexed !== null ? list[indexed[0]].info[indexed[1]].course : ''} onChange={this.onChangeInput('course')} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
