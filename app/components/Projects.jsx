import React from 'react'

import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'

import Navigation from 'Navigation'

export var Projects = React.createClass({
	render: function() {
		return (
			<div>
				<Navigation/>
				<div className='skinny-center-div'>
					<img className='placeholder' src='/images/projects.png' alt='Projects placeholder'/>
				</div>
			</div>
	)
}
})

export default Projects