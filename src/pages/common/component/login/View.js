import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Modal, Form, Icon } from 'antd'

import actionCreators from './actionCreators'

const FormItem = Form.Item;
class Login extends Component {
	render() {
		const { visible, username, show, user,shows, password, showModal, handleCancel, handleSubmit,handleQuit, handleLoginPwdChange, handleLoginUserChange} = this.props
		return (
			<div>
			 <Button type="primary" style={{display: show}} onClick={showModal}>登录</Button>
			  <Modal
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>Return</Button>,]}>
            <Form className="login-form">
              <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" value={username} onChange={handleLoginUserChange}/>
              </FormItem>
              <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" value={password} onChange={handleLoginPwdChange}/>
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button" data-username={username} data-password={password} onClick={handleSubmit}>
                  login
                </Button>
              </FormItem>
	          </Form>  
	       </Modal>
	       <span style={{display: shows}}><Icon type="amazon" style={{ fontSize: 20, color: '#08c', fontWeight: 'bold', lineHeight: '24px', marginRight: '5px'}} />{user}</span><Button style={{display: shows}} onClick={handleQuit}>退出</Button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	visible: state.login.visible,
	username: state.login.username,
	password: state.login.password,
	show: state.login.show,
	shows: state.login.shows,
	user: state.login.user
})

const mapDispatchToProps = (dispatch) => ({
	showModal () {
		dispatch(actionCreators.showLoginModal())
	},
	handleLoginUserChange (e) {
		dispatch(actionCreators.loginUserChange(e.target.value))
	},
	handleLoginPwdChange (e) {
		dispatch(actionCreators.loginPwdChange(e.target.value))
	},
	handleCancel () {
		dispatch(actionCreators.loginCancle())
	},
	handleSubmit (e) {
		dispatch(actionCreators.submit(e.target.getAttribute('data-username'),e.target.getAttribute('data-password')))
	},
	handleQuit () {
		dispatch(actionCreators.quit())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)