import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd';

import './style.scss'
import Title from '@components/homePage/title'
export default class teachersClassification extends Component {
    state = {
        teacherList: [
            { img: require('../../../assets/aboutUs/teacher/teacher1.png').default, name: "许杨", duration: "9年", course: "童声、美声、民族、通俗唱法", adress: "/site/pc/aboutUs/teachers/detail/1" },
            { img: require('../../../assets/aboutUs/teacher/teacher2.png').default, name: "孙亚秋", duration: "4年", course: "儿童画，创意美术，水彩，水粉，素描，彩铅，油画", adress: "/site/pc/aboutUs/teachers/detail/2" },
            { img: require('../../../assets/aboutUs/teacher/teacher3.png').default, name: "孟繁颖", duration: "7年", course: "古典舞、芭蕾舞、民族民间舞、爵士舞、踢踏舞、肚皮舞", adress: "/site/pc/aboutUs/teachers/detail/3" },
            { img: require('../../../assets/aboutUs/teacher/teacher4.png').default, name: "任雅臣", duration: "5年", course: "流行唱法、美声唱法、民族唱法、音基", adress: "/site/pc/aboutUs/teachers/detail/4" },
            { img: require('../../../assets/aboutUs/teacher/teacher5.png').default, name: "向定军", duration: "5年", course: "架子鼓、架子鼓考级、少儿架子鼓", adress: "/site/pc/aboutUs/teachers/detail/5" },
            { img: require('../../../assets/aboutUs/teacher/teacher6.png').default, name: "李东伟", duration: "4年", course: "古典吉他，民谣吉他，电吉他，尤克里里", adress: "/site/pc/aboutUs/teachers/detail/6" },
            { img: require('../../../assets/aboutUs/teacher/teacher7.png').default, name: "张培佩", duration: "3年", course: "芭蕾舞、古典舞、民族民间舞、爵士舞、少儿舞蹈", adress: "/site/pc/aboutUs/teachers/detail/7" },
        ],
        category: 0,
        selectList: [
            { text: "全部", id: 0 },
            { text: "舞蹈", id: 1 },
            { text: "声乐", id: 2 },
            { text: "器乐", id: 3 },
            { text: "美术", id: 4 },
        ]
    }
    getCategoryTeacher = (type) => {
        return () => {
            console.log("您选择的教师类别 :", type)
            this.setState({
                category: type
            })
        }
    }
    pageChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }
    render() {
        const { teacherList, selectList, category } = this.state;
        const { style } = this.props;
        return (
            <div className="teachersClassification" style={{ ...style }}>
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术院校师资力量", bottom: "20" }} />
                <ul className="nav">
                    {
                        selectList.map((item, index) => {
                            return <li className={category === item.id ? 'active' : ''} onClick={this.getCategoryTeacher(item.id)} key={index}>{item.text}</li>
                        })
                    }
                </ul>
                <div className="teacherBox">
                    {
                        teacherList.map((item, index) => {
                            return <div className="teacher" key={index}>
                                <Link to={item.adress}>
                                    <img src={item.img} alt="" />
                                    <h3>{item.name}</h3>
                                    <p>
                                        <em>教龄</em>：<span>{item.duration}</span>
                                    </p>
                                    <p className="text">
                                        <em>教学课程</em>：<span>{item.course}</span>
                                    </p>
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div className="pagination">
                    <Pagination showQuickJumper defaultCurrent={1} total={teacherList.length} onChange={this.pageChange} pageSize={15} showSizeChanger={false} />
                </div>
            </div>
        )
    }
}
