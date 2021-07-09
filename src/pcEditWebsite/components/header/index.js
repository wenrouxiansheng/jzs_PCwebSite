import React, { Component } from 'react'
import "./style.scss"


export default class editHeader extends Component {

    getHtml = () => {
        const iframe = document.getElementById('iframe');
        console.log(iframe)
    }

    render() {
        const { type } = this.props;
        return (
            <div className="editHeader">
                <div className="user">
                    <img src={require('../../assets/template/swiper1.png').default} alt="" />
                    <span>admin</span>
                </div>
                <div className="controller">
                    {type === 'edit' ? <button onClick={this.getHtml}>保存修改</button> : <span>退出登录</span>}
                </div>

            </div>
        )
    }
}