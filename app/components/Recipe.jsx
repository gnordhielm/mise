var React = require('react')

var Recipe = React.createClass({
	render: function() {
		var {title, subtitle, body} = this.props

		return (
			<div>
				<h3>Recipe - {title}</h3>
				<h5>{subtitle}</h5>
				<p>{body}</p>
			</div>
		)
	}
})

module.exports = Recipe