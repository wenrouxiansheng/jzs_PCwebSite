import React, { Component } from 'react'
import './style.scss'
import { DoubleRightOutlined } from '@ant-design/icons';

export default class dropDownPrompt extends Component {
    render() {
        const { status } = this.props;
        console.log(status)
        return (
            <div className={`dropDownPrompt ${status}`}>
                <p>向下滑动</p>
                <DoubleRightOutlined rotate={90}/>
            </div>
        )
    }
}
