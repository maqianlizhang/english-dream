import actionTypes from './actionTypes'

const defaultState = {
	list: [],
	english: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
    case actionTypes.GET_NAVLIST_DATA:
      return {
        list: action.list,
        english: action.english
      }
    
    default: return state
  }
	
}