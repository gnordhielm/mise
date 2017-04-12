
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

// Auth actions

// udemy

// export var startLogin = () => {
// 	return (dispatch, getState) => {
// 		console.log('starting log in')
// 	}
// }

// export var login = (id) => {
// 	return {
// 		type: 'LOGIN',
// 		uid
// 	}
// }

// auth 0

export const requestLogin = (credentials) => {
	return {
		type: 'LOGIN_REQUEST',
		isFetching: true,
		isAuthenticated: false,
		credentials
	}
}

export const receiveLogin = (user) => {
	return {
		type: 'LOGIN_SUCCESS',
		isFetching: false,
		isAuthenticated: true,
		id_token: user.id_token
	}
}

export const loginError = (message) => {
	return {
		type: 'LOGIN_FAILURE',
		isFetching: false,
		isAuthenticated: false,
		message
	}
}



/////



export var startSignup = () => {
	return (dispatch, getState) => {
		console.log('starting sign up')
	}
}

export var startLogout = () => {
	return (dispatch, getState) => {
		console.log('starting log out')
	}
}

export var logout = () => {
	return {
		type: 'LOGOUT'
	}
}