var React = require('react')
var {connect} = require('react-redux')
var moment = require('moment')

export var RecipeSummary = React.createClass({
	render: function() {
		var {title, subtitle, attribution, body, is_cml, created_at} = this.props
		return (
			<div className='recipe-summary'>
				<h3>{title}</h3>
				<small>{moment.unix(created_at).format('MMM Do YYYY @ h:mm a')}</small>
			</div>
		)
	}
})

export default connect()(RecipeSummary)

