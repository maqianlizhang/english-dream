import actionTypes from './actionTypes'

const defaultState = {
	list: []
}
export default (state = defaultState, action)=> {
	switch(action.type) {
		case actionTypes.CHANGE_LIST:
			return {
				list: action.list
			}
		default: return state
	}
	
}