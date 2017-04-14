
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
			
			<div className="login-form">
				<Link className="menu-link chef-text" to='/'>Menu</Link>
				<form>
					<h3>Log In</h3>

					<div>
						<input type='text' ref='email' placeholder='email' autofill='off'></input>
					</div>

					<div>
						<input type='password' ref='password' placeholder='password' autofill='off'></input>
					</div>
					<br/>
					<br/>

					<input onClick={this.onLogin} type='submit' value='Log In'/>

				</form>
			</div>
		)
	}
})

export default Redux.connect()(Login)



