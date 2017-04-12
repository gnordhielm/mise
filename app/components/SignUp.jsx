import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

export var Signup = React.createClass({
	onSignup: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		dispatch(actions.startSignup())
	},
	render: function() {
		return (
			<form onSubmit={this.onSignup}>
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

export default Redux.connect()(Signup)