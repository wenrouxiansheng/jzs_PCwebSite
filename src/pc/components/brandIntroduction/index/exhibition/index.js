import React, { Component } from 'react'
import './style.scss'


export default class exhibition extends Component {
    state = {
        data: {
            title: "中国艺术教育知名品牌  实现对自我的艺术追求",
            text: "桔子树艺术教育，是中国艺术教育培训知名品牌。成立逾9年，总部位于北京市通州区万达广场A座，是集青少儿才艺培训、成人艺术培训、艺术课程研发、艺考辅导、企业服务、参赛培训等为一体的艺术教育培训综合体。",
            number1: "01",
            img: require('../../../../assets/homePage/banner/banner.jpg').default,
            number2: "02"
        }
    }
    render() {
        const { data: propsData } = this.props;
        const { data: stateDate } = this.state;
        let data = propsData || stateDate
        return (
            <div className="exhibition">
                <div className="fontContainer">
                    <div>
                        <h3>{data.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
                    </div>
                    <strong>{data.number1}</strong>
                </div>
                <div className="imgContainer">
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                    <strong>{data.number2}</strong>
                </div>
            </div>
        )
    }
}
