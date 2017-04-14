import React from 'react'

import * as actions from 'actions'
import {Link, IndexLink} from 'react-router'

import Navigation from 'Navigation'

export var Ideas = React.createClass({
	render: function() {
		return (
			<div>
				<Navigation/>
				<div className='skinny-center-div'>
					<img className='placeholder' src='/images/ideas.png' alt='Ideas placeholder'/>
				</div>
			</div>
	)
}
})

export default Ideas