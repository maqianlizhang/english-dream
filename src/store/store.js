import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { reducer as indexReducer } from '../pages/index/'
import { reducer as commonReducer } from '../pages/common/'
import { reducer as detailReducer } from '../pages/detail/'
import { reducer as listReducer } from '../pages/list/'
import { reducer as resgisterReducer } from '../pages/common/component/register/'
import { reducer as loginReducer } from '../pages/common/component/login/'

const reducer = combineReducers({
	index: indexReducer,
	common: commonReducer,
	detail: detailReducer,
	list: listReducer,
	register: resgisterReducer,
	login: loginReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store