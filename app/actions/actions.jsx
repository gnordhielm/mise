
const URL = 'http://localhost:3000'

///// Recipe actions

export var indexRecipes = (recipes) => {
	return {
		type: 'INDEX_RECIPES',
		recipes
	}
}

export var startIndexRecipes = (recipes) => {
	return (dispatch, getState) => {
		var recipes

		$.get(URL + '/recipes', (response) => {
			recipes = response
			dispatch(indexRecipes(recipes))
		})
	}
}

///// Auth actions

// Sign up

export var startSignup = (newUser) => {
	return (dispatch, getState) => {
		$.post(URL + '/auth/signup', newUser, (response) => {

			if (response.success) {
				// the sign up worked, there is a new user
				dispatch(startLogin(response))
			} else {
				// the credentials were not accepted
				dispatch(failedSignup(response.errors))
			}
		})
	}
}

export var failedSignup = (errors) => {
	return {
		type: 'FAILED_SIGNUP',
		errors: errors
	}
}

// Log in

export var startLogin = (credentials) => {
	return (dispatch, getState) => {
		$.post(URL + '/auth/login', credentials, (response) => {
			
			if (response.success) {
				// login was successful
				dispatch(login(response.errors))
			} else {
				// the credentials were not accepted
				dispatch(failedLogin(response))
			}

		})
	}
}

export var login = () => {
	return {
		type: 'LOGIN'
	}
}

export var failedLogin = (errors) => {
	return {
		type: 'FAILED_LOGIN',
		errors
	}
}

// Log out

export var startLogout = () => {
	return (dispatch, getState) => {
	}
}

export var logout = () => {
	return {
		type: 'LOGOUT'
	}
}