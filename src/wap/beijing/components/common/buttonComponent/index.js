import React, { Component } from 'react'
import './style.scss'

export default class ButtonComponent extends Component {
    render() {
        const { list, style } = this.props
        return (
            <div className="Button_single" style={{...style}}>
                {
                    list.map((item, index) => {
                        return <button key={index}>{item}</button>
                    })
                }
            </div>
        )
    }
}
