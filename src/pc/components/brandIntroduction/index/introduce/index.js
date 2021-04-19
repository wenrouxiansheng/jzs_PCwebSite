import React, { Component } from 'react'
import './style.scss'
import picture1 from '@assets/brandIntroduction/introduce/Picture1_03.png'
import picture2 from '@assets/brandIntroduction/introduce/Picture2_03.png'
import picture3 from '@assets/brandIntroduction/introduce/Picture3_03.png'
import picture4 from '@assets/brandIntroduction/introduce/Picture4_03.png'
import picture5 from '@assets/brandIntroduction/introduce/Picture5_03.png'
import picture6 from '@assets/brandIntroduction/introduce/Picture6_03.png'
import picture7 from '@assets/brandIntroduction/introduce/Picture7_03.png'

export default class introduce extends Component {
    state = {
        list: [
            { subtitle: "办学规模", title: "强大的办学规模", text: '已开设<span class="color">18</span>家直营校区 （北京<span style="color: #f2aa46;">16</span>家，上海<span style="color: #f2aa46;">2</span>家） 总教学面积近<span style="color: #f2aa46;">35000</span>平米', img: picture1 },
            { subtitle: "师资力量", title: "雄厚的师资力量", text: '数百名全职专业教师，毕业于国内外专业艺术院校', img: picture2 },
            { subtitle: "教研团队", title: "专业的教研团队", text: '艺术培训行业专业的科学、系统、完善的课程研发团队', img: picture3 },
            { subtitle: "教学模式", title: "私人订制教学模式", text: '采用“私人订制教学模式”，一位学员、一份计划、一种方法', img: picture4 },
            { subtitle: "艺术综合体", title: "艺术培训综合体", text: '声乐、器乐、舞蹈、美术齐头并进，培养孩子综合素养', img: picture5 },
            { subtitle: "个性化教育", title: "个性化教育", text: '尊重学员个性差异，因材施教，为青少年提供适合的艺术教育', img: picture6 },
            { subtitle: "学员口碑", title: "良好的学员口碑", text: '九年累计培训数十万学员，许多新学员由老学员转介绍而来 ', img: picture7 },
        ]
    }
    render() {
        const { list } = this.props?.list ? this.props : this.state;
        return (
            <div className="introduce">
                <div className="listContainer">
                    {
                        list.map((item, index) => {
                            return <div key={index}>
                                <div className="text_box">
                                    <p><span className="title_flag">{item.subtitle}</span></p>
                                    <h3>{item.title}</h3>
                                    <span className="text" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                                </div>
                                <div className="img_box">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
