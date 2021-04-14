import React, { Component } from 'react'
import './style.scss'
import { RightCircleFilled, AlignLeftOutlined, BoldOutlined, AreaChartOutlined, FontColorsOutlined } from '@ant-design/icons';

import switchComponentInfo from '../../../componentsPropsInfo'

export default class componentsModal extends Component {
    state = {
        headeList: ["新增模块", "页面模块"],
        componentList: [
            {
                title: "组件",
                icon: <RightCircleFilled />,
                active: true,
                id: "1",
                list: [
                    {
                        text: "横幅图",
                        icon: <AreaChartOutlined />,
                        id: "1-1",
                        value: "Banner"
                    },
                    {
                        text: "标题",
                        icon: <FontColorsOutlined />,
                        id: "1-2",
                        value: "Title"
                    },
                    {
                        text: "图文",
                        icon: <FontColorsOutlined />,
                        id: "1-3",
                        value: "ImgAndText"
                    },
                ]
            },
            {
                title: "测试",
                icon: <RightCircleFilled />,
                active: true,
                id: "2",
                list: [
                    {
                        text: "段落",
                        icon: <AlignLeftOutlined />,
                        id: "2-1",
                    },
                    {
                        text: "按钮",
                        icon: <BoldOutlined />,
                        id: "2-2",
                    },
                ]
            }
        ],
        record: 0
    }
    switchControlMenu = (num) => {
        //切换控件菜单显示隐藏
        return () => {
            const { componentList } = this.state;
            componentList[num].active = !componentList[num].active;
            this.setState({
                componentList
            })
        }
    }
    switchHeade = (num) => {
        //切换导航
        return () => {
            this.setState({
                record: num
            })
        }
    }
    addComponent = (value) => {
        return () => {
            let iframe = document.getElementById('iframe').contentWindow;
            iframe.PubSub.publish('addComponent', {component: value, info: switchComponentInfo(value)});
        }
    }
    render() {
        const { record, componentList, headeList } = this.state;
        return (
            <div className='suspendedWindow_box'>
                <ul className="suspendedWindow_boxHead">
                    {
                        headeList.map((item, index) => {
                            return <li className={record === index ? 'active' : ''} onClick={this.switchHeade(index)} key={index}>{item}</li>
                        })
                    }
                    <li className="line" style={{ left: `${10 * (record + 1) + (70 * record)}px` }}></li>
                </ul>
                <div className={`suspendedWindow_boxBody ${record === 0 ? 'active' : ''}`}>
                    {
                        componentList.map((item, index) => {
                            return <div className="menv_box" key={item.id}>
                                <div className={`menu_title ${item.active ? 'active' : ''}`} onClick={this.switchControlMenu(index)}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                <ul className="controlMenu" style={{ display: item.active ? 'flex' : 'none' }}>
                                    {
                                        item.list.map((info, j) => {
                                            return <li key={info.id} onClick={this.addComponent(info.value)}>
                                                {info.icon}
                                                <span>{info.text}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                                <p className="clear"></p>
                            </div>
                        })
                    }
                </div>
                <div className={`suspendedWindow_boxBody ${record === 1 ? 'active' : ''}`}>
                    0-2
                </div>
            </div>
        )
    }
}
