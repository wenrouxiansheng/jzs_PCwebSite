import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.scss'

export default class TabControl extends Component {
    static propTypes = PropTypes.array.isRequired
    

    render() {
        const { data } = this.props;
        const listNode = data.map((item, index) => {
            return <div className="tabControl_li" key={index}>
                <a href={item.address}>
                    <div className="tabControl_bg">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="tabControl_text">{item.text}</div>
                </a>
            </div>
        })
        return (
            <div className="tabControl_main">
                {listNode}
            </div>
        )
    }
}
