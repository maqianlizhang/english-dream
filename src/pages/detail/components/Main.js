import React, { Component } from 'react'

import { connect } from 'react-redux'

class Main extends Component {
	render() {
		return (<div>

        <p className="detail-main detail-title">{this.props.detail.title}</p>
        <p className="detail-main">
            <span className="detail-info">时间：{this.props.detail.time}</span>
            <span className="detail-info">来源：{this.props.detail.source}</span>
            <span className="detail-info">收听下载次数：{this.props.detail.count}次</span>
        </p>
        <p className="detail-main detail-audio">
        <audio controls>
            <source src={this.props.detail.audio} type="audio/ogg"/>
            <source src={this.props.detail.audio}  type="audio/mpeg"/>
            <source src={this.props.detail.audio}  type="audio/mp3"/>
              Your browser does not support the audio element.
        </audio> 
        <span>下载音频</span>
        </p>
        <div className="detail-con">
            <div dangerouslySetInnerHTML={{__html:this.props.detail.con }}></div>
        </div>
        
      </div>)
	}
   
}

const mapStateToProps = (state) => ({
	detail: state.detail.detail
})

export default connect(mapStateToProps, null)(Main)


