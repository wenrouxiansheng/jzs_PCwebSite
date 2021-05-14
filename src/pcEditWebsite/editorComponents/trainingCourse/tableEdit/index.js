import React, { Component } from 'react'
import './style.scss'

export default class tableEdit extends Component {
    state = {
        top: 0
    }
    stringData = () => {
        const { props: { tableData } } = this.props.detail[0];
        let str = JSON.stringify(tableData)
        return str;
    }
    trMouseLeave = (e) => {
        this.setState({
            top: e.currentTarget.offsetTop
        })
    }
    render() {
        const { props: { tableData } } = this.props.detail[0];
        const { top } = this.state;
        console.log(top)

        console.log(this.props)

        return (
            <div className="tableEdit">
                <div className="table_container">
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
                                    return <tr key={index} onMouseMove={this.trMouseLeave}>
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
                    <div className="addRow" style={{ top: `${top}px` }}>
                        asd
                    </div>
                </div>

                <textarea defaultValue={this.stringData()}></textarea>
            </div>
        )
    }
}
