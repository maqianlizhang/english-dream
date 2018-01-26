import React from 'react'
import { connect } from 'react-redux'
const Header = (props) => {
	return (<div className="list-header">
    <img className="list-header-img" src={props.info.img.imgUrl} alt="图片加载失败"/>
    <img className="list-header-moveimg" src={props.info.img.moveImg} alt="图片加载失败"/>
    </div>

    )
}

const mapStateToProps = (state) => ({
  info: state.list.info
})

export default connect(mapStateToProps,null)(Header)