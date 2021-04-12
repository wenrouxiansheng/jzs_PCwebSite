import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './style.scss'


export default class titleEdit extends Component {
    changeTitle = (type) => {
        return (e) => {
            const { detail } = this.props;
            const { props: { info } } = detail[0];
            info[type] = e.target.value;
        }
    }
    changeData = () => {
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { detail } = this.props;
        const { props: { info: { title, subTitle } } } = detail[0];
        return (
            <div className="titleEdit" key={title}>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" placeholder="请输入标题" defaultValue={title} onChange={this.changeTitle('title')} /></label>
                </div>
                <div className="input_box">
                    <label><span>副标题：</span><input type="text" name="subTitle" placeholder="可选输入" defaultValue={subTitle} onChange={this.changeTitle('subTitle')} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData}>确认</button>
                </div>
            </div>
        )
    }
}
