import actionTypes from './actionTypes'

const defaultState = {
	info: {
		book: [],
		con: [],
    img: {}
	}
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LIST_INFO:
      return {
        info: action.info
      }
      default: return state
  }	
}