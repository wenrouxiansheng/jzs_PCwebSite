import React, { Component } from 'react'
import './style.scss'

export default class ButtonComponent extends Component {
    render() {
        const { list, style } = this.props
        return (
            <div className="Button_single" style={{...style}}>
                {
                    list.map((item, index) => {
                        return <button className="btnsh_udesk_im" key={index}>{item}</button>
                    })
                }
            </div>
        )
    }
}
