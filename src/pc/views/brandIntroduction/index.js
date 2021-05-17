import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { editingStatus } from '../../../store/store'
import { seekComponents } from '../../publicjs'
//品牌介绍 - 页面汇总管理
let getChangeComponent = null;
export default class brandIntroduction extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "www.baidu.com", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "品牌介绍", subTitle: "Brand Introduction" }
                }
            },
            {
                component: 'Exhibition',
                props: {
                    data: {
                        title: "中国艺术教育知名品牌  实现对自我的艺术追求",
                        text: "桔子树艺术教育，是中国艺术教育培训知名品牌。成立逾9年，总部位于北京市通州区万达广场A座，是集青少儿才艺培训、成人艺术培训、艺术课程研发、艺考辅导、企业服务、参赛培训等为一体的艺术教育培训综合体。",
                        number1: "01",
                        img: require('../../assets/homePage/banner/banner.jpg').default,
                        number2: "02"
                    }
                }
            },
            {
                component: 'Introduce',
                props: {
                    list: [
                        { subtitle: "办学规模", title: "强大的办学规模", text: '已开设<span class="color">18</span>家直营校区 （北京<span style="color: #f2aa46;">16</span>家，上海<span style="color: #f2aa46;">2</span>家） 总教学面积近<span style="color: #f2aa46;">35000</span>平米', img: require('../../assets/brandIntroduction/introduce/Picture1_03.png').default },
                        { subtitle: "师资力量", title: "雄厚的师资力量", text: '数百名全职专业教师，毕业于国内外专业艺术院校', img: require('../../assets/brandIntroduction/introduce/Picture2_03.png').default },
                        { subtitle: "教研团队", title: "专业的教研团队", text: '艺术培训行业专业的科学、系统、完善的课程研发团队', img: require('../../assets/brandIntroduction/introduce/Picture3_03.png').default },
                        { subtitle: "教学模式", title: "私人订制教学模式", text: '采用“私人订制教学模式”，一位学员、一份计划、一种方法', img: require('../../assets/brandIntroduction/introduce/Picture4_03.png').default },
                        { subtitle: "艺术综合体", title: "艺术培训综合体", text: '声乐、器乐、舞蹈、美术齐头并进，培养孩子综合素养', img: require('../../assets/brandIntroduction/introduce/Picture5_03.png').default },
                        { subtitle: "个性化教育", title: "个性化教育", text: '尊重学员个性差异，因材施教，为青少年提供适合的艺术教育', img: require('../../assets/brandIntroduction/introduce/Picture6_03.png').default },
                        { subtitle: "学员口碑", title: "良好的学员口碑", text: '九年累计培训数十万学员，许多新学员由老学员转介绍而来 ', img: require('../../assets/brandIntroduction/introduce/Picture7_03.png').default },
                    ]
                }
            },
            {
                component: 'ComponentContainer',
                props: {
                    components: [
                        {
                            component: 'Title',
                            props: {
                                info: { title: "快乐课堂", subTitle: "Happy Classroom" }
                            }
                        },
                        {
                            component: 'Paragraph',
                            props: {
                                text: "桔子树艺术开设的艺术课程全面，上课时间灵活有弹性。尤其是在少儿艺术教学中，引入<span style='color: #f2aa46'>“奥尔夫音乐教学法”</span>到课堂中，教学游戏化，使孩子们玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。",
                                style: {}
                            }
                        },
                        {
                            component: 'ZoomCarousel',
                            props: {
                                list: [
                                    { src: require('../../assets/brandIntroduction/classScene/swiper1.png').default },
                                    { src: require('../../assets/brandIntroduction/classScene/swiper2.png').default },
                                    { src: require('../../assets/brandIntroduction/classScene/swiper3.png').default },
                                    { src: require('../../assets/brandIntroduction/classScene/swiper4.png').default },
                                    { src: require('../../assets/brandIntroduction/classScene/swiper5.png').default },
                                ]
                            }
                        },
                    ]
                }
            }
        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            console.log(data)
            if (data.type !== 'brandIntroduction') {
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
        const { componentJson } = this.state
        return (
            <div>
                {
                    seekComponents(componentJson)
                }
            </div>
        )
    }
}
