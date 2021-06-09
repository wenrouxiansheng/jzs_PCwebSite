import React, { Component } from 'react'
import './style.scss'
import { Timeline } from 'antd';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from '../../../public/historyData'


export default class TimelineComponent extends Component {

    switchTemplate = (templateData) => {
        return templateData.map((data, i) => {
            if (data.type === 'text') {
                return <p key={i} dangerouslySetInnerHTML={{__html: data.text}}></p>
            }
            if (data.type === 'img') {
                return <div className="img_text" key={i}>
                    <img src={data.src} alt="" />
                    <span className="school_text">{data.text}</span>
                </div>
            }
            return <div key={i}>类型错误</div>
        })
    }
    render() {
        return (
            <div className="TimelineContainer">
                <Timeline>
                    {
                        data.map((item, index) => {
                            return <Timeline.Item key={index}>
                                <Accordion>
                                    <AccordionSummary
                                     aria-controls="panel1a-content"
                                     expandIcon={<ExpandMoreIcon style={{fontSize: "0.5rem"}}/>}>
                                        <Typography className="container">{item.time}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="content">
                                        {this.switchTemplate(item.info)}
                                    </AccordionDetails>
                                </Accordion>
                            </Timeline.Item>
                        })
                    }
                </Timeline>
            </div>
        )
    }
}
