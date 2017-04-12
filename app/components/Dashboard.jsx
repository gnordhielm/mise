var React = require('react')

import RecipeList from 'RecipeList'

var Dashboard = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Dashboard</h1>
				<RecipeList/>
			</div>
		)
	}
})

module.exports = Dashboard