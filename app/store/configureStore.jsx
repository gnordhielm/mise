import * as redux from 'redux'
import thunk from 'redux-thunk'

import {recipesReducer} from 'reducers'

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		recipes: recipesReducer
	})

	// configure browser dev tools
	// configure redux thunk library
	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

	return store
}