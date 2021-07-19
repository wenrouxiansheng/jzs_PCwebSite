import React, { Component } from 'react'
import './style.scss'
import { CommentOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import CallIcon from '@material-ui/icons/Call';
export default class SuspensionTool extends Component {
    returnTop = (e) => {
        // 返回顶部
        e.stopPropagation();
        let top = window.pageYOffset,
            speed = 24;
        if (!top) return;
        let timer = setInterval(() => {
            top -= speed;
            if (top < speed) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                return;
            }
            if (top <= 0) {
                clearInterval(timer);
                return;
            }
            window.scrollTo(0, top)
        })
    }
    render() {
        return (
            <div className="suspensionTool">
                <div id="btnsh_udesk_im">
                    <CommentOutlined className="icon" />
                </div>
                <div>
                    <a href="tel:400-999-9127"><CallIcon className="icon" /></a>
                </div>
                <div onClick={this.returnTop}>
                    <VerticalAlignTopOutlined className="icon" />
                </div>
            </div>
        )
    }
}
