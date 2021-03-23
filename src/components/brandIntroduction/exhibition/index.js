import React, { Component } from 'react'
import './style.scss'
import img1 from '@assets/homePage/banner/banner.jpg'


export default class exhibition extends Component {
    render() {
        return (
            <div className="exhibition">
                <div className="fontContainer">
                    <div>
                        <h3>中国艺术教育知名品牌  实现对自我的艺术追求</h3>
                        <p>
                        桔子树艺术教育，是中国艺术教育培训知名品牌。成立逾9年，总部位于北京市通州区万达广场A座，是集青少儿才艺培训、成人艺术培训、艺术课程研发、艺考辅导、企业服务、参赛培训等为一体的艺术教育培训综合体。
                        </p>
                    </div>
                    <strong>01</strong>
                </div>
                <div className="imgContainer">
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <strong>02</strong>
                </div>
            </div>
        )
    }
}
