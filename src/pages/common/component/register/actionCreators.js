import actionTypes from './actionTypes'

const showReisterModelAction = () => ({
    type: actionTypes.SHOW_REGISTERMODEL,
    visible: true
})
const hideReisterModelAction = () => ({
    type: actionTypes.HIDE_REGISTERMODEL,
    visible: false,
    username: '',
    password: ''
})
const registerUserChangeAction = (username) => ({
	type: actionTypes.USERNAME_CHANGE,
	username: username
})
const registerPwdChangeAction = (password) => ({
	type: actionTypes.PASSWORD_CHANGE,
	password: password
})
const submitAction = () => ({
	type: actionTypes.REGISTER_STATE,
	visible: false,
  username: '',
  password: ''
})

export default {
	showReisterModel () {
		return (dispatch) => {
		  dispatch(showReisterModelAction())
		}
  },
  handleCancel () {
    return (dispatch) => {
      dispatch(hideReisterModelAction())
    }
  },
  registerUserChange (username) {
  	return (dispatch) => {
  		dispatch(registerUserChangeAction(username))
  	}
  },
  registerPwdChange (password) {
  	return (dispatch) => {
  		dispatch(registerPwdChangeAction(password))
  	}
  },
  submit(username, password, registerUserFlag, registerPwdFlag) {
  	return (dispatch) => {
    const usernameQQ = /^[1-9][0-9]{4,10}$/
    const usernamePhone = /^[1][3,4,5,7,8][0-9]{9}$/
    const userPwd = /^[a-zA-Z$]{6,10}$/

    if( username === '' || password === '') {
      alert('账号或者密码不能为空')
      return
    } 

    if( usernameQQ.test(username) || usernamePhone.test(username)) {
      	registerUserFlag = true
    } else {
      	registerUserFlag = false
       alert("账号只能是手机号及电话号码") 
       return
    } 

    if( userPwd.test(password) ) {
      	registerPwdFlag = true
    } else {
      alert("密码是字母及$符号组成") 
      	registerPwdFlag = false
    }

    if( username && password && registerUserFlag && registerPwdFlag) {
      fetch("api/register/addUser/", {
        method: "POST",
        cors: "no-cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }).then((res) => res.json())
         .then((res) => {
            if( res.data.register ) {
              setTimeout(()=> {
              	dispatch(submitAction()) 
              },3000)
            } else {
              alert('该用户已经存在')
            }
         })
         .catch(() => {
          alert('服务器错误')
         })
    	} 
  	}
  }
}