var React = require('react')


var LogIn = React.createClass({
	render: function() {
		return (
			<form>
				<div>
					<label>Email:</label>
					<input type='text'></input>
				</div>

				<div>
					<label>Password:</label>
					<input type='password'></input>
				</div>

				<input type='submit' value='Log In'/>

			</form>
		)
	}
})

module.exports = LogIn