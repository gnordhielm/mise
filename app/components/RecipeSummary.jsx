var React = require('react')
var {connect} = require('react-redux')

export var RecipeSummary = React.createClass({
	render: function() {
		var {title, subtitle, attribution, body, is_cml, created_at} = this.props
		return (
			<div className='recipe-summary'>
				<h2>{title}</h2>
				<small>{created_at}</small>

				{is_cml && <div className='cml-stamp'>CML</div>}
			</div>
		)
	}
})

export default connect()(RecipeSummary)