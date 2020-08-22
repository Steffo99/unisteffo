import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let Sentry = null;
if (process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...")
	require("preact/debug");
} else if (process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...")
	Sentry = require("@sentry/browser");
	// noinspection JSUnresolvedVariable
	Sentry.init({
		dsn: "https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500",
		release: process.env.RELEASE,
		environment: "production",
		beforeSend(event, hint) {
			if (event.exception) {
				Sentry.showReportDialog({eventId: event.event_id});
			}
			return event;
		}
	});
}

// Import debugging tools
// noinspection ES6UnusedImports
import "bluelib/dist/index.css";
import './meta/manifest.json';
import './meta/CNAME';
import './meta/.nojekyll';
import './meta/favicon.ico';

import Router from 'preact-router';
import {createHashHistory} from "history";
import {BasicContainer, Bluelib, BoxColors, CurrentPage, LatexRenderColor, Panel, Todo} from "bluelib";
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
import Link from "./components/Link";
import RipassoDiAlgebraLineare from "./routes/RipassoDiAlgebraLineare";
import {faPrint} from "@fortawesome/free-solid-svg-icons";

// noinspection JSUnusedGlobalSymbols
export default function (props) {
    let [currentPage, setCurrentPage] = useState(window.location.hash.substr(1));
    const onPageChange = (event) => {
        setCurrentPage(event.url);
    };

    let [latexColor, setLatexColor] = useState("White");

    function stampa() {
        setLatexColor("Black");
        print();
        setLatexColor("White");
    }

    /*
    <Panel color={BoxColors.LIME} title={"NOVITÀ: Stampa pagina"}>
        <ul>
            <li>
                Per stampare la pagina, <button onClick={setLatexColor("Black")}>cambia colore delle
                formule a Nero</button>, poi clicca <button onClick={stampa()}>Stampa</button>.
            </li>
            <li>
                Per riportare la pagina alla normalità, <button
                onClick={setLatexColor("White")}>cambia colore delle formule a Bianco</button>.
            </li>
        </ul>
    </Panel>
     */

    return (
        <CurrentPage.Provider value={currentPage}>
            <LatexRenderColor.Provider value={latexColor}>

                <Bluelib>
                    <h1>
                        <Link href={"/"} icon={false}>Appuntiweb</Link> di <Link
                        href={"https://steffo.eu"}>Steffo</Link>
                    </h1>
                    <Panel>
                        <button onClick={stampa}><FontAwesomeIcon icon={faPrint}/> Stampa</button>
                        <Todo>TODO: Non funziona ancora come dovrebbe.</Todo>
                    </Panel>
                    <BasicContainer>
                        <Router history={createHashHistory()} onChange={onPageChange}>
                            <Home path="/"/>
                            <Fisica path="/fisica"/>
                            <VlDiGeometria path="/vldigeometria"/>
                            <MingwInstall path="/mingwinstall"/>
                            <Statistica path="/statistica"/>
                            <OttimizzazioneLineare path="/ottimizzazionelineare"/>
                            <BasiDiDati path="/basididati"/>
                            <CalcoloNumerico path="/calcolonumerico"/>
                            <RipassoDiAlgebraLineare path="/calcolonumerico/ripassodialgebralineare"/>
                            <ApprendimentoSistemiArtificiali path="/apprendimento"/>
                            <NetLogo path="/apprendimento/netlogo"/>
                            <AlgoritmiEStruttureDati path="/algoritmiestrutturedati"/>
                            <Panel default color={BoxColors.RED} title={"Errore"}>Pagina non trovata.</Panel>
                        </Router>
                    </BasicContainer>
                    <Footer/>
                </Bluelib>

            </LatexRenderColor.Provider>
        </CurrentPage.Provider>
    );
}
