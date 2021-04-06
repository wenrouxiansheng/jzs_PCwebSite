import React, { Component } from 'react'

export default class pcEditWebsite extends Component {
    iframe = React.createRef()

    getIframe = () => {
        const iframe = this.iframe.current.contentWindow;
        iframe.postMessage("asdasdadasd", "/")
    }

    render() {
        return (
            <div>
                <button onClick={this.getIframe}>asdasdasd</button>
                <iframe id="iframe" src="../../pc/views/index.js" title="pc" ref={this.iframe} style={{ width: "100%", height: "100vh" }} />
            </div>
        )
    }
}
