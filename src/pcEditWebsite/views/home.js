import React, { Component } from 'react'
import Header from "../components/header";//编辑器容器
import Nav from "../components/homePage/nav";//编辑器容器
import SiteContainer from "../components/homePage/siteContainer";//编辑器容器

export default class pcEditHome extends Component {
    state = {
        indexed: 0//控制显示的盒子
    }
    switchSelected = (num) => {
        this.setState({
            indexed: num
        })
    }
    render() {
        const { indexed } = this.state;
        return (
            <div className="pcEditHome">
                <Header type={'home'}/>
                <Nav switchSelected={this.switchSelected} num={indexed} />
                <SiteContainer num={indexed}/>
            </div>
        )
    }
}
