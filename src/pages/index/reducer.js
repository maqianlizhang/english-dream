import actionTypes from './actionTypes'

const defaultState = {
	list: {},
	friendLink: {
		list: []
	}
}
export default (state = defaultState, action)=> {
	switch(action.type) {
		case actionTypes.CHANGE_LIST:
			return {
				list: action.list,
				friendLink: action.friendLink
			}
		default: return state
	}
	
}