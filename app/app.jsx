var React = require('react'),
	ReactDOM = require('react-dom'),
	{hashHistory} = require('react-router')

var {Provider} = require('react-redux')
var actions = require('actions')
var store = require('configureStore').configure()

import routes from 'app/routes/routes.jsx'

// auth redirects

// firebase.auth().onAuthStateChanged((user) => {
// 	if (user) {
// 		store.dispatch(actions.login(user.uid))
// 		store.dispatch(actions.startAddTodos())
// 		hashHistory.push('/todos')
// 	} else {
// 		store.dispatch(actions.logout())
// 		hashHistory.push('/')
// 	}
// })

// store.dispatch(actions.startIndexRecipes())

// load app css
require('style!css!sass!applicationStyles')

// render the application with the store, router
ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('app')
)