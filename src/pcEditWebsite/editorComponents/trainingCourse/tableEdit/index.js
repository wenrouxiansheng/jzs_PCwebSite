import React, { Component, createRef } from 'react'
import './style.scss'
import PubSub from 'pubsub-js'
import { InputNumber, Button, Popconfirm } from 'antd';
let textMessage = null;
export default class tableEdit extends Component {
    state = {
        toolPosition: {
            top: 0,
            left: 0
        },
        rowspanPosition: {
            top: 0,
            left: 0
        },
        selectedObj: null,
        showRowspan: false
    }
    table = createRef()//表格
    menu = createRef()//右键菜单
    rowspanNumber = createRef()//跨行输入表单
    moveInfo = {//鼠标在表格中的位置,放在这里先缓存等需要显示的时候再更新ui位置
        top: 0,
        left: 0
    }

    moveTool = (e) => {
        //悬浮更改位置 并查找可编辑tr
        let { clientX, clientY } = e,
            scrollTop = document.querySelector('.editorBody>.container').scrollTop;

        this.moveInfo = {
            top: clientY - e.currentTarget.offsetTop + scrollTop,
            left: clientX - e.currentTarget.offsetLeft + 20
        }
    }
    showTool = (e) => {
        //监听右键按下显示工具

        const { current } = this.menu;
        current.style.display = e.button === 2 ? 'block' : 'none';
        if (e.target.nodeName === 'TABLE') return false;
        if (e.button !== 2) return false;//不是右键不执行以下代码

        const trFlag = this.getParents(e.target, 'TR').getAttribute('data-flag').split('-'),
            tdFlag = this.getParents(e.target, 'TD').getAttribute('data-num');

        const [name, num] = trFlag;
        console.log(tdFlag)
        this.setState({
            toolPosition: this.moveInfo,
            selectedObj: {
                listName: name,//列表名
                indexed: num, //tr下标
                tdIndexed: tdFlag //td下标
            }
        })
    }
    getParents = (el, name) => {//向上查找标签名 标签名大写
        let dom = el;
        if (el.nodeName !== name) {
            for (let i = 0; i < Infinity; i++) {
                if (dom.parentNode.nodeName === 'BODY') return false;
                if (dom.parentNode.nodeName !== name) dom = dom.parentNode;
                else return dom.parentNode;
            }
        }
        else return el;
        if (el.parentNode.nodeName === name) return el.parentNode;
    }
    hideContextmenu = () => window.event.returnValue = false;//关闭右键原生菜单
    addRow = () => {
        //向下增加一行数据
        const { selectedObj: { indexed, listName } } = this.state,
            defaultValue = [
                {
                    "rowspan": 1,
                    "text": "文案"
                },
                {
                    "rowspan": 1,
                    "text": "文案"
                },
                {
                    "rowspan": 1,
                    "text": "文案"
                },
                {
                    "rowspan": 1,
                    "text": "文案"
                }
            ],
            { props: { tableData } } = this.props.detail[0];

        if (listName === 'title') tableData['list'].splice(0, 0, defaultValue)
        else tableData[listName].splice(parseInt(indexed) + 1, 0, defaultValue)

        this.setState({});
        this.hiddenMenu();
    }
    addGrid = () => {
        //在tr中末尾追加一个td
        const { selectedObj: { indexed, listName } } = this.state,
            { props: { tableData } } = this.props.detail[0],
            defaultValue = {
                "rowspan": 1,
                "text": "文案"
            };
        if (listName === 'title') tableData[listName].push("文案");
        else tableData[listName][indexed].push(defaultValue);

        this.setState({});
        this.hiddenMenu();
    }
    removeRow = () => {
        //删除选中行
        const { selectedObj: { indexed, listName } } = this.state,
            { props: { tableData } } = this.props.detail[0];
        if (listName === "title") {
            PubSub.publish('operationMessage', {
                message: '表格标题不允许删除行操作',
                type: 'error'
            });
            return;
        }
        tableData[listName].splice(indexed, 1);
        this.setState({});
        this.hiddenMenu();
    }
    removeGrid = () => {
        //删除选中格
        const { selectedObj: { indexed, listName, tdIndexed } } = this.state,
            { props: { tableData } } = this.props.detail[0];
        if (listName === 'title') tableData[listName].splice(tdIndexed, 1);
        else tableData[listName][indexed].splice(tdIndexed, 1);
        this.setState({});
        this.hiddenMenu();
    }
    changeValue = () => {
        //使用富文本编辑选中格的值
        const { selectedObj: { indexed, listName, tdIndexed } } = this.state,
            { props: { tableData } } = this.props.detail[0];

        let val = listName === 'title' ? tableData[listName][tdIndexed] : tableData[listName][indexed][tdIndexed].text;

        PubSub.publish('awakenRichTextEditor', { isShow: true, text: val });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            if (typeof data === 'string') {
                let str = data.replace(/<\/?p>/g, '');

                if (listName === 'title') tableData[listName][tdIndexed] = str;
                else tableData[listName][indexed][tdIndexed].text = str;

                this.setState({})
            }
            PubSub.unsubscribe(textMessage);
        });

        this.hiddenMenu();
    }
    hiddenMenu = () => {
        //操作后隐藏菜单
        const { current } = this.menu;
        current.style.display = "none";
    }
    componentWillUnmount() {
        PubSub.unsubscribe(textMessage);
    }
    showChangeRowspan = () => {
        //显示或关闭改变跨行输入框
        const { showRowspan } = this.state;
        this.setState({
            showRowspan: !showRowspan,
            rowspanPosition: this.moveInfo
        })
        this.hiddenMenu()
    }
    changeRowspanNumber = () => {
        //更改选中td跨行
        const { current: { value } } = this.rowspanNumber,
            { selectedObj: { listName, indexed, tdIndexed } } = this.state,
            { props: { tableData } } = this.props.detail[0];
        if (listName === 'title') {
            PubSub.publish('operationMessage', {
                message: '表格标题不允许跨行操作',
                type: 'error'
            });
            return;
        }
        tableData[listName][indexed][tdIndexed].rowspan = value;
        this.setState({
            showRowspan: false
        });
    }
    changeData = () => {
        //确认修改当前修改数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }

    render() {
        const { props: { tableData: { list, title } } } = this.props.detail[0];
        const { toolPosition: { top, left }, showRowspan, rowspanPosition: { top: rowspanTop, left: rowspanLeft } } = this.state;
        return (
            <div className="tableEdit" onContextMenu={this.hideContextmenu}>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>右键点击编辑表格：</span></label>
                </div>

                <div className="table_container" onMouseMove={this.moveTool}>
                    <table ref={this.table} onMouseDown={this.showTool} >
                        <thead>
                            <tr data-flag="title-0">
                                {
                                    title.map((title, index) => {
                                        return <td key={index} data-num={index} dangerouslySetInnerHTML={{ __html: title }} ></td>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => {
                                    return <tr key={index} data-flag={`list-${index}`}>
                                        {
                                            item.map((obj, j) => {
                                                return <td rowSpan={obj.rowspan} dangerouslySetInnerHTML={{ __html: obj.text }} key={j} data-num={j}></td>
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="addRow" ref={this.menu} style={{ top: `${top}px`, left: `${left}px` }}>
                        <p onClick={this.changeValue}>编辑当前选中格</p>
                        <p onClick={this.showChangeRowspan}>当前选中格跨行</p>
                        <p onClick={this.addRow}>向下新增一行</p>
                        <p onClick={this.addGrid}>向后新增一格</p>
                        <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.removeRow} okText="是" cancelText="否">
                            <p>删除当前行</p>
                        </Popconfirm>
                        <p onClick={this.removeGrid}>删除当前格</p>
                    </div>
                    <div className="changeRowspanDiv" style={{ display: showRowspan ? 'flex' : 'none', top: `${rowspanTop}px`, left: `${rowspanLeft}px` }} >
                        <div>当前选中格跨<InputNumber min={1} defaultValue={3} ref={this.rowspanNumber} />行</div>
                        <Button type="primary" onClick={this.changeRowspanNumber}>确认</Button> <Button onClick={this.showChangeRowspan}>取消</Button>
                    </div>

                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认修改</button>
                </div>
            </div>
        )
    }
}
