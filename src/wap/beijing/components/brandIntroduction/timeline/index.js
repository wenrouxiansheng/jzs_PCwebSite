import React, { Component } from 'react'
import './style.scss'
import { Timeline } from 'antd';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import data from '../../../public/historyData'

console.log(data)

export default class TimelineComponent extends Component {
    render() {
        return (
            <div className="TimelineContainer">
                <Timeline>
                    <Timeline.Item>

                        <Accordion>
                            <AccordionSummary aria-controls="panel1a-content">
                                <Typography className="container">2020</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="content_text">
                                    1、1月4日，中央电视台CCTV14少儿频道《七巧板》播出了由桔子树艺术教育青年路校区的九位小学员表演的舞蹈《睡衣宝宝》<br />
                                    2、1月5日，晚上7:30黄金档，CCTV2央视财经《职场健康课》新年首播，桔子树磁器口校区学员梅弘力（梅姐），以及大望路校区舞蹈老师张震现场热舞，惊艳全场<br />
                                    3、3月，应对疫情停课期间，确保学员们在的艺术学习连贯性，让学员在安全的前提条件下，持续获得个性化、系统化的教学内容，并为线下学习的进阶做足准备，桔子树艺术教育执行“免费线上复课、停课不停学”。学员及家长与任课老师线上沟通，并制定相关的居家教学计划及练习内容，学员及家长将居家学习、练习的照片、视频发送任课老师，由任课老师对学员进行免费线上教学及指导<br />
                                    4、5-6月、因为疫情形势严峻，许多培训机构关门，而桔子树逆势发展，受到中国日报网、搜狐、网易、腾讯、凤凰网等多家媒体关注，桔子树总裁王军凯先生接受媒体采访，深度解析桔子树艺术教育逆势发展背后的生存之道。<br />
                                    5、7月，桔子树在线正式上线，在线直播教授声乐、舞蹈、吉他、美术等艺术课程，使得身处全国各地的学员足不出户就能享有优质的、专业的艺术教育资源，优秀的师资团队、专业全面的艺术课程，很快吸引了全国数百万学员的关注，桔子树成为线下线上融合发展的艺术教育培训综合体。<br />
                                    6、9月，桔子树艺术教育线下全面复课，七百余名教职员工全部返岗复工，桔子树强势归来。<br />
                                    7、11月，桔子树向优胜教育旗下综合素养品牌优胜派伸出援手，承接1000多名北京优胜派学员，向学员提供四百余万元的公益援助课程，积极践行企业的社会责任。<br />
                                    8、12月，桔子树艺术教育迎来9周岁生日，九年坚守、感恩信任！<br />
                                    9、12月20日，桔子树艺术教育近六百位学员登上北京广播电视台BTV科教《非常追梦》牛转乾坤春晚舞台，小学员们精彩的表演赢得多方赞誉，桔艺群星、闪耀新春！<br />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}
