import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd';

import './style.scss'
import Title from '@components/homePage/title'
import teacher1 from '@assets/homePage/teacher/teacher1.png'
export default class teachersClassification extends Component {
    state = {
        teacherList: [
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
            { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/site/pc/aboutUs/teachers/detail" },
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
                <Title info={{ title: "师资力量", subTitle: "汇聚国内外艺术名师", bottom: "20" }} />
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
                    <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.pageChange} pageSize={15} showSizeChanger={false} />
                </div>
            </div>
        )
    }
}
