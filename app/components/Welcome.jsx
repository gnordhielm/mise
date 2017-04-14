import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
import {Link} from 'react-router'


export var Welcome = React.createClass({
	render: function() {
		return (
			<div className="skinny-center-div welcome">
				<div className="logo-block">
					<img src='/images/logo.svg' alt='Mise logo'/>
					<h1>Mise</h1>
				</div>

				{this.props.children}
			
			</div>
		)
	}
})

export default Redux.connect()(Welcome)