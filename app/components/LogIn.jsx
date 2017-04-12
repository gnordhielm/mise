
import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

export var Login = React.createClass({
	onLogin: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		dispatch(actions.startLogin())
	},
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

				<input onClick={this.onLogin} type='submit' value='Log In'/>

			</form>
		)
	}
})

export default Redux.connect()(Login)