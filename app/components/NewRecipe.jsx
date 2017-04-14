import React from 'react'
import * as Redux from 'react-redux'
var moment = require('moment')

import * as actions from 'actions'
import {Link} from 'react-router'

export var NewRecipe = React.createClass({
	onSave: function() {
		var {dispatch, auth} = this.props

		var newRecipe = {
				title: this.refs.title.value,
				subtitle: this.refs.subtitle.value,
				image_url: this.refs.image_url.value,
				attribution: this.refs.attribution.value,
				is_public: this.refs.public.checked,
				created_at: moment().unix(),
				body: this.refs.body.value
		}

		if (newRecipe.title && newRecipe.body) {
			dispatch(actions.startAddRecipe(newRecipe, auth.token))
			this.refs.title.value = ''
			this.refs.subtitle.value = ''
			this.refs.image_url.value = ''
			this.refs.attribution.value = ''
			this.refs.public.checked = false
			this.refs.body.value = ''
		} else {
			alert('Missing title or body fields in recipe form.')
		}
	},
	render: function() {
		return (
			<div className='skinny-center-div'>
				<Link className='navigation-link' to='recipes/'>Back</Link>
				<Link className='navigation-link' to='recipes/' onClick={this.onSave}>Save</Link>
				<h2>New Recipe</h2>
				<form className='new-recipe-form'>
					<div>
						<label>Title&ensp;</label>
						<input type='text' ref='title'/>
					</div>
					<div>
						<label>Subtitle&ensp;</label>
						<input type='text' ref='subtitle'/>
					</div>
					<div>
						<label>Attribution&ensp;</label>
						<input type='text' ref='attribution'/>
					</div>
					<div>
						<label>Image Link&ensp;</label>
						<input type='text' ref='image_url'/>
					</div>
					
					<div>
						<label>Make public&ensp;<input type='checkbox' ref='public'/></label>
					</div>

					<div>
						<textarea ref='body'/>
					</div>

				</form>
			</div>
		)
	}
})

export default Redux.connect(
	(state) => {
		return state
	}
)(NewRecipe)