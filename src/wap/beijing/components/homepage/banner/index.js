import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DefaultBanner from '../../bannerPattern/defaultBanner'
import GradingTest from '../../bannerPattern/gradingTest'

export default class Banner extends Component {
    static propTypes = {
        data: PropTypes.shape({
            type: PropTypes.string.isRequired,
            list: PropTypes.array
        })
    }
    render() {
        const { type } = this.props.data
        const obj = {
            'default': <DefaultBanner propsData={this.props} />,
            'gradingTest': <GradingTest propsData={this.props} />
        }
        return obj[type];
    }
}

