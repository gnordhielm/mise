var React = require('react')


var AboutAPI = React.createClass({
	render: function() {
		return (
			<div>
				<p>Mise provides access to every recipe in the database marked as 'public' by the author. The API does not offer any write actions (update/write/destroy). As the database grows, more information will be added to this section.</p>
				<h3>Endpoints</h3>

				<pre><code>Index:</code></pre>
				<pre><code>GET https://mise-api.herokuapp.com/recipes</code></pre>
				<pre><code>Inspect (by id):</code></pre>
				<pre><code>GET https://mise-api.herokuapp.com/recipes/:id</code></pre>
	
				<h3>Showcase</h3>
				<p>The Mise API is a preferred resource for the <a className="inline-link" href='https://recipecollective.herokuapp.com' target='_blank'>Recipe Collective</a>, created by <a className="inline-link" href='https://github.com/srpeltz' target='_blank'>Steven Peltzer</a>.</p>			
				<p>Source code for this app is available on <a className="inline-link" href='https://github.com/gnordhielm/mise' target='_blank'>GitHub</a>.</p>			
			</div>
		)
	}
})

module.exports = AboutAPI