import React, { Component } from 'react'
import './style.scss'

export default class QAList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="QAList" >
                {
                    list.map((item, index) => {
                        return <p key={index}>
                            <span>{item}</span>点击咨询 &gt;
                        </p>
                    })
                }
            </div>
        )
    }
}
