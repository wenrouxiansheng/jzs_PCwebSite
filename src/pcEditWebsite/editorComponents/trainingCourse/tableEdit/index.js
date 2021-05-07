import React, { Component } from 'react'
import './style.scss'

export default class tableEdit extends Component {
    stringData = () => {
        const { props: { tableData } } = this.props.detail[0];
        let str = JSON.stringify(tableData)
        return str;
    }
    render() {
        console.log(this.props)
        const { props: { tableData } } = this.props.detail[0];
        return (
            <div className="tableEdit">
                <table>
                    <thead>
                        <tr>
                            {
                                tableData.title.map((title, index) => {
                                    return <td key={index}>{title}</td>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.list.map((item, index) => {
                                return <tr key={index}>
                                    {
                                        item.row.map((list, j) => {
                                            return <td rowSpan={item.rowspan} dangerouslySetInnerHTML={{ __html: list }} key={j}></td>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </tbody>
                </table>
                <textarea defaultValue={this.stringData()}></textarea>
            </div>
        )
    }
}
