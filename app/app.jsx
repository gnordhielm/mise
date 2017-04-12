var React = require('react'),
	ReactDOM = require('react-dom'),
	{hashHistory} = require('react-router')

var {Provider} = require('react-redux')
var actions = require('actions')
var store = require('configureStore').configure()
	

import routes from 'app/routes/'

// Subscribe to state updates
store.subscribe(() => {
	var state = store.getState()
	console.log('New state', state)
})

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

store.dispatch(actions.startIndexRecipes())

// load app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('app')
)