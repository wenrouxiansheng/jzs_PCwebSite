import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default class siteContainer extends Component {
    render() {
        const { num } = this.props;
        return (
            <div className="siteContainer">
                <div className={`modular standardTemplate ${num === 0 ? 'active' : ''}`}>
                    <div className="">
                        <img src={require('../../../assets/template/swiper1.png').default} alt="" />
                        <p>
                            <Link to='/site/pc/home' target="_blank" >查看</Link>
                            <Link to='/site/pcEdit/editor' target="_self" >编辑</Link>
                        </p>
                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
                <div className={`modular standardTemplate custom ${num === 1 ? 'active' : ''}`}>
                    <div className="">
                        <img src={require('../../../assets/template/swiper1.png').default} alt="" />
                        <p>
                            <Link to={{ pathname: '/site/pcEdit/editor', state: { custom: 1 } }} target="_self" >编辑</Link>
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}
