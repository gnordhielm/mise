
import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import App from 'App'
import SignUp from 'SignUp'
import Login from 'Login'
import Dashboard from 'Dashboard'

var About = require('About')
var Help = require('Help')
var Welcome = require('Welcome')
var NewRecipe = require('NewRecipe')
var EditRecipe = require('EditRecipe')
var Settings = require('Settings')

// Auth middleware
// var requireLogin = (nextState, replace, next) => {
// 	if (!firebase.auth().currentUser) {
// 		replace('/')
// 	}
// 	next()
// }

// var loginRedirect = (nextState, replace, next) => {
// 	if (firebase.auth().currentUser) {
// 		replace('/todos')
// 	} 
// 	next()
// }

export default (<Router history={hashHistory}>
	<Route path='/' component={App}>
		<IndexRoute component={Welcome}/>
		<Route path='about' component={About}></Route>
		<Route path='help' component={Help}></Route>
		<Route path='sign-up' component={SignUp}></Route>
		<Route path='log-in' component={Login}></Route>
	</Route>
	 

	<Route path='/dashboard' component={App}>
		<IndexRoute component={Dashboard}></IndexRoute>
		<Route path='new-recipe' component={NewRecipe}></Route>
		<Route path='edit-recipe' component={EditRecipe}></Route>
		<Route path='settings' component={Settings}></Route>
	</Route>
</Router>)