import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Modal, Form, Icon } from 'antd'

import actionCreators from './actionCreators'
import './register.css'
const FormItem = Form.Item;
const registerUserFlag = false
const registerPwdFlag = false

class Register extends Component {
	render() {
		const { visible, username, show, password, showModal, handleCancel, handleSubmit, handleRegisterPwdChange, handleRegisterUserChange} = this.props
		return (
        	<div className="register-con">
	        	<Button type="primary"  style={{display: show}} onClick={showModal}>注册</Button>
    			  <Modal
  	          visible={visible}
  	          onCancel={handleCancel}
  	          footer={[
  	            <Button key="back" onClick={handleCancel}>Return</Button>,]}>
  	            <Form className="login-form">
  	              <FormItem>
  	                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" value={username} onChange={handleRegisterUserChange}/>
  	              </FormItem>
  	              <FormItem>
  	                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" value={password} onChange={handleRegisterPwdChange}/>
  	              </FormItem>
  	              <FormItem>
  	                <Button type="primary" htmlType="submit" className="login-form-button" data-username={username} data-password={password} data-registeruserflag={registerUserFlag} data-registerpwdflag={registerPwdFlag} onClick={handleSubmit}>
  	                  register
  	                </Button>
  	              </FormItem>
    	          </Form>  
    	       </Modal>
            
	       </div>
	   )
	}
}

const mapStateToProps = (state) => ({
	visible: state.register.visible,
  username: state.register.username,
  password: state.register.password,
  show: state.login.show
})

const mapDispatchToProps = (dispatch) => ({
	handleCancel () {
		dispatch(actionCreators.handleCancel())
	},
	showModal () {
	  dispatch(actionCreators.showReisterModel())
	},
	handleRegisterUserChange (e) {
    dispatch(actionCreators.registerUserChange(e.target.value))
	},
  handleRegisterPwdChange (e) {
    dispatch(actionCreators.registerPwdChange(e.target.value))
  },
  handleSubmit (e) {
    dispatch(actionCreators.submit(e.target.getAttribute('data-username'),e.target.getAttribute('data-password'),e.target.getAttribute('data-registeruserflag'),e.target.getAttribute('data-registerpwdflag')))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)