import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

export var Signup = React.createClass({
	onSignup: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		var newUser = {
			name: this.refs.name.value.trim(),
			email: this.refs.email.value.trim(),
			handle: this.refs.handle.value.trim(),
			is_professional: this.refs.is_professional.checked,
			password: this.refs.password.value.trim()
		}

		dispatch(actions.startSignup(newUser))
	},
	render: function() {
		return (
			<form onSubmit={this.onSignup}>
				<h3>Sign Up</h3>

				<div>
					<label>Name:</label>
					<input type='text' ref='name'></input>
				</div>

				<div>
					<label>Email:</label>
					<input type='text' ref='email'></input>
				</div>

				<div>
					<label>Handle:</label>
					<input type='text' ref='handle'></input>
				</div>

				<div>
					<p>I am a... </p>

					<label>
						<input type='radio' name='is_professional'/>
						&ensp;home cook&ensp;
					</label>
					<label>
						<input type='radio' name='is_professional' ref='is_professional'/>
						&ensp;professional&ensp;
					</label>
				</div>

				<div>
					<label>Password:</label>
					<input type='password' ref='password'></input>
				</div>

				<input type='submit'/>
				
			</form>
		)
	}
})

export default Redux.connect()(Signup)