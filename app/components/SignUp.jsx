var React = require('react')


var SignUp = React.createClass({
	render: function() {
		return (
			<form>
				<h3>Sign Up</h3>

				<div>
					<label>Name:</label>
					<input type='text'></input>
				</div>

				<div>
					<label>Email:</label>
					<input type='text'></input>
				</div>

				<div>
					<label>Handle:</label>
					<input type='text'></input>
				</div>

				<div>
					<label>I am a... </label>
					<label>professional</label>
					<input type='radio' name='is_professional'></input>
					<label>home cook</label>
					<input type='radio' name='is_professional'></input>
				</div>

				<div>
					<label>Password:</label>
					<input type='password'></input>
				</div>

				<input type='submit'/>
				
			</form>
		)
	}
})

module.exports = SignUp