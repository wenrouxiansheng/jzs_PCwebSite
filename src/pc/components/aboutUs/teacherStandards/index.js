import React, { Component } from 'react'
import './style.scss'
import flag1 from '@assets/aboutUs/teachers/flag1.png'
import flag2 from '@assets/aboutUs/teachers/flag2.png'
import flag3 from '@assets/aboutUs/teachers/flag3.png'
import flag4 from '@assets/aboutUs/teachers/flag4.png'




export default class teacherStandards extends Component {
    state = {
        list: [
            {
                img: flag1, title: "海外知名艺术院校归国教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
            },
            {
                img: flag2, title: "国内专业艺术院校毕业教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
            },
            {
                img: flag3, title: "覆盖艺术学习多科目", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
            },
            {
                img: flag4, title: "丰富一线教学经验", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
            },
        ]
    }
    render() {
        const { list } = this.props?.list ? this.props : this.state;
        return (
            <div className="teacherStandards">
                {
                    list.map((item, index) => {
                        return <div key={index}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
