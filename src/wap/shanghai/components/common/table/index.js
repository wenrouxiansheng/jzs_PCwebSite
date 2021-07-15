import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types'

export default class Table extends Component {
    static propTypes = {
        data: PropTypes.shape({
            title: PropTypes.array.isRequired,
            body: PropTypes.isRequired
        })
    }

    state = {
        titleNode: null,
        bodyNode: null
    }

    loadingNode = () => {
        const { title, body } = this.props.data;

        let titleNode = null,
            bodyNode = null;


        titleNode = title.map((item, index) => {
            return <th key={index}> {item}</th >
        })
        bodyNode = body.map((item, index) => {
            return <tr key={index}>
                {
                    item.map((node, j) => {
                        return typeof node === 'object' ?
                            <td rowSpan={node.rowspan} dangerouslySetInnerHTML={{ __html: node.text }} key={j}></td>
                            :
                            <td dangerouslySetInnerHTML={{ __html: node }} key={j}></td>
                    })
                }
            </tr>
        })

        this.setState({
            titleNode,
            bodyNode
        })
    }

    componentDidMount() {
        this.loadingNode();
    }
    render() {
        const { titleNode, bodyNode } = this.state;
        if (!titleNode || !bodyNode) {
            return null
        }

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
