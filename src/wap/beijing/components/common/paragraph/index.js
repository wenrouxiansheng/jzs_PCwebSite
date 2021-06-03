import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        const { text, style } = this.props;
        return (
            <div style={{...style, lineHeight: '0.4rem'}} dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }
}
