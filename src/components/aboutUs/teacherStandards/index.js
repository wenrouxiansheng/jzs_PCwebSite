import React, { Component } from 'react'
import './style.scss'
import flag1 from '@assets/aboutUs/teachers/flag1.png'
import flag2 from '@assets/aboutUs/teachers/flag2.png'
import flag3 from '@assets/aboutUs/teachers/flag3.png'
import flag4 from '@assets/aboutUs/teachers/flag4.png'




export default class teacherStandards extends Component {
    render() {
        return (
            <div className="teacherStandards">
                <div>
                    <div className="img">
                        <img src={flag1} alt="" />
                    </div>
                    <h1>海外知名艺术院校归国教师</h1>
                    <p>此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述</p>
                </div>
                <div>
                    <div className="img">
                        <img src={flag2} alt="" />
                    </div>
                    <h1>国内专业艺术院校毕业教师</h1>
                    <p>此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述</p>
                </div>
                <div>
                    <div className="img">
                        <img src={flag3} alt="" />
                    </div>
                    <h1>覆盖艺术学习多科目</h1>
                    <p>此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述</p>
                </div>
                <div>
                    <div className="img">
                        <img src={flag4} alt="" />
                    </div>
                    <h1>丰富一线教学经验</h1>
                    <p>此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述</p>
                </div>
            </div>
        )
    }
}
