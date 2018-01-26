import actionTypes from './actionTypes'

const defaultState = {
	username: '',
	password: '',
	visible: false,
  show: 'inline-block',
  shows: 'none',
  user: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.SHOW_LOGINMODEL:
      return {
        username: state.username,
        password: state.username,
        visible: action.visible,
        show: state.show,
        shows: state.shows,
        user: state.user
      }
    case actionTypes.LOGIN_USERCHANGE:
      return {
        username: action.username,
        password: state.password,
        visible: state.visible,
        show: state.show,
        shows: state.shows,
        user: state.user
      }
    case actionTypes.LOGIN_PWDCHANGE:
      return {
        username: state.username,
        password: action.password,
        visible: state.visible,
        show: state.show,
        shows: state.shows,
         user: state.user
      }
    case actionTypes.LOGIN_CANCLE: 
      return {
        username: action.username,
        password: action.password,
        visible: action.visible,
        show: state.show,
        shows: state.shows,
         user: state.user
      }
    case actionTypes.LOGIN_SUBMIT:
    console.log(action)
      return {
        username: action.username,
        password: action.password,
        visible: action.visible,
        show: action.show,
        shows: action.shows,
        user: action.user
      }

		default:
			return state
	}
}