import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { reducer as indexReducer } from '../pages/index/'
import { reducer as commonReducer } from '../pages/common/'

const reducer = combineReducers({
	index: indexReducer,
	common: commonReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store