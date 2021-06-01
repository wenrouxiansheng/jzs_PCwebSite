import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import ContactUsEdit from './contactUsEdit'
import WeChatAbout from './weChatAbout'
import HeadOfficeEdit from './headOfficeEdit'
import MicroBlogInfoEdit from './microBlogInfoEdit'
import EmailInfoEdit from './emailInfoEdit'

import './style.scss'

export default class contactInfoEdit extends Component {
    state = {
        selected: null,
        selectInfo: ["总部信息", "联系我们", "官网邮箱", "微信有约", "官方微博"]
    }
    switchdata = (num) => {
        //切换模块更改
        return () => {
            this.setState({
                selected: num
            })
        }
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { props: { info: { headOffice, phoneInfo, emailInfo, weChatInfo, microBlogInfo } } } = this.props.detail[0];
        const { selectInfo, selected } = this.state;
        return (
            <div className="contactInfoEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>选择模块</span></label>
                </div>
                <ul className="level">
                    {
                        selectInfo.map((item, index) => {
                            return <li className={selected === index ? 'active' : ''} key={index} onClick={this.switchdata(index)}>{item}</li>
                        })
                    }
                </ul>
                {
                    selected === 0 ? <HeadOfficeEdit headOffice={headOffice} /> : null
                }
                {
                    selected === 1 ? <ContactUsEdit phoneInfo={phoneInfo} /> : null
                }
                {
                    selected === 2 ? <EmailInfoEdit emailInfo={emailInfo} /> : null
                }
                {
                    selected === 3 ? <WeChatAbout weChatInfo={weChatInfo} /> : null
                }
                {
                    selected === 4 ? <MicroBlogInfoEdit microBlogInfo={microBlogInfo} /> : null
                }
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
