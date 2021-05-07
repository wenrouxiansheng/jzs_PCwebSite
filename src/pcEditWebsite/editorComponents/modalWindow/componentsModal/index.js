import React, { Component } from 'react'
import './style.scss'
import { RightCircleFilled, AlignLeftOutlined, BoldOutlined, AreaChartOutlined, FontColorsOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'

import switchComponentInfo from '../../../componentsPropsInfo'
import { containerStatus } from '../../../../store/store'
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
                        text: "图片缩放轮播",
                        icon: <FontColorsOutlined />,
                        id: "1-2",
                        value: "ZoomCarousel"
                    },
                    {
                        text: "图文",
                        icon: <FontColorsOutlined />,
                        id: "1-3",
                        value: "ImgAndText"
                    },
                    {
                        text: "多图列表",
                        icon: <FontColorsOutlined />,
                        id: "1-4",
                        value: "SchoolListImgText"
                    },
                    {
                        text: "多级列表",
                        icon: <FontColorsOutlined />,
                        id: "1-5",
                        value: "ListOfOptionsImg"
                    },
                    {
                        text: "教师列表",
                        icon: <FontColorsOutlined />,
                        id: "1-7",
                        value: "TeacherList"
                    },
                    {
                        text: "双图列表",
                        icon: <FontColorsOutlined />,
                        id: "1-8",
                        value: "GloryList"
                    },
                    {
                        text: "荣誉列表",
                        icon: <FontColorsOutlined />,
                        id: "1-9",
                        value: "BrandHonor"
                    },
                    {
                        text: "图文介绍",
                        icon: <FontColorsOutlined />,
                        id: "1-10",
                        value: "Exhibition"
                    },
                    {
                        text: "品牌介绍",
                        icon: <FontColorsOutlined />,
                        id: "1-11",
                        value: "Introduce"
                    },
                    {
                        text: "组件容器",
                        icon: <FontColorsOutlined />,
                        id: "1-12",
                        value: "ComponentContainer"
                    },
                    {
                        text: "历史历程",
                        icon: <FontColorsOutlined />,
                        id: "1-13",
                        value: "History"
                    },
                    {
                        text: "图文段落",
                        icon: <FontColorsOutlined />,
                        id: "1-14",
                        value: "CurriculumPlan"
                    },
                    {
                        text: "流程介绍",
                        icon: <FontColorsOutlined />,
                        id: "1-15",
                        value: "CourseFlow"
                    },
                    {
                        text: "课程流程",
                        icon: <FontColorsOutlined />,
                        id: "1-16",
                        value: "LearningGoal"
                    },
                    {
                        text: "问答列表",
                        icon: <FontColorsOutlined />,
                        id: "1-17",
                        value: "QuestionConsultation"
                    },
                    {
                        text: "课程种类介绍",
                        icon: <FontColorsOutlined />,
                        id: "1-18",
                        value: "CategoryIntroduction"
                    },
                    {
                        text: "资源介绍",
                        icon: <FontColorsOutlined />,
                        id: "1-19",
                        value: "TeacherStandards"
                    },
                    {
                        text: "图片列表交错",
                        icon: <FontColorsOutlined />,
                        id: "1-20",
                        value: "ImgTextCrossing"
                    },
                    {
                        text: "菱形图片列表",
                        icon: <FontColorsOutlined />,
                        id: "1-21",
                        value: "ImgBlindPlatoon"
                    },
                    {
                        text: "联系我们",
                        icon: <FontColorsOutlined />,
                        id: "1-22",
                        value: "ContactInfo"
                    },
                ]
            },
            {
                title: "导航组件",
                icon: <RightCircleFilled />,
                active: true,
                id: "2",
                list: [
                    {
                        text: "图文导航",
                        icon: <AlignLeftOutlined />,
                        id: "2-1",
                        value: "CourseNavList"
                    },
                    {
                        text: "图文考级导航",
                        icon: <FontColorsOutlined />,
                        id: "2-2",
                        value: "ExamLevelList"
                    },

                ]
            },
            {
                title: "交互组件",
                icon: <RightCircleFilled />,
                active: true,
                id: "3",
                list: [
                    {
                        text: "表单",
                        icon: <AlignLeftOutlined />,
                        id: "3-1",
                        value: "Form"
                    },
                    {
                        text: "新闻列表",
                        icon: <BoldOutlined />,
                        id: "3-2",
                        value: "ArtNewsList"
                    },
                    {
                        text: "教师列表",
                        icon: <FontColorsOutlined />,
                        id: "3-3",
                        value: "TeachersClassification"
                    },
                    {
                        text: "校区列表",
                        icon: <BoldOutlined />,
                        id: "3-4",
                        value: "SchoolList"
                    },
                ]
            },
            {
                title: "常用组件",
                icon: <RightCircleFilled />,
                active: true,
                id: "4",
                list: [
                    {
                        text: "横幅图",
                        icon: <AreaChartOutlined />,
                        id: "4-1",
                        value: "Banner"
                    },
                    {
                        text: "段落",
                        icon: <AlignLeftOutlined />,
                        id: "4-2",
                        value: "Paragraph"
                    },
                    {
                        text: "标题",
                        icon: <FontColorsOutlined />,
                        id: "4-3",
                        value: "Title"
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
            console.log(containerStatus.getState())
            if (!containerStatus.getState()) {//如果不是组件容器 就是往iframe页面中添加
                let iframe = document.getElementById('iframe').contentWindow;
                iframe.PubSub.publish('addComponent', { component: value, info: switchComponentInfo(value) });
                return;
            }
            //添加进组件容器中
            PubSub.publish('addComponentContainer', { component: value, props: switchComponentInfo(value) });
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
