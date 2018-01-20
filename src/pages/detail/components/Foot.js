import React, { Component } from 'react'

import { connect } from 'react-redux'
class Foot extends Component {
  render() {
    return (<div>
      <p className="Link">VOA相关链接</p>
      <ul className="foot-list clear">
        {
          this.props.Link.map((value) => {
            return <li className="foot-item" key={value.id}>{value.con}</li>
          })
        }
      </ul>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  Link: state.detail.Link
})

export default connect(mapStateToProps,null)(Foot)