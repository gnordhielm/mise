
import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
import {Link} from 'react-router'


export var App = React.createClass({
	onLogout: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		dispatch(actions.startLogout())
	},
	render: function() {
		return (
		<div>
			<div id='top-logo'><Link to='/'>Mise</Link><p onClick={this.onLogout} className="log-out" >log out</p></div>
			{this.props.children}
		</div>
	)
	}
})

export default Redux.connect()(App)

