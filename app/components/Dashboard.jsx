var React = require('react'),
	Recipe = require('Recipe'),
	MiseAPI = require('MiseAPI')

var Dashboard = React.createClass({
	getInitialState: function() {
		return {
			recipes: MiseAPI.indexRecipes()
		}
	},
	render: function() {
		var {recipes} = this.state

		var renderRecipes = () => {
			console.log(recipes)
			// return recipes.map((recipe) => {
			// 	return (
			// 		<Recipe key={recipe.id} {...recipe}/>
			// 	)
			// })
		}
		return (
			<div>
				<h3>Dashboard</h3>
				{renderRecipes()}
			</div>
		)
	}
})

module.exports = Dashboard