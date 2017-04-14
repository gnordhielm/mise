import React from 'react'

import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'

import Navigation from 'Navigation'

export var Recipes = React.createClass({
	render: function() {
		return (
			<div className="recipes-wrapper">	
				<Navigation/>
				{this.props.children}
			</div>				
	)
}
})

export default Recipes