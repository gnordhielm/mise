var React = require('react'),
	{Link} = require('react-router')

var Main = (props) => {
	return (
		<div>
			<div id='indicator'><Link to='/'>mise</Link></div>

			{props.children}
		</div>
	)	
}

module.exports = Main