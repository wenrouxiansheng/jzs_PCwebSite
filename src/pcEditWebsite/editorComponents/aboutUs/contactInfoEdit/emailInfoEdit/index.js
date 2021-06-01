import React, { Component } from 'react'

export default class emailInfoEdit extends Component {
    cahngeText = (type) => {
        return (e) => {
            const { emailInfo } = this.props;
            emailInfo[type] = e.target.value
            this.setState({});
        }
    }
    render() {
        const { emailInfo } = this.props;
        return (
            <div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" defaultValue={emailInfo.title} placeholder="请输入文字" onChange={this.cahngeText("title")} /></label>
                </div>
                <div className="input_box">
                    <label><span>副标题：</span><input type="text" name="subTitle" defaultValue={emailInfo.subTitle} placeholder="请输入文字" onChange={this.cahngeText("subTitle")} /></label>
                </div>
                <div className="input_box">
                    <label><span>地址：</span><input type="text" name="subTitle" defaultValue={emailInfo.email} placeholder="请输入文字" onChange={this.cahngeText("email")} /></label>
                </div>
            </div>
        )
    }
}
