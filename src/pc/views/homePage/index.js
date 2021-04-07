import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import DropDownPrompt from '@components/homePage/dropDownPrompt'
import switchComponents from '@components/allComponents'//汇总的组件
import { getParents, throttle } from '../../publicjs'

export default class homePage extends Component {
    state = {
        status: "",
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "www.baidu.com", src: require("../../assets/homePage/banner/homepage1.png").default },
                        { id: 2, adress: "www.baidu.com", src: require("../../assets/homePage/banner/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "为什么选择桔子树", subTitle: "Core advantages" }
                }
            },
            {
                component: 'ImgAndText',
                props: {
                    detail: { id: 1, title: "强大的办学规模", text: "已开设北京16家，上海2家，18家直营校区，总教学面积近35000平米", src: require("../../assets/homePage/imgText/inImg1.png").default, type: "left" }
                }
            },
            {
                component: 'ImgAndText',
                props: {
                    detail: { id: 2, title: "雄厚的师资力量", text: "数百名专业教师，毕业于国内外专业艺术院校", src: require("../../assets/homePage/imgText/inImg2.png").default, type: "right" },
                }
            },
            {
                component: 'ImgAndText',
                props: {
                    detail: { id: 3, title: "艺术培训综合体", text: "声乐、器乐、舞蹈、美术齐头并进，科学、系统、完善的课程研发团队", src: require("../../assets/homePage/imgText/inImg3.png").default, type: "left" }
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "校区环境展示", subTitle: "Core advantages" }
                }
            },
            {
                component: 'SchoolListImgText',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "开设课程", subTitle: "Offering courses" }
                }
            },
            {
                component: 'ListOfOptionsImg',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "艺考考级", subTitle: "汇聚国内外艺术名师" }
                }
            },
            {
                component: 'ExamLevelList',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "师资力量", subTitle: "汇聚国内外艺术名师" }
                }
            },
            {
                component: 'TeacherList',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "学员风采", subTitle: "桔子树STAR  闪耀中外" }
                }
            },
            {
                component: 'GloryList',
                props: {

                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "品牌荣誉", subTitle: "艺术教育素质品牌" }
                }
            },
            {
                component: 'BrandHonor',
                props: {

                }
            }
        ]
    }
    componentDidMount() {
        //组件挂载后监听滚轮
        window.addEventListener('scroll', this.bindHandleScroll);
    }
    homePageMouseMove = (e) => {
        const { componentJson } = this.state;
        //在编辑时调整右上角悬浮窗位置
        const target = getParents(e.target, 'componentContainer');

        if (!target || !target.parentNode) return;

        const num = target.parentNode.getAttribute('flag'),//选中组件的下标
            info = {
                display: 'block',
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                left: `${target.offsetLeft}px`,
                top: `${target.offsetTop}px`,
            },
            activeObjInfo = {
                num,
                componentJson,
                type: "homePage"
            }

        //更改悬浮窗位置
        PubSub.publish('changeSelection', info);

        //选中之后把页面的组件数据   以及选择的组件下标传到悬浮小窗口中
        PubSub.publish('changeActiveObj', activeObjInfo);
    }
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构
        return componentJson.map((item, index) => {
            return <div className="componentContainer" onMouseMove={window.self !== window.top ? throttle(this.homePageMouseMove, 300) : null} key={index} flag={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    bindHandleScroll = (event) => {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if (scrollTop > 4000) {
            this.setState({
                status: 'hidden'
            })
        }
    }
    componentWillUnmount() {
        //组件即将销毁后删除监听滚轮事件
        window.removeEventListener('scroll', this.bindHandleScroll);
        if (window.self !== window.top) {//判断是否被iframe嵌套 卸载监听
            window.removeEventListener('message', this.changeComponentState);
        }
    }
    render() {
        const { status } = this.state
        return (
            <div style={{ minHeight: '5313px' }}>
                <DropDownPrompt status={status} />
                {
                    this.seekComponents()
                }
            </div>
        )
    }
}