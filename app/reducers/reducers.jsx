var uuid = require('node-uuid'),
	moment = require('moment')


export var testReducer = (state = 'test', action) => {
	switch (action.type) {
		case 'TEST':
			return action.testAction
		default:
			return state
	}
}