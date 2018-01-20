import actionTypes from './actionTypes'

const defaultState = {
	detail: {},
	Link: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAILINFO:
      return {
        detail: action.detail,
        Link: action.Link
      }
     default: return state
  }
	
}