var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router'),
	Main = require('Main'),
	About = require('About'),
	Help = require('Help'),
	SignUp = require('SignUp'),
	LogIn = require('LogIn'),
	Welcome = require('Welcome'),
	Dashboard = require('Dashboard'),
	NewRecipe = require('NewRecipe'),
	EditRecipe = require('EditRecipe'),
	Settings = require('Settings')

var {Provider} = require('react-redux')
var actions = require('actions')
var store = require('configureStore').configure()

// Subscribe to state updates
store.subscribe(() => {
	var state = store.getState()
	console.log('New state', state)
})

store.dispatch(actions.startIndexRecipes())

// load app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<Dashboard/>
	</Provider>,
	document.getElementById('app')
)


var complexDOM = (<Router history={hashHistory}>
					<Route path='/' component={Main}>
						<IndexRoute component={Welcome}/>
						<Route path='about' component={About}></Route>
						<Route path='help' component={Help}></Route>
						<Route path='sign-up' component={SignUp}></Route>
						<Route path='log-in' component={LogIn}></Route>
					</Route>
					<Route path='/dashboard' component={Main}>
						<IndexRoute component={Dashboard}/>
						<Route path='new-recipe' component={NewRecipe}></Route>
						<Route path='edit-recipe' component={EditRecipe}></Route>
						<Route path='settings' component={Settings}></Route>
					</Route>
				</Router>
)