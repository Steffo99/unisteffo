// Import debugging tools
let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...")
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...")
	Sentry = require("@sentry/browser");
	let SentryIntegrations = require("@sentry/integrations")
	// noinspection JSUnresolvedVariable
	Sentry.init({
		dsn: "https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500",
		release: process.env.RELEASE,
		environment: "production",
		beforeSend(event, hint) {
			if (event.exception) {
				Sentry.showReportDialog({ eventId: event.event_id });
			}
			return event;
		}
	});
}

// noinspection ES6UnusedImports
import "bluelib/dist/index.css";
import {theme} from "bluelib";
// noinspection ES6UnusedImports
import _manifest from './meta/manifest.json';
// noinspection ES6UnusedImports
import _cname from './meta/CNAME';
// noinspection ES6UnusedImports
import _nojekyll from './meta/.nojekyll';

import Router from 'preact-router';
import {createHashHistory} from "history";
import Home from './routes/Home';
import Fisica from './routes/Fisica';
import VlDiGeometria from './routes/VlDiGeometria';
import MingwInstall from './routes/MingwInstall';
import Footer from './components/Footer';
import Statistica from './routes/Statistica';
import OttimizzazioneLineare from "./routes/OttimizzazioneLineare";
import BasiDiDati from './routes/BasiDiDati';
import CalcoloNumerico from './routes/CalcoloNumerico';
import ApprendimentoSistemiArtificiali from "./routes/ApprendimentoSistemiArtificiali";
import NetLogo from "./routes/NetLogo";
import AlgoritmiEStruttureDati from "./routes/AlgoritmiEStruttureDati";
import {useState} from "preact/hooks";
import CurrentPage from './contexts/CurrentPage';
import Link from "./components/Link";

// noinspection JSUnusedGlobalSymbols
export default function(props) {
	let [currentPage, setCurrentPage] = useState(window.location.hash.substr(1));
	const onPageChange = (event) => {
		setCurrentPage(event.url);
	};

	return (
		<CurrentPage.Provider value={currentPage}>

		<div id="app" class={theme.bluelib}>
			<h1>
				<Link href={"/"} icon={false}>Appuntiweb</Link> di <Link href={"https://steffo.eu"}>Steffo</Link>
			</h1>
			<Router history={createHashHistory()} onChange={onPageChange}>
				<Home path="/"/>
				<Fisica path="/fisica"/>
				<VlDiGeometria path="/vldigeometria"/>
				<MingwInstall path="/mingwinstall"/>
				<Statistica path="/statistica"/>
				<OttimizzazioneLineare path="/ottimizzazionelineare"/>
				<BasiDiDati path="/basididati"/>
				<CalcoloNumerico path="/calcolonumerico"/>
				<ApprendimentoSistemiArtificiali path="/apprendimento"/>
				<NetLogo path="/apprendimento/netlogo"/>
				<AlgoritmiEStruttureDati path="/algoritmiestrutturedati"/>
			</Router>
			<Footer/>
		</div>

		</CurrentPage.Provider>
	);
}
