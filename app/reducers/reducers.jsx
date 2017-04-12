
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
				id: action.id
			}
		case 'LOGOUT':
			return {}
		default:
			return state
	}
}