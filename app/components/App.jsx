
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
			<Link to='/'>Mise</Link>
			<p onClick={this.onLogout} className="log-out" >log out</p>
			<hr/>
			<p>Lorem ipsum dolor</p>
			<hr/>
			<p className='font-test'>Lorem ipsum dolor</p>
			<hr/>
			<a href='/fonts/Charter-Black.woff'> fonts</a>
			<hr/>

			<img src="/images/logo.png"/>

			{this.props.children}
		</div>
	)
	}
})

export default Redux.connect()(App)

