import React, { Component } from 'react'
import './style.scss'

export default class table extends Component {
    render() {
        const { tableData: { list, title }, style } = this.props;
        return (
            <div className="dataTable" style={{ ...style }}>
                <table>
                    <thead>
                        <tr>
                            {
                                title.map((title, index) => {
                                    return <td key={index} dangerouslySetInnerHTML={{ __html: title }}></td>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return <tr key={index}>
                                    {
                                        item.map((obj, j) => {
                                            return <td rowSpan={obj.rowspan} dangerouslySetInnerHTML={{ __html: obj.text }} key={j}></td>
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