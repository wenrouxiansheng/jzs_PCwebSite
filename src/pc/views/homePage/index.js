import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import DropDownPrompt from '@components/homePage/dropDownPrompt'
import { seekComponents } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import schoolJson from '../../components/campusDistribution/schoolList/schoolJson'


let getChangeComponent = null;
export default class homePage extends Component {
    state = {
        status: "",
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/homePage/banner/banner.jpg").default },
                        { id: 2, adress: "#", src: require("../../assets/homePage/banner/homepage2.png").default },
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
                    detail: { id: 1, title: "强大的办学规模", text: "已开设北京18家，上海2家，20家直营校区，总教学面积近40000平米", src: require("../../assets/homePage/imgText/inImg1.png").default, type: "left" }
                }
            },
            {
                component: 'ImgAndText',
                props: {
                    detail: { id: 2, title: "雄厚的师资力量", text: "数百名教师，毕业于国内外艺术院校", src: require("../../assets/homePage/imgText/inImg2.png").default, type: "right" },
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
                        smallList: schoolJson
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
                            level2: [{ text: "少儿舞蹈", adress: "/site/pc/danceTraining/childrenDance" }, { text: "成人舞蹈", adress: "/site/pc/danceTraining/adultDance" }],
                            imgList: [
                                { text: "民族舞", src: require('../../assets/danceTraining/adult/nav1.jpg').default, adress: "/site/pc/danceTraining/folkDance" },
                                { text: "古典舞", src: require('../../assets/danceTraining/adult/nav2.jpg').default, adress: "/site/pc/danceTraining/classicalDance" },
                                { text: "芭蕾舞", src: require('../../assets/danceTraining/adult/nav3.jpg').default, adress: "/site/pc/danceTraining/balletDance" },
                                { text: "中国舞", src: require('../../assets/danceTraining/adult/nav4.jpg').default, adress: "/site/pc/danceTraining/chineseDance" },
                                { text: "街舞", src: require('../../assets/danceTraining/adult/nav5.jpg').default, adress: "/site/pc/danceTraining/hipHop" },
                                { text: "爵士舞", src: require('../../assets/danceTraining/adult/nav6.jpg').default, adress: "/site/pc/danceTraining/jazzDance" },
                                { text: "拉丁舞", src: require('../../assets/danceTraining/adult/nav7.jpg').default, adress: "/site/pc/danceTraining/latinDance" },
                            ]
                        },
                        {
                            text: "声乐培训",
                            level2: [{ text: "少儿声乐", adress: "/site/pc/vocalMusic/childrenMusic" }, { text: "成人声乐", adress: "/site/pc/vocalMusic/adultMusic" }],
                            imgList: [
                                { text: "流行唱法", src: require('../../assets/music/nav5.jpg').default, adress: "/site/pc/vocalMusic/adult/popMusic" },
                                { text: "美声唱法", src: require('../../assets/music/adultMusic/nav2.jpg').default, adress: "/site/pc/vocalMusic/adult/belCanto" },
                                { text: "民族唱法", src: require('../../assets/music/adultMusic/nav3.jpg').default, adress: "/site/pc/vocalMusic/adult/folkSongs" },
                                { text: "童声", src: require('../../assets/music/childMusic/nav4.jpg').default, adress: "/site/pc/vocalMusic/child/musicTheory" },
                            ]
                        },
                        {
                            text: "器乐培训",
                            level2: [{ text: "少儿器乐", adress: "/site/pc/instrumentalMusic/children" }, { text: "成人器乐", adress: "/site/pc/instrumentalMusic/adultIM" }],
                            imgList: [
                                { text: "吉他", src: require('../../assets/instrumentalMusic/adult/nav1.jpg').default, adress: "/site/pc/instrumentalMusic/guitar" },
                                { text: "钢琴", src: require('../../assets/instrumentalMusic/adult/nav2.jpg').default, adress: "/site/pc/instrumentalMusic/piano" },
                                { text: "架子鼓", src: require('../../assets/instrumentalMusic/adult/nav3.jpg').default, adress: "/site/pc/instrumentalMusic/drumKit" },
                                { text: "尤克里里", src: require('../../assets/instrumentalMusic/adult/nav4.jpg').default, adress: "/site/pc/instrumentalMusic/ukulele" },
                            ]
                        },
                        {
                            text: "美术培训",
                            level2: [{ text: "少儿美术", adress: "/site/pc/fineArt/children" }, { text: "成人美术", adress: "/site/pc/fineArt/adult" }],
                            imgList: [
                                { text: "素描", src: require('../../assets/fineArt/nav1.jpg').default, adress: "/site/pc/fineArt/pencilSketch" },
                                { text: "速写", src: require('../../assets/fineArt/nav2.jpg').default, adress: "/site/pc/fineArt/sketch" },
                                { text: "油画", src: require('../../assets/fineArt/nav3.jpg').default, adress: "/site/pc/fineArt/oilPainting" },
                                { text: "水粉", src: require('../../assets/fineArt/nav4.jpg').default, adress: "/site/pc/fineArt/gouache" },
                                { text: "漫画", src: require('../../assets/fineArt/nav5.jpg').default, adress: "/site/pc/fineArt/caricature" },
                                { text: "国画", src: require('../../assets/fineArt/nav6.jpg').default, adress: "/site/pc/fineArt/chinesePainting" },
                                { text: "创意美术", src: require('../../assets/fineArt/nav7.jpg').default, adress: "/site/pc/fineArt/creativeArt" },
                            ]
                        },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "艺考考级", subTitle: "汇聚国内外艺术院校师资力量" }
                }
            },
            {
                component: 'ExamLevelList',
                props: {
                    list: [
                        { src: require('../../assets/homePage/examLevelList/dance.png').default, text: "舞蹈考级", subText: "DANCE DISTINCTION", adress: "/site/pc/artGrading/artExamDance" },
                        { src: require('../../assets/homePage/examLevelList/music.png').default, text: "声乐考级", subText: "VOCAL MUSIC EMPLOYS", adress: "/site/pc/artGrading/artExamMusic" },
                        { src: require('../../assets/homePage/examLevelList/instrumentalMusic.png').default, text: "器乐考级", subText: "INSTRUMENTAL MUSIC", adress: "/site/pc/artGrading/artExamIM" },
                        { src: require('../../assets/homePage/examLevelList/art.png').default, text: "美术考级", subText: "FINE ARTS", adress: "/site/pc/artGrading/artExamFineArts" },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "师资力量", subTitle: "汇聚国内外艺术院校师资力量" }
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
                    data: [
                        [
                            { id: 1, src: require('../../assets/homePage/gloryList/perform1.png').default, title: "学员登各大电视台实践表演节目", detail: "桔子树学员多次受邀登上中央电视台、北京电视台等，在绚丽的舞台上，将才艺尽情展现" },
                            { id: 2, src: require('../../assets/homePage/gloryList/perform2.png').default, title: "“青春风采”国际青少年艺术节开幕式", detail: "桔子树学员登上亮相国家级艺术殿堂——北京音乐厅，绽放青春风采" },
                        ],
                        [
                            { id: 3, src: require('../../assets/homePage/gloryList/perform1.png').default, title: "炫丽童年梦艺术大赛", detail: "桔子树学员受关工委邀请参加全国总决赛，登上国家大剧院舞台" },
                            { id: 4, src: require('../../assets/homePage/gloryList/perform2.png').default, title: "世界华人青少年艺术节", detail: "桔子树学员在北京选拔赛、马来西亚吉隆坡总决赛中大放异彩" },
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
                        { img: require('../../assets/homePage/brandHonor/list2.png').default, text: "直营校区覆盖北京、上海", font: ["20", "家"] },
                        { img: require('../../assets/homePage/brandHonor/list3.png').default, text: "专业课程精心设计", font: ["数百", "种"] },
                        { img: require('../../assets/homePage/brandHonor/list4.png').default, text: "学员信赖选择", font: ["数十", "万"] },
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
        const { status, componentJson } = this.state;
        return (
            <div style={{ minHeight: '5313px' }}>
                <DropDownPrompt status={status} />
                {
                    seekComponents(componentJson,'homePage')
                }
            </div>
        )
    }
}