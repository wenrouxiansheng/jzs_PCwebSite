import React, { Component } from 'react'
import './index.scss'
import logo from '@assets/homePage/header/nav_logo.png'
import tel from '@assets/homePage/header/tell.png'

export default class header extends Component {
    render() {
        return (
            <header className="headModule">
                <img src={logo} alt="" />
                <div className="headerRight">
                    <span className="city">北京</span>
                    <img src={tel} alt="" />
                    <span className="tel">400-900-8898</span>
                </div>
            </header>
        )
    }
}

/**
 * header.module.scss
 * import React, { Component } from 'react'
import style from './header.module.scss'//样式私有化处理
import logo from '@assets/components/header/nav_logo.png'
import tel from '@assets/components/header/tell.png'

export default class header extends Component {
    render() {
        return (
            <header className={style.headModule}>
                <img src={logo} alt="" />
                <div className={style.headerRight}>
                    <span className={style.city}>北京</span>
                    <img src={tel} alt="" />
                    <span className={style.tel}>400-900-8898</span>
                </div>
            </header>
        )
    }
}

 */