import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import DropDownPrompt from '@components/homePage/dropDownPrompt'
import switchComponents from '@components/allComponents'//汇总的组件
import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'

let getChangeComponent = null;
export default class homePage extends Component {
    state = {
        status: "",
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/homePage/banner/homepage1.png").default },
                        { id: 2, adress: "/", src: require("../../assets/homePage/banner/banner.jpg").default },
                        { id: 3, adress: "/", src: require("../../assets/homePage/banner/homepage2.png").default },
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
                    list: {
                        src: require('../../assets/homePage/schoolList/schoolBanner.png').default,
                        title: "桔子树——中国艺术教育素质教育品牌",
                        smallList: [
                            {
                                src: require('../../assets/homePage/schoolList/school1.jpg').default,
                                name: "通州校区",
                                tel: "400-900-8898"
                            },
                            {
                                src: require('../../assets/homePage/schoolList/school2.jpg').default,
                                name: "大望路校区",
                                tel: "400-900-8898"
                            },
                            {
                                src: require('../../assets/homePage/schoolList/school3.jpg').default,
                                name: "中关村校区",
                                tel: "400-900-8898"
                            },
                            {
                                src: require('../../assets/homePage/schoolList/school3.jpg').default,
                                name: "中关村校区",
                                tel: "400-900-8898"
                            },
                            {
                                src: require('../../assets/homePage/schoolList/school3.jpg').default,
                                name: "中关村校区",
                                tel: "400-900-8898"
                            },
                        ]
                    }
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
                    list: [
                        {
                            text: "舞蹈培训",
                            level2: [{ text: "少儿舞蹈", adress: "/" }, { text: "成人舞蹈", adress: "/" }],
                            active: true,
                            imgList: [
                                { text: "民族舞0", src: require('../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "/" },
                                { text: "古典舞", src: require('../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "/" },
                                { text: "中国舞", src: require('../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "/" },
                                { text: "舞", src: require('../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "/" },
                            ]
                        },
                        {
                            text: "声乐培训",
                            level2: [{ text: "少儿声乐", adress: "/" }, { text: "成人声乐", adress: "/" }],
                            active: false,
                            imgList: [
                                { text: "民族舞1", src: require('../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "/" },
                                { text: "古典舞", src: require('../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "/" },
                                { text: "中国舞", src: require('../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "/" },
                            ]
                        },
                        {
                            text: "器乐培训",
                            level2: [{ text: "少儿器乐", adress: "/" }, { text: "成人器乐", adress: "/" }],
                            active: false,
                            imgList: [
                                { text: "民族舞2", src: require('../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "/" },
                                { text: "古典舞", src: require('../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "/" },
                                { text: "中国舞", src: require('../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "/" },
                                { text: "舞", src: require('../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "/" },
                            ]
                        },
                        {
                            text: "美术培训",
                            level2: [{ text: "少儿美术", adress: "/" }, { text: "成人美术", adress: "/" }],
                            active: false,
                            imgList: [
                                { text: "民族舞3", src: require('../../assets/homePage/listOfOptionsImg/dance1.png').default, adress: "/" },
                                { text: "古典舞", src: require('../../assets/homePage/listOfOptionsImg/dance2.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance3.png').default, adress: "/" },
                                { text: "中国舞", src: require('../../assets/homePage/listOfOptionsImg/dance4.png').default, adress: "/" },
                                { text: "舞", src: require('../../assets/homePage/listOfOptionsImg/dance5.png').default, adress: "/" },
                                { text: "芭蕾舞", src: require('../../assets/homePage/listOfOptionsImg/dance6.png').default, adress: "/" },
                            ]
                        },
                    ]
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
                    list: [
                        { src: require('../../assets/homePage/examLevelList/dance.png').default, text: "舞蹈考级", subText: "DANCE DISTINCTION", adress: "/" },
                        { src: require('../../assets/homePage/examLevelList/music.png').default, text: "声乐考级", subText: "VOCAL MUSIC EMPLOYS", adress: "/" },
                        { src: require('../../assets/homePage/examLevelList/instrumentalMusic.png').default, text: "器乐考级", subText: "INSTRUMENTAL MUSIC", adress: "/" },
                        { src: require('../../assets/homePage/examLevelList/art.png').default, text: "美术考级", subText: "FINE ARTS", adress: "/" },
                    ]
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
                    list: [
                        {
                            info: [
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵1", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher2.png').default, name: "余子涵2", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher3.png').default, name: "余子涵3", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher4.png').default, name: "余子涵4", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher5.png').default, name: "余子涵5", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                            ]
                        },
                        {
                            info: [
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                                { img: require('../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                            ]
                        },
                    ]
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
                    data: [
                        [
                            { id: 1, src: require('../../assets/homePage/gloryList/perform1.png').default, title: "桔子树4岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                            { id: 2, src: require('../../assets/homePage/gloryList/perform2.png').default, title: "桔子树5岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                        ],
                        [
                            { id: 3, src: require('../../assets/homePage/gloryList/perform1.png').default, title: "桔子树6岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                            { id: 4, src: require('../../assets/homePage/gloryList/perform2.png').default, title: "桔子树7岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                        ]
                    ]
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
                    list: [
                        [
                            { img: require('../../assets/homePage/brandHonor/glory1.png').default, detail: "2018北京文化创意大赛 全国总决赛二等奖" },
                            { img: require('../../assets/homePage/brandHonor/glory2.png').default, detail: "2018通州文创产业人才提升计划路演展示一等奖" },
                            { img: require('../../assets/homePage/brandHonor/glory3.png').default, detail: "2018世界移动互联网大会最具品牌影响力企业" },
                            { img: require('../../assets/homePage/brandHonor/glory4.png').default, detail: "百度教育2017年度教育行业典范" },
                            { img: require('../../assets/homePage/brandHonor/glory5.png').default, detail: "网易教育2014年度最具影响力教育集团" },
                        ],
                        [
                            { img: require('../../assets/homePage/brandHonor/glory6.png').default, detail: "腾讯大燕网京津冀十佳教育辅导机构" },
                        ]
                    ],
                    introduceList: [
                        { img: require('../../assets/homePage/brandHonor/list1.png').default, text: "艺术教育培训经验", font: ["9", "年"] },
                        { img: require('../../assets/homePage/brandHonor/list2.png').default, text: "直营校区覆盖北京、上海", font: ["18", "家"] },
                        { img: require('../../assets/homePage/brandHonor/list3.png').default, text: "专业课程精心设计", font: ["88", "种"] },
                        { img: require('../../assets/homePage/brandHonor/list4.png').default, text: "学员信赖选择", font: ["40", "余万"] },
                    ]
                }
            }
        ]
    }
    componentDidMount() {
        //组件挂载后监听滚轮
        window.addEventListener('scroll', this.bindHandleScroll);
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'homePage') {
                window.parent.PubSub.publish('operationMessage', {
                    message: '组件名不对应',
                    type: 'error'
                });
                return false;
            }
            this.setState({
                componentJson: data.componentJson
            })
            window.parent.PubSub.publish('operationMessage', {
                message: '修改成功',
                type: 'success'
            })
        });
    }
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'homePage'), 300) : null}
                key={index} flag={index}>
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
        PubSub.unsubscribe(getChangeComponent);
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