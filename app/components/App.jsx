
import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
import {Link} from 'react-router'


export var App = React.createClass({
	render: function() {
		return (
		<div>
			<h1 id='top-logo'><Link to='/'>Mise</Link></h1>
			{this.props.children}
		</div>
	)
	}
})

export default Redux.connect()(App)

