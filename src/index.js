import { Component } from 'preact';
import Router from 'preact-router';
import Home from './routes/home';
import Fisica from './routes/fisica';
import VlDiGeometria from './routes/vldigeometria';
import MingwInstall from './routes/mingwinstall';
import Copyright from './components/copyright';
import Statistica from './routes/statistica';
// noinspection ES6UnusedImports
import _style from './index.css';
// noinspection ES6UnusedImports
import _manifest from './meta/manifest.json';
// noinspection ES6UnusedImports
import _cname from './meta/CNAME';
// noinspection ES6UnusedImports
import _nojekyll from './meta/.nojekyll';
import {createHashHistory} from "history";

// noinspection JSUnusedGlobalSymbols
export default class App extends Component {
	render() {
		return (
			<div id="app">
				<h1><a href="/">Appuntiweb</a> <small>di <a href="https://steffo.eu/">Steffo</a></small></h1>
				<Router history={createHashHistory()}>
					<Home path="/"/>
					<Fisica path="/fisica"/>
					<VlDiGeometria path="/vldigeometria"/>
					<MingwInstall path="/mingwinstall"/>
					<Statistica path="/statistica"/>
				</Router>
				<Copyright/>
			</div>
		);
	}
}
