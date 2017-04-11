var axios = require('axios')

const MISE_URL = "https://mise-api.herokuapp.com/recipes"

module.exports = {
	indexRecipes: function() {
		axios.get(MISE_URL)
		  .then(function (res) {
	 		return [{id:1, title:'Test', subtitle:'Subtitle', body:'bodyyyyy'}]
		  })
		  .catch(function (error) {
			 throw new Error('Could not complete request')
		  });
	}

}