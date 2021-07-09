import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        const { text, style } = this.props;
        return (
            <div style={{...style}} dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }
}
