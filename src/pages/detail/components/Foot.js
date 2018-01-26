import React, { Component } from 'react'

import { connect } from 'react-redux'
class Foot extends Component {
  render() {
    return (<div>
      <p className="Link">VOA相关链接</p>
      <ul className="foot-list clear">
        
      </ul>
      </div>)
  }
}

const mapStateToProps = (state) => ({
 
})

export default connect(mapStateToProps,null)(Foot)