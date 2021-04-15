import React, { Component } from 'react'
import './style.scss'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

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
        this.setState({});
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
    render() {
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(data)
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
            </div>
        )
    }
}
