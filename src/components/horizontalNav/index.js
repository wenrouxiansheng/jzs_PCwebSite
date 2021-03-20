import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
export default class nav extends Component {
    line = React.createRef()
    state = {
        navList: [false, false, false, false, false, false, false],
        // dataList: [
        //     {
        //         level1: "首页",
        //         adress: 'www.baidu.com',
        //         level2: null,
        //     },
        //     {
        //         level1: "品牌介绍",
        //         adress: 'www.baidu.com',
        //         level2: [{ text: "发展历程", adress: "www.baidu.com" }, { text: "教研课程", adress: "www.baidu.com" }],
        //     }
        // ],
    }
    navMouseover = (e) => {
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
        return () => {
            this.setState({
                navList: [false, false, false, false, false, false, false]
            })
        }
    }

    render() {
        const { navList } = this.state;
        return (
            <nav className="horizontalPullDownNav">
                <ul onMouseOver={this.navMouseover}>
                    <li><Link to="/home">首页</Link></li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(0)} onMouseLeave={this.navMouseleave(0)}><Link to="/BrandIntroduction">首页</Link>
                        <div style={{ height: navList[0] ? '100px' : '0px' }}>
                            <a href="http://www.baidu.com">发展历程</a>
                            <a href="http://www.baidu.com">教研课程</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(1)} onMouseLeave={this.navMouseleave(1)}><a href="http://www.baidu.com">舞蹈培训</a>
                        <div style={{ height: navList[1] ? '400px' : '0px' }}>
                            <a href="http://www.baidu.com">少儿舞蹈</a>
                            <a href="http://www.baidu.com">成人舞蹈</a>
                            <a href="http://www.baidu.com">民族舞</a>
                            <a href="http://www.baidu.com">古典舞</a>
                            <a href="http://www.baidu.com">爵士舞</a>
                            <a href="http://www.baidu.com">芭蕾舞</a>
                            <a href="http://www.baidu.com">拉丁舞</a>
                            <a href="http://www.baidu.com">街舞</a>
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
                            <a href="http://www.baidu.com">艺考舞蹈</a>
                            <a href="http://www.baidu.com">艺考声乐</a>
                            <a href="http://www.baidu.com">艺考器乐</a>
                            <a href="http://www.baidu.com">社会考级</a>
                            <a href="http://www.baidu.com">特长考试</a>
                        </div>
                    </li>
                    <li className="pullDown" onMouseEnter={this.navMouseenter(6)} onMouseLeave={this.navMouseleave(6)}><a href="http://www.baidu.com">关于我们</a>
                        <div style={{ height: navList[6] ? '200px' : '0px' }}>
                            <a href="http://www.baidu.com">师资力量</a>
                            <a href="http://www.baidu.com">学员风采</a>
                            <a href="http://www.baidu.com">艺术头条</a>
                            <a href="http://www.baidu.com">联系我们</a>
                        </div>
                    </li>
                    <li><a href="http://www.baidu.com">校区分布</a></li>
                    <li className="line" ref={this.line}></li>
                </ul>
            </nav>

        )
    }
}