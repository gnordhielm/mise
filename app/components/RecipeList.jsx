var React = require('react')
var {connect} = require('react-redux')

import Recipe from 'Recipe'

export var RecipeList = React.createClass({
	render: function() {
		var {recipes} = this.props

		var renderRecipes = () => {
			if (recipes.length === 0) {
				return <p>No recipes yet...</p>
			} else {
				return recipes.slice().map((recipe) => {
					return (
						<Recipe key={recipe._id} {...recipe}/>
					)
				})
			}
		}

		return (
			<div>
				{renderRecipes()}
			</div>
		)
	}
})

export default connect(
	(state) => {
		return state
	}
)(RecipeList)