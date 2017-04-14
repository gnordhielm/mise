var React = require('react')
var {connect} = require('react-redux')
import {Link} from 'react-router'
import * as actions from 'actions'
import RecipeSummary from 'RecipeSummary'


export var RecipeList = React.createClass({
	componentDidMount: function(){
		var {dispatch} = this.props
		dispatch(actions.startIndexRecipes())
	},
	render: function() {
		var {recipes} = this.props

		var renderRecipes = () => {
			if (recipes.length === 0) {
				return <p>No recipes yet...</p>
			} else {
				return recipes.slice().reverse().map((recipe) => {
					return (
						<RecipeSummary key={recipe._id} {...recipe}/>
					)
				})
			}
		}

		return (
			<div className='skinny-center-div'>
				<Link className='menu-link' to='recipes/new'>New Recipe</Link>
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