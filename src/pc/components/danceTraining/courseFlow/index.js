import React, { Component } from 'react'
import './style.scss'

export default class courseFlow extends Component {

    data = {
        dance: [
            { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "完整体系测评，了解学员学习愿望" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专职教师，系统上课" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "量身提供“一对一教学计划”" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，实战训练" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "完成学习愿景" },
        ],
        music: [//虽然是重复的  主要为了避免以后会改声乐的学习流程
            { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "完整体系测评，了解学员学习愿望" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专职教师，系统上课" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "量身提供“一对一教学计划”" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "登台演出，实战训练" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "完成学习愿景" },
        ],
        instrumentalMusic: [
            { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "完整体系测评，了解学员学习愿望" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "量身提供“一对一教学计划”" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "学习基本五线谱、双手配合演奏" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "了解曲式形式分化、旋律演奏" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "实战训练，音乐情感诠释，极富表现力 完成学习愿景" },
        ],
        fineArt:[
            { img: require('../../../assets/danceTraining/childrenDance/dance_1.png').default, num: "01", text: "完整体系测评，了解学员学习愿望" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_2.png').default, num: "02", text: "匹配专职教师，系统上课" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_3.png').default, num: "03", text: "量身提供“一对一教学计划”" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_4.png').default, num: "04", text: "跟进学习进度，实战训练" },
            { img: require('../../../assets/danceTraining/childrenDance/dance_5.png').default, num: "05", text: "完成学习愿景" },
        ],
    }
    render() {
        const { type, style } = this.props;
        return (
            <div className="courseFlow" style={{ ...style }}>
                {
                    this.data[type].map((item, index) => {
                        return <div className="flowContainer" style={{ backgroundImage: `url(${item.img})` }} key={index}>
                            <p className="num">{item.num}</p>
                            <p className="text">{item.text}</p>
                        </div>
                    })
                }

            </div>
        )
    }
}