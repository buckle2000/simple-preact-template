import './style.styl';
import Router from 'preact-router';
import { Component } from 'preact';

export default class App extends Component {
	render(props) {
		return pug`
			Router
				div(path="/")
					h1 Hello, World!
				div(default)
					h1 404
					a(href="/") Return to Home
		`
	}
}
