var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router')
var {Provider} = require('react-redux')
var actions = require('actions')
var store = require('configureStore').configure()
	
var Main = require('Main')
var About = require('About')
var Help = require('Help')
var Welcome = require('Welcome')
var NewRecipe = require('NewRecipe')
var EditRecipe = require('EditRecipe')
var Settings = require('Settings')

import SignUp from 'SignUp'
import Login from 'Login'
import Dashboard from 'Dashboard'

// Subscribe to state updates
store.subscribe(() => {
	var state = store.getState()
	console.log('New state', state)
})

// auth redirects

// firebase.auth().onAuthStateChanged((user) => {
// 	if (user) {
// 		hashHistory.push('/todos')
// 	} else {
// 		hashHistory.push('/')
// 	}
// })

store.dispatch(actions.startIndexRecipes())

// load app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={Welcome}/>
				<Route path='about' component={About}></Route>
				<Route path='help' component={Help}></Route>
				<Route path='sign-up' component={SignUp}></Route>
				<Route path='log-in' component={Login}></Route>
			</Route>
			 

			<Route path='/dashboard' component={Main}>
				<IndexRoute component={Dashboard}></IndexRoute>
				<Route path='new-recipe' component={NewRecipe}></Route>
				<Route path='edit-recipe' component={EditRecipe}></Route>
				<Route path='settings' component={Settings}></Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)