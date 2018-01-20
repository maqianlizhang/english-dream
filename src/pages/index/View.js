import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Menu, Button,List} from "antd"
import { connect } from 'react-redux'
import actionCreators from './actionCreators'
import './index.css'
 class Index extends Component {

	render() {
		return (
			<div className="index-nav">
          <Row className="index-nav-con">
             <Col span={2}>
                <span className="hot-tag">热门标签：</span>
             </Col>
             <Col span={3}>
                <span className="google">广告Google</span>
             </Col>
             <Col span={5}>
                <Button type="danger">听力在线</Button>
             </Col>
             <Col span={5}>
                <Button type="danger">英语听力</Button>
             </Col>
             <Col span={5}>
                <Button type="danger">在线学习</Button>
             </Col>
             <Col span={4}></Col>
         </Row>
           <p className="index-content-title">{this.props.list.title}</p>
           <List
                className="index-content"
                itemLayout="horizontal"
                dataSource={this.props.list.list}
                renderItem={item => (
             <List.Item>
            <List.Item.Meta
              title={<p><Link to="/detail/id=1"><span className="item-title">[{item.title}]</span> <span className="item-con">{item.con}({item.time})</span></Link></p>}/>
            </List.Item>
            )}
          />
          <div>
            <p className="friendLink-title">{this.props.friendLink.title}</p>
            <Menu mode="horizontal">
              {
                this.props.friendLink.list.map((value) => {
                return <Menu.Item key={value.id}>{value.con}</Menu.Item>
                })  
              }
            </Menu>
          </div>
			</div>
		)
	}

  componentDidMount () {
    this.props.getIndexInfo()
  }
}

const mapStateToProps = (state) => ({
  list: state.index.list,
  friendLink: state.index.friendLink
})

const mapDisPatchToProps = (dispatch) => ({
  getIndexInfo () {
      dispatch(actionCreators.getIndexInfo())
  }
})
export default connect(mapStateToProps,mapDisPatchToProps)(Index)