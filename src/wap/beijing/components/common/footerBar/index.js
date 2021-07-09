import React, { Component } from 'react'
import './style.scss'

import { Link } from 'react-router-dom'
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MessageOutlined } from '@ant-design/icons';

export default class FooterBar extends Component {
    render() {
        return (
            <div className="floatingWindow" >
                <div>
                    <MessageOutlined className="font" />
                    <p>在线咨询</p>
                </div>
                <div>
                    <CallIcon className="font" />
                    <p><a href="tel:400-900-8898">电话咨询</a></p>
                </div>
                <div>
                    <LocationOnIcon className="font" />
                    <p><Link to="#">校区地址</Link></p>
                </div>
            </div>
        )
    }
}
