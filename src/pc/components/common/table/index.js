import React, { Component } from 'react'
import './style.scss'

export default class table extends Component {
    state = {
        style: null,
        tableData: null
    }

    componentDidMount() {
        const { tableData, style } = this.props;

        tableData.title.push('咨询');

        const list = tableData.list.map(item => {
            item.push({ rowspan: 1, text: "<span style='color: #FF8000' class='btnsh_udesk_im'>咨询详情</span>" })
            return item
        })
        tableData.list = list;

        this.setState({
            style,
            tableData
        })
    }

    render() {
        if (this.state.tableData === null) return null;

        const { tableData: { title, list }, style } = this.state;

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