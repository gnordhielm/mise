
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