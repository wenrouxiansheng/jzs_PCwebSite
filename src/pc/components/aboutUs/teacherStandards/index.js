import React, { Component } from 'react'
import './style.scss'




export default class teacherStandards extends Component {
    state = {
        list: [
            {
                img: require('../../../assets/aboutUs/teachers/flag1.png').default, title: "艺术培训综合体", text: "声乐、器乐、舞蹈、美术齐头并进，培养青少年综合素养"
            },
            {
                img: require('../../../assets/aboutUs/teachers/flag2.png').default, title: "雄厚的师资力量", text: "数百名专职教师，毕业于国内外艺术院校"
            },
            {
                img: require('../../../assets/aboutUs/teachers/flag3.png').default, title: "教研团队建设", text: "艺术培训行业科学、系统、完善的课程研发团队"
            },
            {
                img: require('../../../assets/aboutUs/teachers/flag4.png').default, title: "量身提供教学计划", text: "只属于你的课程计划，“一位学员、一份计划、一种方法”"
            },
        ]
    }
    render() {
        const { list, style } = this.props?.list ? this.props : this.state;
        return (
            <div className="teacherStandards" style={{ ...style }}>
                {
                    list.map((item, index) => {
                        return <div key={index}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <h1>{item.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        </div>
                    })
                }
            </div>
        )
    }
}
