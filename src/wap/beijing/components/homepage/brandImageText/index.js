import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types';
export default class BrandImageText extends Component {
    static propTypes = {
        data: PropTypes.shape({
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            type: PropTypes.number.isRequired
        })
    }
    render() {
        const { data: { title, subtitle, text, img, type } } = this.props;
        return (
            <div className={`ImgIntroductionPicture ${type === 1 ? 'ImgIntroductionPicture1' : 'ImgIntroductionPicture2'}`}>
                <div className="text_box">
                    <p><span className="title_flag">{title}</span></p>
                    <h3>{subtitle}</h3>
                    <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
                <div className="img_box">
                    <img src={img} alt="" />
                </div>
            </div>
        )
    }
}