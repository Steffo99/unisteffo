import './index.css';
import { Component } from 'preact';
import Algoritmi from './pages/algoritmi';
import Fisica from './pages/fisica';
import Copyright from './components/copyright';

const r = String.raw;

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Fisica></Fisica>
				<Copyright></Copyright>
			</div>
		);
	}
}
