var React = require('react')
var {connect} = require('react-redux')

export var Recipe = React.createClass({
	render: function() {
		var {title, subtitle, attribution, body, is_cml, created_at} = this.props

		var renderCMLStamp = () => {
			if (is_cml) {
				return <div className='cml-stamp'>CML</div>
			} 
		}

		return (
			<div className='recipe'>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
				<h3>{attribution}</h3>
				<small>{created_at}</small>
				<hr/>
				<p>{body}</p>
				{renderCMLStamp()}
			</div>
		)
	}
})

export default connect()(Recipe)