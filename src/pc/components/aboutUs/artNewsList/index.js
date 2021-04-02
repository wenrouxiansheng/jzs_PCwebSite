import React, { Component } from 'react'
import { Pagination } from 'antd';

import './style.scss'
import img from '@assets/aboutUs/teacherDetail/teacher.jpg'
import newImg from '@assets/aboutUs/artNews/new.png'

export default class artNewsList extends Component {
    state = {
        list: [
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
            {
                img: img, text: '噜啦啦噜啦啦噜啦噜啦。。。窗外的天气，就像是你多变的表情，下雨了，雨陪我哭泣，听雨的声音，一滴滴清晰，屋内的湿气香椿储存爱情的记忆，真希望雨能下不停，雨爱的秘密，能一直延续，我相信我将能看见彩虹的美丽', title: '最小选手还没话筒高，桔子树金秋朗诵节开始啦！！', time: '2020-12-17'
            },
        ]
    }
    pageChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }
    render() {
        const { list } = this.state;
        return (
            <div className="artNewsList">
                {
                    list.map((item, index) => {
                        return <div key={index}>
                            <img src={item.img} alt="" />
                            <div className="container">
                                <h1>{item.title}<img src={newImg} alt=""/></h1>
                                <p>{item.text}</p>
                                <time>{item.time}</time>
                            </div>
                        </div>
                    })
                }
                <div className="pagination">
                    <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.pageChange} pageSize={15} showSizeChanger={false} />
                </div>
            </div>
        )
    }
}
