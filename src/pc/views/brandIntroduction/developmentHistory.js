import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { homePageMouseMove, throttle } from '../../publicjs'
import { editingStatus } from '../../../store/store'
import switchComponents from '@components/allComponents'//汇总的组件

//品牌介绍  - 历史历程
let getChangeComponent = null;
export default class developmentHistory extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "/", src: require("../../assets/brandIntroduction/introduce/banner.png").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "发展历程", subTitle: "Development Process" }
                }
            },
            {
                component: 'History',
                props: {
                    data: [
                        {
                            time: 2019,
                            info: [
                                { type: 'text', text: "1、3月20日，桔子树七周年庆典，七百余名教职员工在朝阳区蓝调薰衣草庄园共同庆祝" },
                                { type: 'text', text: "2、4月，中国舞蹈家协会授予桔子树艺术教育“中国舞蹈家协会《中国舞蹈考级》2018年度北京地区考级示范基地”" },
                                { type: 'text', text: "3、4月，桔子树艺术教育获得创业黑马主办的“2019黑马大赛教育产业赛决赛”亚军" },
                                { type: 'img', text: "05月 桔子树上海七宝校区成立", img: require('../../assets/brandIntroduction/history/school20_05.png').default },
                                { type: 'text', text: "4、6月，桔子树第三届金桔杯艺术大赛第三次被北京市文资办主办的第七届北京惠民文化消费季纳入“视听飨宴”板块。" },
                                { type: 'img', text: "07月 桔子树石景山校区成立", img: require('../../assets/brandIntroduction/history/school16_05.png').default },
                                { type: 'text', text: "5、7月，数百名桔子树学员在北京音乐厅录制CCTV《童心唱祖国》献礼祖国70周年" },
                                { type: 'text', text: "6、12月，先后荣获腾讯新闻2019知名素质教育品牌、百度文库2019素质教育行业杰出品牌、巨量引擎2019城市教育行业影响力机构等多项殊荣" },
                                { type: 'text', text: "2019年桔子树全国直营校区达18家（北京16家、上海2家）" },
                            ]
                        },
                        {
                            time: 2018,
                            info: [
                                { type: 'text', text: "1、4月，桔子树2018第二届金桔杯艺术大赛在朝阳区悠唐广场盛大启蒙！开启桔子树全年近二百场演出的序幕" },
                                { type: 'text', text: "2、桔子树救助基金、互助基金正式成立，并将第一笔五万元救助金捐助给通州校区的王迪老师" },
                                { type: 'text', text: "3、5月，桔子树通州校区喜迁新址" },
                                { type: 'img', text: "05月 桔子树安贞校区成立", img: require('../../assets/brandIntroduction/history/school14_05.png').default },
                                { type: 'img', text: "06月 桔子树管庄校区成立", img: require('../../assets/brandIntroduction/history/school15_05.png').default },
                                { type: 'img', text: "06月 桔子树上海大区陆家嘴校区成立", img: require('../../assets/brandIntroduction/history/school19_05.png').default },
                                { type: 'text', text: "位于上海市浦东新区浦东南路1138号上海湾301C，周边集中了地铁、公交、社区直通车等多种出行工具，交通极为便利" },
                                { type: 'text', text: "4、8月，桔子树第二届金桔杯艺术大赛再次被北京市文资办主办的第六届北京惠民文化消费季纳入“视听飨宴”板块。举办近百场大型演出比赛，为学员提供足够的展示舞台" },
                                { type: 'text', text: "5、9月，在北京市委宣传部、市文促进中心主办的2018北京文化创意大赛中，桔子树经过四轮路演角逐，从全国24个赛区3180个文创项目中脱颖而出，最终斩获全国总决赛二等奖" },
                                { type: 'text', text: "6、10月，桔子树第二届金桔杯艺术大赛总决赛隆重举行，从初赛到总决赛，线上专题点击突破500万人次，参赛节目1500多个，经过初赛、复赛、半决赛层层选拔，最终有22个舞蹈节目、14个器乐节目和39个歌唱节目，晋级总决赛。总决赛选手线上拉票，线上投票总人次超百万" },
                                { type: 'text', text: "7、12月，桔子树艺术教育荣获“通州文创产业人才提升计划活动之路演展示一等奖”" },
                                { type: 'text', text: "12月，桔子树七周年庆暨年终汇报演出拉开帷幕，北京15个校区上千个节目璀璨上演，桔子树用15场精彩演出为2018画上了圆满的句号" },
                                { type: 'text', text: "桔子树学员2018年在海外桃李杯国际舞蹈大赛、阳光灿灿花儿朵朵全国少儿舞蹈展演、李斯特杯香港国际钢琴公开赛、北京体育舞蹈锦标赛、“绚丽童年梦”第七届中华青少年艺术盛典等多项比赛中大放异彩，夺得金奖" },
                                { type: 'text', text: "2018全年桔子树有近2万名学员参加中国舞蹈家协会、国际舞蹈家协会、中国音乐学院、中央音乐学院、中国美术学院的社会考级，而且通过率达到99%以上。并连续多年作为中国舞蹈家协会中国舞考级指定考点" },
                            ]
                        },
                        {
                            time: 2017,
                            info: [
                                { type: 'text', text: "1、3月25日，桔子树受北京世鳌国际盛邀，参加“2017长跑”年会" },
                                { type: 'text', text: "2、3月28日，中国艺术教育培训行业优质APP桔子树上线" },
                                { type: 'img', text: "04月15日 桔子树磁器口校区成立", img: require('../../assets/brandIntroduction/history/school12_05.png').default },
                                { type: 'img', text: "04月16日 桔子树通州校区成立", img: require('../../assets/brandIntroduction/history/school13_05.png').default },
                                { type: 'text', text: "3、4月，由桔子树和郎园Vintage文化创意产业园区联合组办的“郎园艺起秀、轻奢慢生活”火热开幕！" },
                                { type: 'text', text: "4、4月22日，2017年中国舞蹈家协会中国舞蹈考级在桔子树公主坟校区、青年路校区拉开帷幕，23日考试圆满结束，累计考试人数达1000人！" },
                                { type: 'text', text: "5、5月18日，桔子树艺术教育代表北京市朝阳区教育企业，随朝阳区领导考察河北康保县、内蒙古卓资县，深入推进“对口艺术帮扶项目”" },
                                { type: 'text', text: "6、6月1日，桔子树携手家乐福，六一狂欢大趴引围观！" },
                                { type: 'text', text: "7、6月10日-11日，第13届世界华人青少年艺术节，桔子树小选手星光璀璨！" }
                            ]
                        },
                    ]
                }
            },
        ]
    }
    componentDidMount() {
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'history') {
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
    seekComponents = () => {
        const { componentJson } = this.state;
        //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗
        return componentJson.map((item, index) => {
            return <div className={`componentContainer ${editingStatus.getState() ? 'hoverBorder' : ''}`}
                onMouseMove={(editingStatus.getState() && item.component !== 'AddModule') ? throttle(homePageMouseMove(componentJson, 'history'), 300) : null}
                key={index} flag={index}>
                {switchComponents(item.component, item.props)}
            </div>
        })
    }
    render() {
        return (
            <div>
                {
                    this.seekComponents()
                }
            </div>
        )
    }
}
