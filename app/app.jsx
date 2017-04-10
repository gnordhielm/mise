var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router'),
	Main = require('Main'),
	About = require('About'),
	Help = require('Help'),
	SignUp = require('SignUp'),
	LogIn = require('LogIn'),
	Welcome = require('Welcome')

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Welcome}/>
			<Route path='about' component={About}></Route>
			<Route path='help' component={Help}></Route>
			<Route path='sign-up' component={SignUp}></Route>
			<Route path='log-in' component={LogIn}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
)