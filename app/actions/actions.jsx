var jwt = require('jsonwebtoken')

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
		authenticated: false,
		errors: errors
	}
}

// Log in

export var startLogin = (credentials) => {
	return (dispatch, getState) => {
		$.post(URL + '/auth/login', credentials, (response) => {
			
			if (response.success) {
				// login was successful - we got a token back
				// check the token to see if the signature is valid
				var token = response.token
				return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
	
					// if there is an error verifying
					if (err) { 
						dispatch(failedLogin({token: 'Token signature is incorrect'}))

					} else {

						var userId = decoded.userId

						var internalConfig = {
							internalSecret: process.env.INTERNAL_SECRET,
							userId: userId,
							updates: false
						}

						// then go and get the information about that actual user
						$.post(URL + '/internal/users/' + userId, internalConfig, (finalResponse) => {
							if (finalResponse.success) {
								dispatch(login(token, finalResponse.user))	

							} else {
								dispatch(failedLogin(finalResponse.errors))
							}
						})
					}
				})	
			} else {
				// the credentials were not accepted
				dispatch(failedLogin(response.errors))
			}
		})
	}
}

export var login = (token, user) => {
	return {
		type: 'LOGIN',
		authenticated: true,
		token,
		handle: user.handle,
		name: user.name,
		email: user.email
	}
}

export var failedLogin = (errors) => {
	return {
		type: 'FAILED_LOGIN',
		authenticated: false,
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