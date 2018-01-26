import React, { Component } from 'react'

import actionCreators from './actionCreators'
import { connect } from 'react-redux'
import {Link} from 'react-router'
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
  	this.props.getDetailInfo(this.props.params.id)
  }
  componentWillReceiveProps(nextProps) {
    if( nextProps.params.id !== this.props.params.id ) {
      this.props.getDetailInfo(nextProps.params.id)
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetailInfo (id) {
    dispatch(actionCreators.getDetailInfo(id))
  }
})

export default connect(null,mapDispatchToProps)(Detail)