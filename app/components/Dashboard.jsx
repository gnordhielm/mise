var React = require('react')

import RecipeList from 'RecipeList'

var Dashboard = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Dashboard</h3>
				<RecipeList/>
			</div>
		)
	}
})

module.exports = Dashboard