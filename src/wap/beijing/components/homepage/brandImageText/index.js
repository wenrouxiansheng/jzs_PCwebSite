import React, { Component } from 'react'
import './style.scss'

export default class BrandImageText extends Component {
    state = {
        data: {
            title: "办学规模",
            subtitle: "强大的办学规模",
            text: '<span className="text">已开设<font color="#f2aa46">18</font>家直营校区 （北京<font color="#f2aa46">16</font>家，上海<font color="#f2aa46">2</font>家） 总教学面积近<font color="#f2aa46">35000</font>平米</span>',
            img: require('../../../assets/homepage/brand/Picture1_03.png').default
        }
    }
    render() {
        const { title, subtitle, text, img } = this.state
        return (
            <div className="ImgIntroductionPicture ImgIntroductionPicture2">
                <div className="text_box">
                    <p><span className="title_flag">{title}</span></p>
                    <h3>{subtitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
                <div className="img_box">
                    <img src={img} />
                </div>
            </div>
        )
    }
}