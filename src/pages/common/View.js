import React, { Component } from 'react'
import actionCreators from './actionCreators'
import { connect } from 'react-redux'
import './common.css'
import { Row, Col, Menu, Input, Button } from 'antd'
import Foot from './Foot'
class ComponentWrapper extends Component {
	render() {
		return (
			<div className="common-wrapper">
        <Row className="header">
          <Col span={2}>
            <Menu>
              <Menu.Item>网站手机版</Menu.Item>
            </Menu>
            </Col>
            <Col span={5}>
            <Menu>
              <Menu.Item>学英语请加微信号:easyvoa2014</Menu.Item>
            </Menu>
            </Col>
            <Col span={11}></Col>
          <Col span={4}>
            <Input></Input>
          </Col>
           <Col span={2}>
            <Button>搜索</Button>
          </Col>
        </Row>
        <Row className="nav-list">
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
        <Row className="english-list">
            {
              this.props.english.map((value) => {
                return (<Col span={value.col} 
                          key={value.id}>
                          <span className="english-nav">{value.title}</span>
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
       <Foot></Foot>
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