import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'


//品牌介绍教研课程
let getChangeComponent = null;
export default class curriculumPlan extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/brandIntroduction/course", src: require("../../assets/brandIntroduction/course/banner.png").default }
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "一位学员  一份计划  一种方法", subTitle: "" }
                }
            },
            {
                component: 'CurriculumPlan',
                props: {
                    data: [
                        {
                            id: 1, img: require('../../assets/brandIntroduction/course/class1.png').default, text: [
                                "桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树特别的新型教学模式——坚持实施<span style='color: #ffab32'>“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人订制教学计划”。"
                            ], type: 'left'
                        },
                        {
                            id: 2, img: require('../../assets/brandIntroduction/course/class2.png').default, text: [
                                "经过几十万次实战调整和总结，使桔子树<span style='color: #ffab32'>“私人订制教学计划”</span>的教学模式、方法、体系不断完善、创新，从而摆脱了传统艺术教育在教学模式与方法上，因学院化导致的“单一死板”的缺点。",
                                "只要学员选择了桔子树，无论学员选择的是一对一课程，还是多人集体课程，学员在桔子树所享受到的，不仅仅是一位老师提供的教学服务，而是桔子树整个团队体系为一位学员所提供和制定的全方位的“针对性教学服务”。"
                            ], type: 'right'
                        },
                        {
                            id: 3, img: require('../../assets/brandIntroduction/course/class3.png').default, text: [
                                "桔子树艺术开设艺术课程全面，上课时间灵活有弹性。",
                                "尤其是在少儿艺术教学中，引入“奥尔夫音乐教学法”到课堂中，教学游戏化，使孩子们在玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。"
                            ], type: 'left'
                        },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "品牌荣誉", subTitle: "汇聚国内外艺术名师" }
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
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'curriculumPlan') {
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
    componentWillUnmount() {
        PubSub.unsubscribe(getChangeComponent);
    }
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'curriculumPlan')
                }
            </div>
        )
    }
}
