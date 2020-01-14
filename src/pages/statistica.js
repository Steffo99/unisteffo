import style from './statistica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';
import Plus from '../components/plus';
import Minus from '../components/minus';
import Todo from '../components/todo';

const r = String.raw;

export default class Statistica extends Component {
	render() {
        return (
            <div style={style.statistica}>
                <h1>Statistica ed Elementi di Probabilità</h1>
                <Split title={"Popolazioni"}>
                    <Panel title={"Popolazione"} id={"popolazione"}>
                        <p>
                            Gruppo <b>intero</b> di oggetti di cui si cercano informazioni.
                        </p>
                    </Panel>
                    <Panel title={"Popolazione tangibile"}>
                        <p>
                            Popolazione finita di oggetti concreti che possono essere campionati ciascuno solo una volta.
                        </p>
                    </Panel>
                    <Panel title={"Popolazione concettuale"}>
                        <p>
                            Popolazione di valori ottenuti da prove sperimentali indipendenti ripetute più volte.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Campionamento"}>
                    <Panel title={"Campione"}>
                        <p>
                            Sottoinsieme della <a href={"#popolazione"}>popolazione</a> che contiene gli oggetti che si sono osservati.
                        </p>
                    </Panel>
                    <Panel title={<i>Simple random sample</i>}>
                        <p>
                            Campione di una data dimensione in cui qualsiasi selezione di <i>n</i> elementi ha la stessa probabilità di costituire il campione.
                        </p>
                    </Panel>
                    <Panel title={<i>Sample of convenience</i>}>
                        <p>
                            Campione ottenuto in un modo casuale non ben definito.
                        </p>
                    </Panel>
                    <Panel title={<i>Sample with replacement</i>}>
                        <p>
                            Campione ottenuto sostituendo nella popolazione gli elementi estratti con dei nuovi elementi.
                        </p>
                        <p>
                            Dire che un campione è ottenuto <i>with replacement</i> è equivalente a dire che la popolazione che si sta campionando è infinita, e quindi che tutti gli elementi sono indipendenti.
                        </p>
                    </Panel>
                    <Panel title={"Campione pesato"}>
                        <p>
                            Campione ottenuto da una popolazione in cui certi elementi hanno più probabilità di essere stati selezionati di altri.
                        </p>
                    </Panel>
                    <Panel title={<i>Stratified random sample</i>}>
                        <p>
                            Campione ottenuto da un sottoinsieme della popolazione detto <i>strato</i>.
                        </p>
                    </Panel>
                    <Panel title={<i>Cluster sample</i>}>
                        <p>
                            Campione ottenuto selezionando più <i>cluster</i> di elementi alla volta.
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={<i>Sampling variation</i>}>
                        <p>
                            Differenza di informazioni presente tra due campioni diversi della stessa popolazione.
                        </p>
                    </Panel>
                    <Panel title={"Indipendenza"}>
                        <p>
                            Gli elementi in un campione sono indipendenti se gli elementi estratti in precedenza non influsicono <small>significativamente</small> sulle probabilità di estrazione dell'elemento successivo.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Tipi di prove sperimentali"}>
                    <Panel title={"A campione singolo"}>
                        <p>
                            Esperimento in cui c'è una sola popolazione da cui vengono estratti campioni.
                        </p>
                        <p>
                            Serve per verificare delle condizioni.
                        </p>
                    </Panel>
                    <Panel title={"Multicampione"}>
                        <p>
                            Esperimento in cui sono presenti più popolazioni (aventi caratteristiche differenti una dall'altra dette <i>fattori</i>) da cui vengono estratti campioni.
                        </p>
                        <p>
                            Serve per capire quali fattori influenzano il risultato dell'esperimento.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Tipi di dato"}>
                    <Panel title={<span>Numerico<small> o quantitativo</small></span>}>
                        Il dato descrive un valore numerico relativo all'elemento, come ad esempio una quantità fisica.
                    </Panel>
                    <Panel title={<span>Categorico<small> o qualitativo</small></span>}>
                        Il dato indica una categoria a cui appartiene l'elemento, come ad esempio il suo colore.
                    </Panel>
                </Split>
            </div>
        )
	}
}