import React from 'react'
var {connect} = require('react-redux')
import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'
import Navigation from 'Navigation'

export var Chef = React.createClass({
	render: function() {
		var {auth} = this.props

		return (
			<div>			
				<Navigation/>
				<div className="skinny-center-div welcome">
					<h1>Welcome, {auth.name.split(' ')[0]}</h1>
					<h2>{auth.handle || 'handle'}</h2>
				</div>
			</div>
		)
	}
})

export default connect(
	(state) => {
		return state
	}
)(Chef)