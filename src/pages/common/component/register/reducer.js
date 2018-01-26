import actionTypes from './actionTypes'

const defaultState = {
	visible: false,
	username: '',
	passname: ''
}

export default ( state=defaultState, action) => {
	switch (action.type) {
	case actionTypes.SHOW_REGISTERMODEL:
      return {
        visible: action.visible,
        username: state.username,
        password: state.password
      }
    case actionTypes.HIDE_REGISTERMODEL:
      return {
        visible: action.visible,
        username: action.username,
        password: action.password
      }
     case actionTypes.USERNAME_CHANGE: 
     	return {
    	    visible: state.visible,
            username: action.username,
            password: state.password
     	}
     	case actionTypes.PASSWORD_CHANGE:
     		return {
     			visible: state.visible,
     			username: state.username,
     			password: action.password
     		}
     	case actionTypes.REGISTER_STATE:
     		return {
     			visible: action.visible,
     			username: action.username,
     			password: action.password
     		}
		default:
			return state
	}
}