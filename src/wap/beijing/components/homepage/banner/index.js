import DefaultBanner from '../../bannerPattern/defaultBanner'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Banner extends Component {
    static propTypes = {
        data: PropTypes.shape({
            type: PropTypes.string.isRequired,
            list: PropTypes.array.isRequired
        })
    }
    render() {
        const { type } = this.props.data
        const obj = {
            'default': <DefaultBanner propsData={this.props} />
        }
        return obj[type];
    }
}

