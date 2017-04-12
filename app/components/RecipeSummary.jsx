var React = require('react')
var {connect} = require('react-redux')

export var RecipeSummary = React.createClass({
	render: function() {
		var {title, subtitle, attribution, body, is_cml, created_at} = this.props

		var renderCMLStamp = () => {
			if (is_cml) {
				return <div className='cml-stamp'>CML</div>
			} 
		}

		return (
			<div className='recipe-summary'>
				<h2>{title}</h2>
				<small>{created_at}</small>
				{renderCMLStamp()}
			</div>
		)
	}
})

export default connect()(RecipeSummary)