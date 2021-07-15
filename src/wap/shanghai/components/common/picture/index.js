import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types';

export default class Picture extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        style: PropTypes.object
    }
    render() {
        const {src, style} = this.props;
        return (
            <div style={{...style}} className="picture">
                <img src={src} alt="" />
            </div>
        )
    }
}
