import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col, Menu, Button, Input } from 'antd'

import actionCreators from './actionCreators'
import indexCreators from '../index/actionCreators'
import { View as Register }  from './component/register/'
import { View as Login }  from './component/login/'
import Foot from './component/Foot'
import './common.css'

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
          <Col span={5}>
            <Input></Input>
          </Col>
           <Col span={4}>
            <Button>搜索</Button>
          </Col>
          <Col span={2}>
            <Register></Register>
          </Col>
          <Col span={6}>
            <Login></Login>
          </Col>
        </Row>
        <Row className="nav-list">
          <Col span={6}>
            <Link to="/"><img className="common-logo-img"src='http://www.easyvoa.com/templets/images/newlogo.png' alt='图片加载失败'/></Link>
          </Col>
          <Col span={18}>
          <Menu mode="horizontal">
            {
              this.props.list.map((value) => {
                return (<Menu.Item key={value._id}><Link to={{pathname:`/list/${value.link}`}}>{value.title}</Link></Menu.Item>)
              })
            }
          </Menu>
          </Col>
        </Row>
        <Row className="english-list">
          {
            this.props.english.map((value) => {
              return (
                <Col span={value.col}>
                  <Link to={{pathname:`/${value.link}`}} key={value._id}><span className="english-nav" data-link={value.link} onClick={this.changeIndexInfo.bind(this)}>{value.title}</span></Link>
                  <Menu mode="horizontal">
                  {
                    value.list.map((values) => {
                      return (
                          <Menu.Item key={values._id}><Link to={{pathname:`/index/${values.link}`}}>{values.title}</Link></Menu.Item>
                        )
                    })
                  }
                  </Menu>
                </Col>

                )
            })
          }

        </Row> 
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
			 {this.props.children}
       <Foot></Foot>
			</div>)
	}

  componentDidMount () {
    this.props.getNavListInfo()
  } 
  changeIndexInfo (e)  {
    this.props.changeIndexInfo(e.target.getAttribute('data-link'))
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
  },
  changeIndexInfo (link) {
    dispatch(indexCreators.changeIndexInfo(link))
  }
})

export default connect(mapStateToProps ,mapDispatchToProps)(ComponentWrapper)