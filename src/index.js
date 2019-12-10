import './index.css';
import './manifest.json';
import { Component } from 'preact';
import Router from 'preact-router';
import Home from './pages/home';
import Fisica from './pages/fisica';
import VlDiGeometria from './pages/vldigeometria';
import MingwInstall from './pages/mingwinstall';
import Copyright from './components/copyright';

// noinspection JSUnusedGlobalSymbols
export default class App extends Component {
	render() {
		return (
			<div id="app">
				<h1><a href="/">Appuntiweb</a> <small>di <a href="https://steffo.eu/">Steffo</a></small></h1>
				<Router>
					<Home path="/"/>
					<Fisica path="/fisica"/>
					<VlDiGeometria path="/vldigeometria"/>
					<MingwInstall path="/mingwinstall"/>
				</Router>
				<Copyright/>
			</div>
		);
	}
}
