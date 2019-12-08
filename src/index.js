import style from './index.css';
import { Component } from 'preact';
import Router from 'preact-router';
import Home from './pages/home';
import Fisica from './pages/fisica';
import VlDiGeometria from './pages/vldigeometria';
import MingwInstall from './pages/mingwinstall';
import Copyright from './components/copyright';

const r = String.raw;

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Router>
					<Home path="/"></Home>
					<Fisica path="/fisica"></Fisica>
					<VlDiGeometria path="/vldigeometria"></VlDiGeometria>
					<MingwInstall path="/mingwinstall"></MingwInstall>
				</Router>
				<Copyright></Copyright>
			</div>
		);
	}
}
