import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.scss'
import { Link } from 'react-router-dom'

export default class TabControl extends Component {
    static propTypes = PropTypes.array.isRequired
    

    render() {
        const { data, style } = this.props;
        const listNode = data.map((item, index) => {
            return item.address === 'service' ? 
             <div className="tabControl_li" key={index}>
                <div className="btnsh_udesk_im">
                    <div className="tabControl_bg">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="tabControl_text">{item.text}</div>
                </div>
            </div>
            :
            <div className="tabControl_li" key={index}>
                <Link to={item.address}>
                    <div className="tabControl_bg">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="tabControl_text">{item.text}</div>
                </Link>
            </div>
        })
        return (
            <div className="tabControl_main" style={{...style}}>
                {listNode}
            </div>
        )
    }
}
