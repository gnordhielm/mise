
// Pure functions only, please...
// Don't mutate arguments - copy them and then alter them
// Don't make async calls

export var recipesReducer = (state = [], action) => {
	switch (action.type) {
		case 'INDEX_RECIPES':
			return [
				...state,
				...action.recipes
			]
		default:
			return state
	}
}

export var authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { 
				authenticated: action.authenticated,
				token: action.token,
				handle: action.handle,
				name: action.name,
				email: action.email
			}
		case 'FAILED_SIGNUP':
			return { errors: action.errors }
		case 'FAILED_LOGIN':
			return { errors: action.errors }
		case 'LOGOUT':
			return {}
		default:
			return state
	}
}