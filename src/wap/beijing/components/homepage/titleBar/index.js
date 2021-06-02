import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './style.scss'

export default class TitleBar extends Component {
    static propTypes = {
        data: PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.object.isRequired,
            linkList: PropTypes.array,
            rightLink: PropTypes.object,
            subtitle: PropTypes.string
        })
    }
    render() {
        const { data: { icon, title, linkList, rightLink, subtitle } } = this.props;
        if (linkList && linkList.length > 2) return <div>副链接不超过2个</div>;

        return (
            <div className="TitleBar">
                <div className="tabControl_icon">
                    <img src={icon} alt="" /></div>
                <div className="tabControl_title">
                    <Link to={title.address}>{title.text}</Link>
                </div>
                <div className="tabControl_subhead">
                    {linkList ?
                        linkList.map((item, index) => {
                            return <Link to={item.address} target={'_self'} key={index}>{item.text}&gt;&gt;</Link>
                        })
                        :
                        null
                    }
                </div>
                {rightLink ? <Link to={rightLink.address} className="rightLink">{rightLink.text}</Link> : null}

                {subtitle ? <p className="subtitle">{subtitle}</p> : null}
            </div>
        )
    }
}
