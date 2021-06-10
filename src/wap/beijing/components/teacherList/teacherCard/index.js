import React, { Component } from 'react'
import './style.scss'

export default class teacherCard extends Component {
    state = {
        data: [
            { name: "王晓玉", teachingYears: "5年", course: "古典舞、民族舞、芭蕾舞、拉丁舞、芭蕾形体等", img: require('../../../assets/teacherList/teacher1_05.png').default, address: "#" },
            { name: "许杨", teachingYears: "9年", course: "童声、美声、民族、通俗唱法", img: require('../../../assets/teacherList/teacher2_05.png').default, address: "#" },
            { name: "孙亚秋", teachingYears: "4年", course: "儿童画，创意美术，水彩，水粉，素描，彩铅，油画", img: require('../../../assets/teacherList/teacher3_05.png').default, address: "#" },
            { name: "孟繁颖", teachingYears: "7年", course: "古典舞、芭蕾舞、民族民间舞、爵士舞、踢踏舞、肚皮舞", img: require('../../../assets/teacherList/teacher4_05.png').default, address: "#" },
            { name: "任雅臣", teachingYears: "5年", course: "流行唱法、美声唱法、民族唱法、音基", img: require('../../../assets/teacherList/teacher5_05.png').default, address: "#" },
            { name: "向定军", teachingYears: "5年", course: "架子鼓、架子鼓考级、少儿架子鼓", img: require('../../../assets/teacherList/teacher6_05.png').default, address: "#" },
            { name: "李东伟", teachingYears: "4年", course: "古典吉他，民谣吉他，电吉他，尤克里里", img: require('../../../assets/teacherList/teacher7_05.png').default, address: "#" },
            { name: "张培佩", teachingYears: "3年", course: "芭蕾舞、古典舞、民族民间舞、爵士舞、少儿舞蹈", img: require('../../../assets/teacherList/teacher9.jpg').default, address: "#" },
        ]
    }
    render() {
        const { data } = this.state;

        const node = data.map((item, index) => {
            return <div className="CharacterIntroduction" key={index}>
                <a href={item.address}>
                    <img src={item.img} alt="" />
                    <div>
                        <h3>{item.name}</h3>
                        <p className="teachingYears">教龄：{item.teachingYears}</p>
                        <p className="course">教学课程：{item.course}</p>
                    </div>
                </a>
            </div>
        })

        return <>
            {node}
            <p className="loadMore">加载更多......</p>
        </>
    }
}
