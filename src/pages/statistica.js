import style from './statistica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';
import Plus from '../components/plus';
import Minus from '../components/minus';
import Todo from '../components/todo';
import Theorem from "../components/theorem";
import Hypothesis from "../components/hypothesis";
import Thesis from "../components/thesis";
import Proof from "../components/proof";

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
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{D}_{n, k} = \frac{n!}{(n - k)!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Disposizioni con ripetizione"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Tengo conto</b> dell'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{D}^{r}_{n, k} = n^k`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>tengo fuori dal sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{C}_{n, k} = \binom{n}{k} = \frac{n!}{(k)! \cdot (n - k)!}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Combinazioni con ripetizione"}>
                        <p>
                            Estraggo un numero, da un sacchetto con <Latex>n</Latex> numeri, mi segno che numero ho estratto e lo <b>rimetto nel sacchetto</b>. Ripeto per <Latex>k</Latex> volte.
                        </p>
                        <p>
                            <b>Non mi interessa</b> l'ordine in cui ho estratto i numeri.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{C}^{r}_{n, k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{(k)! \cdot (n - 1)!}`}</Latex>
                        </p>
                        <p>
                            <Todo>TODO: Controllare la formula.</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Permutazioni"}>
                        <p>
                            Estraggo <Latex>n</Latex> numeri e guardo in quanti ordini diversi li posso mettere.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{P}_n = n!`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Spazi equiprobabili geometrici"}>
                        <p>
                            Gli spazi campionari possono avere un numero infinito di esisti: si ha equiprobabilità se nessun esito è privilegiato rispetto agli altri.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Probabilità condizionata"}>
                    <Panel title={<span>E dato F</span>}>
                        <p>
                            La probabilità di un evento <Latex>E</Latex> dato un altro evento <Latex>F</Latex> indica la probabilità che si verifichi <Latex>E</Latex> sapendo che <b>si è già verificato</b> <Latex>F</Latex>.
                        </p>
                        <p>
                            <Latex>{r`P(E|F) = \frac{P(E \cap F)}{P(F)}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Eventi indipendenti"}>
                        <p>
                            Se due eventi sono indipendenti, sapere che uno dei due si è verificato non influisce sulle probabilità che si sia verificato l'altro.
                        </p>
                        <p>
                            <Latex>{r`E, F\ indipendenti\ \Longleftrightarrow P(E|F) = P(E), P(F|E) = P(F)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Eventi mutualmente esclusivi"}>
                        <p>
                            Se due eventi sono mutualmente esclusivi, entrambe le loro probabilità condizionate saranno uguali a 0.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset \Longleftrightarrow P(E|F) = P(F|E) = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Regola della catena"}>
                        <p>
                            Si può sfruttare la formula inversa della probabilità condizionata per calcolare catene di intersezioni:
                        </p>
                        <p>
                            <Latex>{r`P(E_1 \cap \times \cap E_n) = P(E_1) \times P(E_2 | E_1) \times \dots \times P(E_n | E_1 \cap E_2 \cap \dots \cap E_{n-1})`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Partizioni"}>
                        <p>
                            E' una partizione dello spazio campionario un insieme di eventi:
                        </p>
                        <ul>
                            <li><b>Finito</b>.</li>
                            <li>In cui tutti gli eventi hanno <b>probabilità diversa da 0</b>.</li>
                            <li>In cui tutti gli eventi sono <b>mutualmente esclusivi</b>.</li>
                            <li>L'unione di tutti gli eventi <b>copre lo spazio campionario</b>.</li>
                        </ul>
                        <p>
                            Se lo spazio campionario fosse una torta, una sua partizione sarebbe l'insieme delle fette di uno dei modi in cui si potrebbe tagliare.
                        </p>
                        <p>
                            La partizione <Latex>{r`E_i`}</Latex> è composta dagli eventi <Latex>{r`E_1`}</Latex>, <Latex>{r`E_2`}</Latex>, <Latex>{r`E_3`}</Latex>, fino a <Latex>{r`E_n`}</Latex>.
                        </p>
                    </Panel>
                    <Theorem title={"Legge delle alternative"}>
                        <Hypothesis>
                            <ul>
                                <li><Latex>E_i</Latex> <b>partizione</b> di <Latex>{r`\Omega`}</Latex></li>
                                <li><Latex>{r`F`}</Latex> <b>evento</b> <Latex>{r`\in \Omega`}</Latex></li>
                            </ul>
                        </Hypothesis>
                        <Thesis>
                            <p>
                                La probabilità che si verifichi un evento è pari alla somma delle probabilità dell'evento stesso dati tutti gli eventi di una partizione.
                            </p>
                            <p>
                                <Latex>{r`P(F) = \sum_{i} P(F|E_i) \cdot P(E_i)`}</Latex>
                            </p>
                        </Thesis>
                        <Proof>
                            <p>
                                Per la definizione di probabilità condizionata:
                            </p>
                            <p>
                                <Latex>{r`P(F|E_i) \cdot P(E_i) = P(F \cap E_i)`}</Latex>
                            </p>
                            <p>
                                Essendo parte di una partizione, tutti gli <Latex>E_i</Latex> sono distinti:
                            </p>
                            <p>
                                <Latex>{r`\forall i, \exists! E_i`}</Latex>
                            </p>
                            <p>
                                Essendo mutualmente esclusivi, le probabilità di tutti gli <Latex>E_i</Latex> possono essere sommate:
                            </p>
                            <p>
                                <Latex>{r`\sum_i P(F \cap E_i) = P \left( \bigcup_i (F \cap E_i) \right)`}</Latex>
                            </p>
                            <p>
                                Essendo una partizione di <Latex>{r`\Omega`}</Latex>, allora la loro unione lo forma:
                            </p>
                            <p>
                                <Latex>{r`\bigcup_i ( F \cap E_i ) = F \cap \left( \bigcup_i E_i \right) = F \cap \Omega = F`}</Latex>
                            </p>
                        </Proof>
                    </Theorem>
                </Split>
                <Split>
                    <Panel title={"Legge condizionata delle alternative"}>
                        <p>
                            La legge delle alternative funziona anche per gli eventi, non solo per <Latex>{r`\Omega`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`P(F|G) = \sum_i P(F|E_i \cap G) \cdot P(E_i | G)`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Theorem title={"Formula di Bayes"}>
                        <Hypothesis>

                        </Hypothesis>
                        <Thesis>

                        </Thesis>
                        <Proof>

                        </Proof>
                    </Theorem>
                </Split>
            </div>
        )
	}
}