
import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

import * as actions from 'actions'

export var Login = React.createClass({
	onLogin: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		var credentials = {
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		dispatch(actions.startLogin(credentials))
	},
	render: function() {
		return (
			<form>
				<div>
					<label>Email:</label>
					<input type='text' ref='email'></input>
				</div>

				<div>
					<label>Password:</label>
					<input type='password' ref='password'></input>
				</div>

				<input onClick={this.onLogin} type='submit' value='Log In'/>

				<p>Don't have an account? <Link to='/sign-up'>Sign up</Link>!</p>

			</form>
		)
	}
})

export default Redux.connect()(Login)