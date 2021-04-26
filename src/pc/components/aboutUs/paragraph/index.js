import React, { Component } from 'react'

export default class paragraph extends Component {
    render() {
        const { style, text } = this.props;
        return (
            <div className="paragraph" style={style}>
                {text}
            </div>
        )
    }
}
