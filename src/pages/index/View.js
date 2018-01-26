import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu,List} from "antd"
import { connect } from 'react-redux'
import actionCreators from './actionCreators'
import detailCreators from '../detail/actionCreators'
import './index.css'
 class Index extends Component {

	render() {
		return (
			<div className="index-nav">
           <p className="index-content-title"></p>
           <List
                className="index-content"
                itemLayout="horizontal"
                dataSource={this.props.list}
                renderItem={item => (
             <List.Item>
            <List.Item.Meta
              title={<p><Link to={{pathname:`/detail/${item.link}`}} key={item._id}> <span className="item-con" data-link={item.link} onClick={this.props.getDetail}>{item.con}({item.time})</span></Link></p>}/>
            </List.Item>
            )}
          />
          <div>
            <p className="friendLink-title"></p>
            <Menu mode="horizontal"></Menu>
          </div>
			</div>
		)
	}

  componentDidMount () {
    this.props.getIndexInfo()
  }
}

const mapStateToProps = (state) => ({
  list: state.index.list
})

const mapDisPatchToProps = (dispatch) => ({
  getIndexInfo () {
      dispatch(actionCreators.getIndexInfo())
  },
  getDetail (e) {
    dispatch(detailCreators.getDetailInfo(e.target.getAttribute('data-link')))
  }
})
export default connect(mapStateToProps,mapDisPatchToProps)(Index)