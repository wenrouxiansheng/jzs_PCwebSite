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
                            tableData.list.map((data, j) => {
                                return <tr key={j}>
                                    {
                                        data.map((list, k) => {
                                            return <td key={k} dangerouslySetInnerHTML={{ __html: list }}></td>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </tbody>
                </table>

            </div>
        )
    }
}
