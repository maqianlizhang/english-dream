import actionTypes from './actionTypes'

const showLoginModalAction = () => ({
  type: actionTypes.SHOW_LOGINMODEL,
  visible: true
})
const loginUserChangeAction = (username) => ({
  type: actionTypes.LOGIN_USERCHANGE,
  username: username
})
const loginPwdChangeAction = (password) => ({
  type: actionTypes.LOGIN_PWDCHANGE,
  password: password
})
const loginCancleAction = () => ({
  type: actionTypes.LOGIN_CANCLE,
  username: '',
  password: '',
  visible: false
})
const submitAction = (user) => ({
  type: actionTypes.LOGIN_SUBMIT,
  visible: false,
  username: '',
  password: '',
  show: 'none',
  shows: 'inline-block',
  user: user
})

export default {
	showLoginModal () {
    return (dispatch) => {
      dispatch(showLoginModalAction())
    }
  },
  loginUserChange (username) {
    return (dispatch) => {
      dispatch(loginUserChangeAction(username))
    }
  },
  loginPwdChange (password) {
    return (dispatch) => {
      dispatch(loginPwdChangeAction(password))
    }
  },
  loginCancle () {
    return (dispatch ) => {
      dispatch(loginCancleAction())
    }
  },
  submit (username, password) {
    return (dispatch) => {
      if(username === '' || password === '') {
        alert('账号或者密码不为空')
        return
      }
      fetch("/api/login/", {
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
            if( res.data.login ) {
              setTimeout(()=> {
                dispatch(submitAction(res.data.user)) 
              },3000)
            } else {
              alert('账号或密码不正确')
            }
         })
         .catch(() => {
          alert('服务器错误')
         })
    }
  },
  quit () {
    window.location.reload()
  }
}