import React, { Component } from 'react'
import './style.scss'
import img from '../../../assets/components/pictureComponent/danceBanner2_08.png'
import Button from '../../common/buttonComponent'


const buttonStyle = {
    position: 'absolute',
    top: '3rem',
    left: '-0.15rem',
    margin: '0px 0px 0px 0.2rem',
    outline: 'none',
    fontSize: '0.24rem',
    transform: 'scale(0.9)'
}
export default class PictureComponent extends Component {
    render() {
        return (
            <div className="pictureComponent">
                <img src={img} alt="" />
                <div className="p_billboard">您可以先<span style={{ color: "#f2aa46" }}>免费试听</span>，专职教师为您提供专属学习计划，试听满意再报名继续学习。</div>
                <Button list={['点击预约试听课']} style={buttonStyle} />
            </div>
        )
    }
}
