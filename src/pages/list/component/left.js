import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router'
const Left = (props) => {
	return (
    <div>
      
      <ul className="left-list clear">
        {
          props.info.book.map((value) => {
            return <li className="list-imgs" key={value._id}><img src={value.imgUrl} alt="获取图片失败"/></li>
          })
        }
      </ul>
      <p className="before">往期试听:</p>
      <ul className="list-con">
        {
          props.info.con.map((value) => {
            return <li className="list-item" key={value._id}>{value.con}</li>
          })
        }
      </ul>
    </div>
		)
}

const mapStateToProps = (state) => ({
  info: state.list.info
})

export default connect(mapStateToProps,null)(Left)