import React, { Component } from 'react'
import './style.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footerBarCopyright" style={{ backgroundColor: "#eee", marginTop: "0.86rem" }}>
                <div className="copyrightContent">
                    < span > 版权所有.北京桔子树文化传播有限责任公司.2021 京ICP备11048020号</span>
                </div >
                <div className="copyrightContent">
                    <span>
                        京公网安备 11011202001383号
                    </span>
                </div>
            </footer >
        )
    }
}
