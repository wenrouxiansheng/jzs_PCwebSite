import React, { Component } from 'react'
import './style.scss'

export default class nav extends Component {
    state = {
        left: 60
    }
    navSwitchClick = (e) => {
        const { switchSelected } = this.props;
        if (e.target.className !== 'line' && e.target.nodeName === 'LI') {
            let num = [].indexOf.call(e.currentTarget.children, e.target);
            switchSelected(num)
        }
    }
    render() {
        const { num } = this.props;
        return (
            <nav className="navEdit">
                <ul onClick={this.navSwitchClick}>
                    <li>标准模板</li>
                    <li>自定义编辑</li>
                    <li className="line" style={{ left: `${num === 0 ? '60' : 60 + (num * 120)}px` }}></li>
                </ul>
            </nav>
        )
    }
}
