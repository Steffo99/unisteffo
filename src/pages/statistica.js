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
                <Split title={"Linguaggio matematico"}>
                    <Panel title={"Spazio campionario"}>
                        <p>
                            L'<b>insieme</b> di tutti gli esiti possibili di un esperimento.
                        </p>
                        <p>
                            <Latex>{r`\Omega = \left \{ 1, 2, 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Esito"}>
                        <p>
                            Uno dei possibili risultati di un esperimento.
                        </p>
                        <p>
                            E' un <b>elemento</b> dello spazio campionario.
                        </p>
                        <p>
                            <Latex>{r`\omega = 1`}</Latex> "omeghino"
                        </p>
                    </Panel>
                    <Panel title={"Evento"}>
                        <p>
                            Un <b>sottoinsieme</b> dello spazio campionario.
                        </p>
                        <p>
                            <Latex>{r`E = \left \{ 1, 2 \right \}`}</Latex>
                        </p>
                        <p>
                            Lo spazio campionario stesso è un <b>evento certo</b>.
                        </p>
                    </Panel>
                    <Panel title={"NOT"}>
                        <p>
                            Il <b>complementare</b> di un sottoinsieme.
                        </p>
                        <p>
                            <Latex>{r`\bar{E} = \left \{ 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"AND"}>
                        <p>
                            L'<b>intersezione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \left \{ 1 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"OR"}>
                        <p>
                            L'<b>unione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cup F = \left \{ 1, 2, 3, 4 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Differenza"}>
                        <p>
                            <Latex>{r`E \setminus F = E \cap \bar{F}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Implicazione"}>
                        <p>
                            L'<b>inclusione</b> del primo insieme in un altro.
                        </p>
                        <p>
                            <Latex>{r`E \subseteq F`}</Latex>
                        </p>
                        <p>
                            Se si verifica <Latex>E</Latex>, allora si verifica anche <Latex>F</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Evento impossibile"}>
                        <p>
                            Un sottoinsieme <b>vuoto</b>.
                        </p>
                        <p>
                            <Latex>{r`I = \emptyset`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Mutua esclusione"}>
                        <p>
                            La <b>disgiunzione</b> di due insiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Famiglia degli eventi"}>
                    <Panel title={"Famiglia"}>
                        <p>
                            I sottoinsiemi dello spazio campionario formano una <b>famiglia</b> di sottoinsiemi detta <i>famiglia degli eventi</i>.
                        </p>
                        <p>
                            <Latex>{r`\mathcal{F}`}</Latex> ("effe")
                        </p>
                        <p>
                            Qualsiasi sottoinsieme appartenente a <Latex>{r`\mathcal{F}`}</Latex> è considerato un evento.
                        </p>
                    </Panel>
                    <Panel title={<span><Latex>{r`\sigma`}</Latex>-algebra</span>}>
                        <p>
                            Se la famiglia degli eventi soddisfa questi tre requisiti, allora viene detta <span><Latex>{r`\sigma`}</Latex>-algebra</span>:
                        </p>
                        <ol>
                            <li>
                                Lo spazio campionario è un evento: <Latex>{r`\Omega \in \mathcal{F}`}</Latex>
                            </li>
                            <li>
                                Se un sottoinsieme è un evento, allora anche il suo complementare lo è: <Latex>{r`E \in \mathcal{F} \implies \bar{E} \in \mathcal{F}`}</Latex>
                            </li>
                            <li>
                                Se due sottoinsiemi sono eventi, allora lo sono anche la loro unione e intersezione: <Latex>{r`(E, F) \in \mathcal{F} \implies (E \cup F, E \cap F) \in \mathcal{F}`}</Latex>
                            </li>
                        </ol>
                        <p>
                            Un esempio: <Latex>{r`E \in \mathcal{F} \implies \mathcal{F} = \{ \emptyset, E, \bar{E}, \Omega \}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Tipi di probabilità"}>
                    <Panel title={"Classica"}>
                        <p>
                            <Latex>{r`P(E) = \frac{casi\ favorevoli}{casi\ possibili}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Frequentista"}>
                        <p>
                            <Latex>{r`P(E) = \frac{successi}{prove\ totali}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Soggettiva"}>
                        <p>
                            <Todo>TODO: Trovare un'espressione decente</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Assiomi della probabilità"}>
                    <Panel title={"Primo"}>
                        <p>
                            La probabilità di un evento è un numero tra 0 e 1.
                        </p>
                        <p>
                            <Latex>{r`\forall E \in \mathcal{F}, 0 \leq P(E) \leq 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Secondo"}>
                        <p>
                            La probabilità dello spazio campionario è sempre 1.
                        </p>
                        <p>
                            <Latex>{r`P(\Omega) = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Terzo"}>
                        <p>
                            La probabilità dell'unione di eventi indipendenti è uguale alla somma delle loro probabilità.
                        </p>
                        <p>
                            <Latex>{r`P \left ( \bigcup_i E_i \right ) = \sum_i P ( E_i )`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Conseguenze degli assiomi"}>
                    <Panel title={"NOT"}>
                        <p>
                            <Latex>{r`P(\bar{E}) = 1 - P(\bar{E})`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Inclusione"}>
                        <p>
                            <Latex>{r`F \subseteq E \implies P(F) \leq P(E)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Unione"}>
                        <p>
                            <Latex>{r`P(E \cup F) = P(E) + P(F) - P(E \cap F)`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Spazi equiprobabili"}>
                    <Panel title={"Cosa sono?"}>
                        <p>
                            Spazi campionari in cui ci sono un numero finito di esiti e ogni esito ha la stessa probabilità di verificarsi.
                        </p>
                    </Panel>
                    <Panel title={"Probabilità"}>
                        <p>
                            <Latex>{r`P(E) = \frac{len(E)}{len(\Omega)}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Disposizioni"}>
                        <p>
                            Estraggo un numero, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                    </Panel>
                    <Panel title={"Disposizioni con ripetizione"}>
                        <p>
                            Estraggo un numero, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni"}>
                        <p>
                            Estraggo un numero, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni con ripetizione"}>
                        <p>
                            Estraggo un numero, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                    </Panel>
                    <Panel title={"Permutazioni"}>
                        <p>
                            Estraggo N numeri e guardo in quanti ordini diversi li posso mettere.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}