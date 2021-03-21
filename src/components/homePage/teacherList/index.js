import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.scss'
const contentStyle = {
    height: '380px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
export default class teacherList extends Component {
    render() {
        return (
            <div className="teacherListLoop">
                <Carousel>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}
