import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import EditorSuspension from "../components/editorSuspension";

const style = {
    position: 'relative',
    minWidth: '1200px',
    maxWidth: '1920px',
    height: '100vh'
};
export default class pcEditWebsite extends Component {
    iframe = React.createRef()

    getIframe = () => {
        const iframe = this.iframe.current.contentWindow;
    }
    componentDidMount() {
        PubSub.subscribe('changePageComponent', (msg, data) => {
            console.log(data);
        });
    }
    render() {
        return (
            <div className="editorPage" style={style}>
                <iframe id="iframe" src="../../pc/views/index.js" title="pc" ref={this.iframe} style={{ width: "100%", height: "100vh" }} />
                <EditorSuspension />
            </div>
        )
    }
}
