import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { reducer as indexReducer } from '../pages/index/'
import { reducer as commonReducer } from '../pages/common/'
import { reducer as detailReducer } from '../pages/detail/'

const reducer = combineReducers({
	index: indexReducer,
	common: commonReducer,
	detail: detailReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store