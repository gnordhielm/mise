import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'


export var About = React.createClass({
	render: function() {
		return (
		<div className="skinny-center-div about">
			<Link className="navigation-link" to='/'>Home</Link>
			<br/>
			<br/>

			<h1>About Mise</h1>
			<br/>
			
			<IndexLink activeClassName="help-text" className="navigation-link" to='about'>The App</IndexLink>
			<Link activeClassName="help-text" className="navigation-link"to='about/api'>API</Link>
			{this.props.children}
		</div>
	)
}
})

export default Redux.connect()(About)