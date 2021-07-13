import React, { Component } from 'react'
import './style.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {createBrowserHistory} from 'history' 

const history = createBrowserHistory();

export default class ReturnBar extends Component {
    backTo = () => {
        history.goBack()
    }
    render() {
        return (
            <div className="TopReturn">
                <span onClick={this.backTo}>
                    <ArrowBackIcon style={{ fontSize: '0.6rem' }} />
                </span>
            </div>
        )
    }
}
