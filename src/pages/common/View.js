import React, { Component } from 'react'
import actionCreators from './actionCreators'
import { connect } from 'react-redux'
import './common.css'
import { Row, Col, Menu } from 'antd';
class ComponentWrapper extends Component {
	render() {
		return (
			<div className="common-wrapper">
      <div></div>
        <Row>
          <Col span={6}>
            <img className="common-logo-img"src='http://www.easyvoa.com/templets/images/newlogo.png' alt='图片加载失败'/>
          </Col>
          <Col span={18}>
          <Menu mode="horizontal">
            {
              this.props.list.map((value) => {
                return <Menu.Item key={value.id}>{value.title}</Menu.Item>
              })
            }
          </Menu>
          </Col>
        </Row>
        <Row>
            {
              this.props.english.map((value) => {
                return (<Col span={value.col} 
                          key={value.id}>
                          {value.title}
                            <Menu mode="horizontal">
                              {
                                value.list.map((lists) => {
                                  return <Menu.Item key={lists.id}>{lists.con}</Menu.Item>
                                })
                              }
                            </Menu>
                          </Col>
                )
              })
            }
          
        </Row> 
			 {this.props.children}
			</div>)
	}

  componentDidMount () {
    this.props.getNavListInfo()
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.common.list,
    english: state.common.english
  }  
}

const mapDispatchToProps = (dispatch) => ({
  getNavListInfo () {
    dispatch(actionCreators.getNavListInfoSucc())  
  }   
})
export default connect(mapStateToProps ,mapDispatchToProps)(ComponentWrapper)