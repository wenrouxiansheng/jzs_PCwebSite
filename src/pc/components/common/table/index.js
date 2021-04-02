import React, { Component } from 'react'
import './style.scss'

export default class table extends Component {
    render() {
        const { tableData } = this.props;
        return (
            <div className="dataTable">
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

            </div >
        )
    }
}