
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
		case 'FAILED_SIGNUP':
			return { ...state, signupErrors: {...action.errors} }
		case 'LOGIN':
			return { status: "logged in" }
		case 'FAILED_LOGIN':
			return { ...state, loginErrors: {...action.errors} }
		case 'LOGOUT':
			return {}
		default:
			return state
	}
}