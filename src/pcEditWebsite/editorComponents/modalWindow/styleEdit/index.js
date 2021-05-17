import React, { Component } from 'react'
import './style.scss'
import PubSub from 'pubsub-js'

export default class styleEdit extends Component {
    state = {
    }
    changeMarginStyle = (unit) => {
        return (e) => {
            const { name, value } = e.target;
            const { props } = this.props.detail[0];
            if (!props?.style) props.style = {};

            props.style[name] = (value || 0) + unit;

            console.log(props)
            PubSub.publish('revisedDataList', this.props.detail);
        }
    }
    render() {
        return (
            <div className="styleEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置外边距</span></label>
                </div>
                <div className="input_box">
                    <label><span>上方：</span><input type="number" name="marginTop" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>下方：</span><input type="number" name="marginBottom" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>左侧：</span><input type="number" name="marginLeft" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>右侧：</span><input type="number" name="marginRight" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置内边距</span></label>
                </div>
                <div className="input_box">
                    <label><span>上方：</span><input type="number" name="paddingTop" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>下方：</span><input type="number" name="paddingBottom" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>左侧：</span><input type="number" name="paddingLeft" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box">
                    <label><span>右侧：</span><input type="number" name="paddingRight" placeholder="请输入" onChange={this.changeMarginStyle("px")} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置背景颜色</span></label>
                </div>
                <div className="input_box">
                    <label><span>右侧：</span><input type="color" name="backgroundColor" placeholder="请输入" onChange={this.changeMarginStyle("")}/></label>
                </div>
            </div>
        )
    }
}
