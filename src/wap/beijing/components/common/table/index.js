import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types'

export default class Table extends Component {
    static propTypes = {
        data: PropTypes.shape({
            title: PropTypes.array.isRequired,
            body: PropTypes.array.isRequired
        })
    }
    render() {
        const { title, body } = this.props.data;

        const titleNode = title.map((item, index) => {
            return <th key={index}> {item}</th >
        })
        const bodyNode = body.map((item, index) => {
            return <tr key={index}>
                {
                    item.map((node, j) => {
                        return <td dangerouslySetInnerHTML={{ __html: node }} key={j}></td>
                    })
                }
            </tr>
        })

        return (
            <table cellPadding="0" cellSpacing="0" className="table" >
                <thead>
                    <tr>
                        {titleNode}
                    </tr>
                </thead>
                <tbody>
                    {bodyNode}
                </tbody>
            </table>
        )
    }
}
