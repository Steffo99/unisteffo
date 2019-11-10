import './index.css';
import { Component } from 'preact';
import Fisica from './pages/fisica';
import Copyright from './components/copyright';

export default class App extends Component {
	render() {
		return (
			<div>
				<Fisica></Fisica>
				<Copyright></Copyright>
			</div>
		);
	}
}
