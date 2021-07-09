import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default class nav extends Component {
    line = React.createRef()
    state = {
        navList: [false, false, false, false, false, false, false, false, false],
        dataList: [
            {
                level1: "首页",
                adress: "/site/pc/home",
                type: '',
                level2: null,
                id: "nav1"
            },
            {
                level1: "品牌介绍",
                adress: '/site/pc/brandIntroduction',
                type: '',
                level2: [{ text: "发展历程", adress: "/site/pc/brandIntroduction/history", type: '' }, { text: "教研课程", adress: "/site/pc/brandIntroduction/course", type: '' }],
                id: "nav2"
            },
            {
                level1: "舞蹈培训",
                adress: "/site/pc/danceTraining",
                type: '',
                level2: [{ text: "少儿舞蹈", adress: "/site/pc/danceTraining/childrenDance", type: '' },
                { text: "成人舞蹈", adress: "/site/pc/danceTraining/adultDance", type: '' },
                { text: "民族舞", adress: "/site/pc/danceTraining/folkDance", type: '' },
                { text: "古典舞", adress: "/site/pc/danceTraining/classicalDance", type: '' },
                { text: "中国舞", adress: "/site/pc/danceTraining/chineseDance", type: '' },
                { text: "爵士舞", adress: "/site/pc/danceTraining/jazzDance", type: '' },
                { text: "芭蕾舞", adress: "/site/pc/danceTraining/balletDance", type: '' },
                { text: "拉丁舞", adress: "/site/pc/danceTraining/latinDance", type: '' },
                { text: "街舞", adress: "/site/pc/danceTraining/hipHop", type: '' },
                ],
                id: "nav3"
            },
            {
                level1: "声乐培训",
                adress: "/site/pc/vocalMusic",
                type: '',
                level2: [{ text: "少儿声乐", adress: "/site/pc/vocalMusic/childrenMusic", type: '' },
                { text: "成人声乐", adress: "/site/pc/vocalMusic/adultMusic", type: '' },
                { text: "流行唱法", adress: "/site/pc/vocalMusic/adult/popMusic", type: '' },
                { text: "民族唱法", adress: "/site/pc/vocalMusic/adult/folkSongs", type: '' },
                { text: "美声唱法", adress: "/site/pc/vocalMusic/adult/belCanto", type: '' },
                { text: "K歌训练营", adress: "/site/pc/vocalMusic/adult/karaokeCamp", type: '' }
                ],
                id: "nav4"
            },
            {
                level1: "器乐培训",
                adress: "/site/pc/instrumentalMusic",
                type: '',
                level2: [{ text: "少儿器乐", adress: "/site/pc/instrumentalMusic/children", type: '' },
                { text: "成人器乐", adress: "/site/pc/instrumentalMusic/adultIM", type: '' },
                { text: "钢琴", adress: "/site/pc/instrumentalMusic/piano", type: '' },
                { text: "吉他", adress: "/site/pc/instrumentalMusic/guitar", type: '' },
                { text: "架子鼓", adress: "/site/pc/instrumentalMusic/drumKit", type: '' },
                { text: "尤克里里", adress: "/site/pc/instrumentalMusic/ukulele", type: '' }
                ],
                id: "nav5"
            },
            {
                level1: "美术培训",
                adress: "/site/pc/fineArt",
                type: '',
                level2: [{ text: "少儿美术", adress: "/site/pc/fineArt/children", type: '' },
                { text: "成人美术", adress: "/site/pc/fineArt/adult", type: '' },
                { text: "素描", adress: "/site/pc/fineArt/pencilSketch", type: '' },
                { text: "油画", adress: "/site/pc/fineArt/oilPainting", type: '' },
                { text: "漫画", adress: "/site/pc/fineArt/caricature", type: '' },
                { text: "水粉", adress: "/site/pc/fineArt/gouache", type: '' },
                { text: "速写", adress: "/site/pc/fineArt/sketch", type: '' },
                { text: "国画", adress: "/site/pc/fineArt/chinesePainting", type: '' },
                ],
                id: "nav6"
            },
            {
                level1: "艺考考级",
                adress: "/site/pc/artGrading",
                type: '',
                level2: [{ text: "艺考舞蹈", adress: "/site/pc/artGrading/artExamDance", type: '' },
                { text: "艺考声乐", adress: "/site/pc/artGrading/artExamMusic", type: '' },
                { text: "艺考器乐", adress: "/site/pc/artGrading/artExamIM", type: '' },
                { text: "艺考美术", adress: "/site/pc/artGrading/artExamFineArts", type: '' },
                { text: "社会考级", adress: "/site/pc/artGrading/social", type: '' },
                { text: "特长考试", adress: "/site/pc/artGrading/specialty", type: '' },
                ],
                id: "nav7"
            },
            {
                level1: "关于我们",
                adress: '/site/pc/aboutUs/contactUs',
                type: '',
                level2: [
                    { text: "师资力量", adress: "/site/pc/aboutUs/teachers", type: '' },
                    { text: "学员风采", adress: "/site/pc/aboutUs/studentHonor", type: '' },
                    { text: "艺术头条", adress: "/site/pc/aboutUs/artNews", type: '' },
                    { text: "联系我们", adress: "/site/pc/aboutUs/contactUs", type: '' }
                ],
                id: "nav8"
            },
            {
                level1: "校区分布",
                adress: "/site/pc/campusDistribution",
                type: '',
                level2: null,
                id: "nav9"
            },
        ],
    }
    navMouseover = (e) => {
        //控制下划线滑动
        const { target: { className, nodeName }, target } = e;
        if (className !== 'line' && nodeName === 'LI') {
            let num = [].indexOf.call(target.parentNode.querySelectorAll('li'), target),
                left;
            if (num === 0) {
                left = 60;
            } else {
                left = 60 + (num * 130);
            }
            this.line.current.style.left = `${left}px`;

            //进入元素显示下拉
            const { navList } = this.state;
            navList[num] = true;
            this.setState({
                navList
            })
        }
    }
    navMouseleave = () => {
        //离开时二级导航全部高度设置为0
        this.setState({
            navList: [false, false, false, false, false, false, false, false, false]
        })
    }
    render() {
        const { navList, dataList } = this.state;
        const { routeType } = this.props;
        return (
            <nav className="horizontalPullDownNav">
                <ul onMouseOver={this.navMouseover}>
                    {
                        dataList.map((item, index) => {
                            return <li key={item.id} className={item.level2 ? 'pullDown' : ''} onMouseLeave={item.level2 ? this.navMouseleave : null}><Link to={item.adress} target={routeType ? '_self' : '_blank'}>{item.level1}</Link>
                                {item.level2 ?
                                    <div style={{ height: navList[index] ? `${(item.level2.length ?? 0) * 50}px` : '0px' }}>
                                        {
                                            item.level2.map((child, j) => {
                                                return <Link to={child.adress} target = { routeType? '_self': '_blank' } key={j}>{child.text}</Link>
                                            })
                                        }
                                    </div>
                                    : null}
                            </li>
                        })
                    }
                    <li className="line" ref={this.line}></li>
                </ul>
            </nav >
        )
    }
}
