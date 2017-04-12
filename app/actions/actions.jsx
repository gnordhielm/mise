
export var indexRecipes = (recipes) => {
	return {
		type: 'INDEX_RECIPES',
		recipes
	}
}

export var startIndexRecipes = (recipes) => {
	return (dispatch, getState) => {
		var recipes

		$.get('https://mise-api.herokuapp.com/recipes', (response) => {
			recipes = response
			dispatch(indexRecipes(recipes))
		})
	}
}