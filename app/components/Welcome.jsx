var React = require('react'),
	{Link} = require('react-router')


// var Welcome = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Hello from the Welcome component.</h3>
// 		)
// 	}
// })

var Welcome = (props) => {
	return (
		<div id="welcome-navigation">
			<Link to='/about' className="top">About</Link>
			<Link to='/sign-up' className="left">Sign Up</Link>
			<Link to='/log-in' className="right">Log In</Link>
			<Link to='/help' className="bottom">Help</Link>
		</div>
	)	
}

module.exports = Welcome