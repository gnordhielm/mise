import React from 'react'

import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'


export var Navigation = React.createClass({
	render: function() {
		return (
		<div className="navigation">
			<Link activeClassName="current" to='/chef'><div className="navigation-dot chef"></div></Link>
			<Link activeClassName="current" to='/ideas'><div className="navigation-dot ideas"></div></Link>
			<Link activeClassName="current" to='/recipes'><div className="navigation-dot recipes"></div></Link>
			<Link activeClassName="current" to='/projects'><div className="navigation-dot projects"></div></Link>
			<br/>
		</div>
	)
}
})

export default Navigation