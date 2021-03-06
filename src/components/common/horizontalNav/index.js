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
                adress: '/home',
                type: '',
                level2: null,
                id: "nav1"
            },
            {
                level1: "品牌介绍",
                adress: 'www.baidu.com',
                type: '_blank',
                level2: [{ text: "发展历程", adress: "/brandIntroduction/history", type: '_blank' }, { text: "教研课程", adress: "/brandIntroduction/course", type: '_blank' }],
                id: "nav2"
            },
            {
                level1: "舞蹈培训",
                adress: '/danceTraining',
                type: '_blank',
                level2: [{ text: "少儿舞蹈", adress: "/danceTraining/childrenDance", type: '_blank' },
                { text: "教研课程", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "成人舞蹈", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "民族舞", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "古典舞", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "爵士舞", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "芭蕾舞", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "拉丁舞", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "街舞", adress: "/danceTraining/hipHop", type: '_blank' },
                ],
                id: "nav3"
            },
            {
                level1: "声乐培训",
                adress: '/danceTraining',
                type: '_blank',
                level2: [{ text: "少儿声乐", adress: "/danceTraining/childrenDance", type: '_blank' },
                { text: "成人声乐", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "流行唱法", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "民族唱法", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "通俗唱法", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "美声唱法", adress: "/brandIntroduction/course", type: '_blank' }
                ],
                id: "nav4"
            },
            {
                level1: "器乐培训",
                adress: '/danceTraining',
                type: '_blank',
                level2: [{ text: "少儿器乐", adress: "/danceTraining/childrenDance", type: '_blank' },
                { text: "成人器乐", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "钢琴", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "吉他", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "架子鼓", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "尤克里里", adress: "/brandIntroduction/course", type: '_blank' }
                ],
                id: "nav5"
            },
            {
                level1: "美术培训",
                adress: '/danceTraining',
                type: '_blank',
                level2: [{ text: "少儿美术", adress: "/danceTraining/childrenDance", type: '_blank' },
                { text: "成人美术", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "素描", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "油画", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "漫画", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "水彩", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "速写", adress: "/brandIntroduction/course", type: '_blank' },
                ],
                id: "nav6"
            },
            {
                level1: "艺考考级",
                adress: '/danceTraining',
                type: '_blank',
                level2: [{ text: "艺考舞蹈", adress: "/danceTraining/childrenDance", type: '_blank' },
                { text: "艺考声乐", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "艺考器乐", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "社会考级", adress: "/brandIntroduction/course", type: '_blank' },
                { text: "特长考试", adress: "/brandIntroduction/course", type: '_blank' }
                ],
                id: "nav7"
            },
            {
                level1: "关于我们",
                adress: '/asdsd',
                type: '_blank',
                level2: [
                    { text: "师资力量", adress: "/danceTraining/childrenDance", type: '_blank' },
                    { text: "学员风采", adress: "/brandIntroduction/course", type: '_blank' },
                    { text: "艺术头条", adress: "/brandIntroduction/course", type: '_blank' },
                    { text: "联系我们", adress: "/brandIntroduction/course", type: '_blank' }
                ],
                id: "nav8"
            },
            {
                level1: "校区分布",
                adress: '/campusDistribution',
                type: '_blank',
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
        }
    }
    navMouseenter = (num) => {
        //进入时二级导航高度设置为子元素*50  设置为true
        return () => {
            const { navList } = this.state;
            let ary = navList.map((item, index) => {
                if (num === index) return true;
                return item;
            })
            this.setState({
                navList: ary
            })
        }
    }
    navMouseleave = (num) => {
        //离开时二级导航全部高度设置为0
        return () => {
            this.setState({
                navList: [false, false, false, false, false, false, false, false, false]
            })
        }
    }
    render() {
        const { navList, dataList } = this.state;
        return (
            <nav className="horizontalPullDownNav">
                <ul onMouseOver={this.navMouseover}>
                    {
                        dataList.map((item, index) => {
                            return <li key={item.id} className={item.level2 ? 'pullDown' : ''} onMouseEnter={item.level2 ? this.navMouseenter(index) : null} onMouseLeave={item.level2 ? this.navMouseleave(index) : null}><Link to={item.adress} target={item.type}>{item.level1}</Link>
                                {item.level2 ?
                                    <div style={{ height: navList[index] ? `${item.level2.length * 50}px` : '0px' }}>
                                        {
                                            item.level2.map((child, j) => {
                                                return <Link to={child.adress} target={child.type} key={j}>{child.text}</Link>
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

/**
 *
 * <ul onMouseOver={this.navMouseover}>
                     <li><Link to="/home">首页</Link></li>
                    <li className="pullDown" onMouseEnter={null} onMouseLeave={this.navMouseleave(0)}><Link to="/brandIntroduction" target="_blank">品牌介绍</Link>
                        <div style={{ height: navList[0] ? '100px' : '0px' }}>
                            <Link to="/brandIntroduction/history" target="_blank">发展历程</Link>
                            <Link to="/brandIntroduction/course" target="_blank">教研课程</Link>
                        </div>
                    </li>
                    {this.changeDom()}
                    <li className="pullDown" onMouseEnter={this.navMouseenter(1)} onMouseLeave={this.navMouseleave(1)}><Link to="/danceTraining" target="_blank">舞蹈培训</Link>
                        <div style={{ height: navList[1] ? '400px' : '0px' }}>
                            <Link to="/danceTraining/childrenDance" target="_blank">少儿舞蹈</Link>
                            <a href="http://www.baidu.com">成人舞蹈</a>
                            <a href="http://www.baidu.com">民族舞</a>
                            <a href="http://www.baidu.com">古典舞</a>
                            <a href="http://www.baidu.com">爵士舞</a>
                            <a href="http://www.baidu.com">芭蕾舞</a>
                            <a href="http://www.baidu.com">拉丁舞</a>
                            <Link to="/danceTraining/hipHop">街舞</Link>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(2)} onMouseLeave={this.navMouseleave(2)}><a href="http://www.baidu.com">声乐培训</a>
                        <div style={{ height: navList[2] ? '300px' : '0px' }}>
                            <a href="http://www.baidu.com">少儿声乐</a>
                            <a href="http://www.baidu.com">成人声乐</a>
                            <a href="http://www.baidu.com">流行唱法</a>
                            <a href="http://www.baidu.com">民族唱法</a>
                            <a href="http://www.baidu.com">通俗唱法</a>
                            <a href="http://www.baidu.com">美声唱法</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(3)} onMouseLeave={this.navMouseleave(3)}><a href="http://www.baidu.com">器乐培训</a>
                        <div style={{ height: navList[3] ? '300px' : '0px' }}>
                            <a href="http://www.baidu.com">少儿器乐</a>
                            <a href="http://www.baidu.com">成人器乐</a>
                            <a href="http://www.baidu.com">钢琴</a>
                            <a href="http://www.baidu.com">吉他</a>
                            <a href="http://www.baidu.com">架子鼓</a>
                            <a href="http://www.baidu.com">尤克里里</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(4)} onMouseLeave={this.navMouseleave(4)}><a href="http://www.baidu.com">美术培训</a>
                        <div style={{ height: navList[4] ? '400px' : '0px' }}>
                            <a href="http://www.baidu.com">少儿美术</a>
                            <a href="http://www.baidu.com">成人美术</a>
                            <a href="http://www.baidu.com">素描</a>
                            <a href="http://www.baidu.com">油画</a>
                            <a href="http://www.baidu.com">水粉</a>
                            <a href="http://www.baidu.com">漫画</a>
                            <a href="http://www.baidu.com">水彩</a>
                            <a href="http://www.baidu.com">速写</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(5)} onMouseLeave={this.navMouseleave(5)}><a href="http://www.baidu.com">艺考考级</a>
                        <div style={{ height: navList[5] ? '250px' : '0px' }}>
                            <Link to="/artGrading/artExamDance" target="_blank">艺考舞蹈</Link>
                            <a href="http://www.baidu.com">艺考声乐</a>
                            <a href="http://www.baidu.com">艺考器乐</a>
                            <a href="http://www.baidu.com">社会考级</a>
                            <a href="http://www.baidu.com">特长考试</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(6)} onMouseLeave={this.navMouseleave(6)}>关于我们
                        <div style={{ height: navList[6] ? '200px' : '0px' }}>
                            <Link to="/teachers" target="_blank">师资力量</Link>
                            <Link to="/studentHonor" target="_blank">学员风采</Link>
                            <Link to="/artNews" target="_blank">艺术头条</Link>
                            <Link to="/contactUs" target="_blank">联系我们</Link>
                        </div>
                    </li>
                    <li><Link to="/campusDistribution" target="_blank">校区分布</Link></li>
                    <li className="line" ref={this.line}></li>
                </ul>
 *
 */