import actionTypes from './actionTypes'

const defaultState = {
	detail: {}
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAILINFO:
    console.log(action)
      return {
        detail: action.detail
      }
     default: return state
  }
	
}