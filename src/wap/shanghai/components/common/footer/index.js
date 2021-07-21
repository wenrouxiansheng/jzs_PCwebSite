import React, { Component } from 'react'
import './style.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footerBarCopyright" style={{ backgroundColor: "#eee", marginTop: "0.86rem" }}>
                <div className="copyrightContent">
                    <span>商务合作：010-5965-2885</span>
                </div >
                <div className="copyrightContent">
                    <span>
                        京ICP备17024125号-1
                    </span>
                </div>
                <div className="copyrightContent">
                    <span>
                        版权所有@2021.北京桔子树文化传播有限责任公司
                    </span>
                </div>
            </footer >
        )
    }
}
