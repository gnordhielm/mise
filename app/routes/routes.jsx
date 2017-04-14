
// Imports
import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import App from 'App'

import Welcome from 'Welcome'
import WelcomeMenu from 'WelcomeMenu'
import Signup from 'Signup'
import Login from 'Login'

import About from 'About'
import AboutMise from 'AboutMise'
import AboutAPI from 'AboutAPI'

import Dashboard from 'Dashboard'


// Auth middleware
var requireLogin = (nextState, replace, next) => {
	if (true) replace('/')
	next()
}

var loginRedirect = (nextState, replace, next) => {
	// replace('/dashboard')
	next()
}

// Routes
export default (

<Router history={hashHistory}>
	<Route component={App}>

		<Route path='/' component={Welcome} onEnter={loginRedirect}>
			<IndexRoute component={WelcomeMenu}/>
			<Route path='log-in'component={Login}/>
			<Route path='sign-up' component={Signup}/>
		</Route>

		<Route path='/about' component={About}>
			<IndexRoute component={AboutMise}/>
			<Route path='api' component={AboutAPI}/>
		</Route>

		<Route path='/ideas' component={Dashboard} onEnter={requireLogin}>
		</Route>

		<Route path='/projects' component={Dashboard} onEnter={requireLogin}>
		</Route>

		<Route path='/recipes' component={Dashboard} onEnter={requireLogin}>
		</Route>

		<Route path='/chef' component={Dashboard} onEnter={requireLogin}>
		</Route>

	</Route>
</Router>

)


// <Router history={hashHistory}>
// 	<Route path='/' component={App}>
// 		<IndexRoute component={Welcome}>
// 			<IndexRoute component={WelcomeMenu}/>
// 			<Route path='sign-up' component={Signup}></Route>
// 			<Route path='log-in' component={Login}></Route>
// 		</IndexRoute>
// 		<Route path='about' component={About}>
// 			<IndexRoute component={AboutMise}/>
// 			<Route path='api' component={AboutAPI}></Route>
// 		</Route>
// 	</Route>
// </Router>