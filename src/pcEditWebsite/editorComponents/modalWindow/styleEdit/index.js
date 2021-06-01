import React, { Component } from 'react'
import './style.scss'
import PubSub from 'pubsub-js'

export default class styleEdit extends Component {
    state = {
    }
    changeMarginStyle = (unit) => {
        return (e) => {
            const { props } = this.props.detail[0];
            const { name, value } = e.target;

            if (!props?.style) props.style = {};

            props.style[name] = (value || 0) + unit;

            PubSub.publish('revisedDataList', this.props.detail);
        }
    }
    inputDefaultValue(type) {
        const { detail } = this.props;
        if (!detail) return '' //第一次props为null返回空值

        if (detail) {
            const { props: { style } } = detail[0];
            if (!style) return ''//没有设置过style

            let str = style[type]
            if (!str) return ''//style中没有该样式值返回空值

            let val = str.split('px')
            if (val.length > 1) return parseInt(val[0]);
            else return style[type]
        }
    }
    render() {
        const { detail } = this.props;
        return (
            <div className="styleEdit" key={detail ? detail[1] : null}>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置外边距</span></label>
                </div>
                <div className="input_box">
                    <label><span>上方：</span><input type="number" name="marginTop" placeholder="请输入" onChange={this.changeMarginStyle("px")}
                        defaultValue={this.inputDefaultValue('marginTop')} /></label>
                </div>
                <div className="input_box">
                    <label><span>下方：</span><input type="number" name="marginBottom" placeholder="请输入" onChange={this.changeMarginStyle("px")}
                        defaultValue={this.inputDefaultValue('marginBottom')} /></label>
                </div>
                <div className="input_box">
                    <label><span>左侧：</span><input type="number" name="marginLeft" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('marginLeft')}/></label>
                </div>
                <div className="input_box">
                    <label><span>右侧：</span><input type="number" name="marginRight" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('marginRight')}/></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置内边距</span></label>
                </div>
                <div className="input_box">
                    <label><span>上方：</span><input type="number" name="paddingTop" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('paddingTop')}/></label>
                </div>
                <div className="input_box">
                    <label><span>下方：</span><input type="number" name="paddingBottom" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('paddingBottom')}/></label>
                </div>
                <div className="input_box">
                    <label><span>左侧：</span><input type="number" name="paddingLeft" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('paddingLeft')}/></label>
                </div>
                <div className="input_box">
                    <label><span>右侧：</span><input type="number" name="paddingRight" placeholder="请输入" onChange={this.changeMarginStyle("px")} 
                     defaultValue={this.inputDefaultValue('paddingRight')}/></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>设置背景颜色</span></label>
                </div>
                <div className="input_box">
                    <label><span>十六进制码：</span><input type="text" name="backgroundColor" placeholder="请输入" defaultValue={this.inputDefaultValue('backgroundColor')} onChange={this.changeMarginStyle("")} /></label>
                </div>
            </div>
        )
    }
}
