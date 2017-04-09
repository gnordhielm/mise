var axios = require('axios')

const url = "https://mise-api.herokuapp.com/recipes"

function index() {
	return axios.get(url)
		.then(function(res) {
	 		return res
		 }, function(res) {
		 	throw new Error(res)
		 })
}

// function inspect(id) {
// 	return axios.get(url)
// 		.then(function(res) {
// 	 		return res.data
// 		 }, function(res) {
// 		 	throw new Error(res)
// 		 })
// }
// function create() {
// 	return axios.get(url)
// 		.then(function(res) {
// 	 		return res.data
// 		 }, function(res) {
// 		 	throw new Error(res)
// 		 })
// }
// function update() {
// 	return axios.get(url)
// 		.then(function(res) {
// 	 		return res.data
// 		 }, function(res) {
// 		 	throw new Error(res)
// 		 })
// }
// function destroy() {
// 	return axios.get(url)
// 		.then(function(res) {
// 	 		return res.data
// 		 }, function(res) {
// 		 	throw new Error(res)
// 		 })
// }


module.exports = {
  indexRecipes: index,  
  // inspectRecipe: inspect,  
  // createRecipe: create,  
  // updateRecipe: update,  
  // destroyRecipe: destroy
}