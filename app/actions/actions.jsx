
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

export var startSignup = () => {
	return (dispatch, getState) => {
		console.log('starting sign up')
	}
}

export var startLogin = () => {
	return (dispatch, getState) => {
		console.log('starting log in')
	}
}

export var startLogout = () => {
	return (dispatch, getState) => {
		console.log('starting log out')
	}
}