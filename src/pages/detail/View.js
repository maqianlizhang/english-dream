import React, { Component } from 'react'

import actionCreators from './actionCreators'
import { connect } from 'react-redux'
import Main from './components/Main'
import Foot from './components/Foot'
import './detail.css'
class Detail extends Component {
	render() {
    return (<div>
    		<Main></Main>
        <Foot></Foot>
    	</div>)
  }

  componentDidMount () {
  	this.props.getDetailInfo()
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetailInfo () {
    dispatch(actionCreators.getDetailInfo())
  }
})

export default connect(null,mapDispatchToProps)(Detail)