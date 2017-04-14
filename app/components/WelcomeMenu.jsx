import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
import {Link} from 'react-router'


export var WelcomeMenu = React.createClass({
	render: function() {
		return (
		<div className="welcome-menu">
			<Link className="menu-link help-text" to='/log-in'>Log In</Link>
			<Link className="menu-link help-text" to='/sign-up'>Sign Up</Link>
			<Link className="menu-link help-text" to='/about'>Learn More</Link>
		</div>
		)
	}
})

export default Redux.connect()(WelcomeMenu)