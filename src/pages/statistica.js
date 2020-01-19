import style from './statistica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';
import Todo from '../components/todo';
import Theorem from "../components/theorem";
import Hypothesis from "../components/hypothesis";
import Thesis from "../components/thesis";
import Proof from "../components/proof";
import Example from "../components/example";

const r = String.raw;

export default class Statistica extends Component {
	render() {
	    /*
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
	     */
        return (
            <div style={style.statistica}>
                <h1>Statistica ed Elementi di Probabilità</h1>
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
                            Il prezzo che un individuo coerente riterrebbe equo per ricevere <b>1</b> nel caso l'evento si verificasse e <b>0</b> nel caso l'evento non si verificasse.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Linguaggio matematico"}>
                    <Panel title={"Spazio campionario"}>
                        <blockquote>
                            "omegone"
                        </blockquote>
                        <p>
                            L'<b>insieme</b> di tutti gli esiti possibili di un esperimento.
                        </p>
                        <p>
                            <Latex>{r`\Omega = \left \{ 1, 2, 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Esito"}>
                        <blockquote>
                            "omeghino"
                        </blockquote>
                        <p>
                            Un <b>elemento</b> dello spazio campionario.
                        </p>
                        <p>
                            <Latex>{r`\omega = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Evento"}>
                        <blockquote>
                            "e"
                        </blockquote>
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
                    <Panel title={"Not"}>
                        <blockquote>
                            "not e"
                        </blockquote>
                        <p>
                            Il <b>complementare</b> di un sottoinsieme.
                        </p>
                        <p>
                            <Latex>{r`\bar{E} = \left \{ 3, 4, 5, 6 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"And"}>
                        <blockquote>
                            "e intersecato effe"
                        </blockquote>
                        <p>
                            L'<b>intersezione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \left \{ 1 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Or"}>
                        <blockquote>
                            "e unito a effe"
                        </blockquote>
                        <p>
                            L'<b>unione</b> di più sottoinsiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cup F = \left \{ 1, 2, 3, 4 \right \}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Differenza"}>
                        <blockquote>
                            "e meno effe"
                        </blockquote>
                        <p>
                            <Latex>{r`E \setminus F = E \cap \bar{F}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Implicazione"}>
                        <blockquote>
                            "e contenuto in effe"
                        </blockquote>
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
                        <blockquote>
                            "e è impossibile"
                        </blockquote>
                        <p>
                            Un sottoinsieme <b>vuoto</b>.
                        </p>
                        <p>
                            <Latex>{r`E = \emptyset`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Mutua esclusione"}>
                        <blockquote>
                            "e ed effe si escludono mutualmente"
                        </blockquote>
                        <p>
                            La <b>disgiunzione</b> di due insiemi.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Famiglia degli eventi"}>
                        <blockquote>
                            "famiglia effe"
                        </blockquote>
                        <p>
                            I sottoinsiemi dello spazio campionario formano una <b>famiglia</b> di sottoinsiemi detta <i>famiglia degli eventi</i>.
                        </p>
                        <p>
                            <Latex>{r`\mathcal{F}`}</Latex>
                        </p>
                        <p>
                            Qualsiasi sottoinsieme appartenente a <Latex>{r`\mathcal{F}`}</Latex> è considerato un evento.
                        </p>
                    </Panel>
                    <Panel title={<span><Latex>{r`\sigma`}</Latex>-algebra</span>}>
                        <blockquote>
                            "sigma algebra"
                        </blockquote>
                        <p>
                            Se la famiglia degli eventi soddisfa questi tre requisiti, allora viene detta <i><Latex>{r`\sigma`}</Latex>-algebra</i>:
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
                <Split>
                    <Panel title={"Partizione"}>
                        <blockquote>
                            "la partizione e composta da e uno, e due, e tre..."
                        </blockquote>
                        <p>
                            Un insieme di esiti e eventi:
                        </p>
                        <ul>
                            <li><b>Finito</b>.</li>
                            <li>In cui tutti gli eventi hanno <b>probabilità diversa da 0</b>.</li>
                            <li>In cui tutti gli eventi sono <b>mutualmente esclusivi</b>.</li>
                            <li>In cui l'unione di tutti i suoi elementi <b>copre lo spazio campionario</b>.</li>
                        </ul>
                        <p>
                            La partizione <Latex>{r`E_i`}</Latex> è composta dagli eventi <Latex>{r`E_1`}</Latex>, <Latex>{r`E_2`}</Latex>, <Latex>{r`E_3`}</Latex>, fino a <Latex>{r`E_n`}</Latex>.
                        </p>
                        <Example>
                            Se lo spazio campionario fosse una torta, una sua partizione sarebbe l'insieme delle fette di uno dei modi in cui si potrebbe tagliare.
                        </Example>
                    </Panel>
                </Split>
                <Split title={"Assiomi della probabilità"}>
                    <Panel title={"Primo assioma della probabilità"}>
                        <p>
                            La probabilità di un evento è un numero tra 0 e 1.
                        </p>
                        <p>
                            <Latex>{r`\forall E \in \mathcal{F}, 0 \leq P(E) \leq 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Secondo assioma della probabilità"}>
                        <p>
                            La probabilità dello spazio campionario è sempre 1.
                        </p>
                        <p>
                            <Latex>{r`P(\Omega) = 1`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Terzo assioma della probabilità"}>
                        <p>
                            La probabilità dell'unione di eventi indipendenti è uguale alla somma delle loro probabilità.
                        </p>
                        <p>
                            <Latex>{r`P \left ( \bigcup_i E_i \right ) = \sum_i P ( E_i )`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Conseguenze degli assiomi"}>
                    <Panel title={"Probabilità di un evento negato"}>
                        <p>
                            La probabilità di un evento negato è uguale a 1 meno la probabilità dell'evento non negato.
                        </p>
                        <p>
                            <Latex>{r`P(\bar{E}) = 1 - P({E})`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Probabilità di un evento incluso"}>
                        <p>
                            La probabilità di un evento incluso in un altro è sempre minore o uguale alla probabilità dell'evento in cui è incluso.
                        </p>
                        <p>
                            <Latex>{r`F \subseteq E \implies P(F) \leq P(E)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Unione"}>
                        <p>
                            La probabilità di un evento unito a un altro è uguale alla somma delle probabilità dei due eventi meno la probabilità della loro intersezione.
                        </p>
                        <p>
                            <Latex>{r`P(E \cup F) = P(E) + P(F) - P(E \cap F)`}</Latex>
                        </p>
                        <Example>
                            Sommando le probabilità dei due eventi, l'intersezione viene contata due volte, e va quindi rimossa!
                        </Example>
                    </Panel>
                </Split>
                <Split title={"Spazi equiprobabili"}>
                    <Panel title={"Cosa sono?"}>
                        <p>
                            Spazi campionari in cui ci sono un numero finito di esiti e ogni esito ha la stessa probabilità di verificarsi.
                        </p>
                        <p>
                            <Latex>{r`P(E) = \frac{len(E)}{len(\Omega)}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Spazi equiprobabili geometrici"}>
                        <p>
                            Gli spazi campionari possono avere un numero infinito di esiti: sono <i>equiprobabili geometrici</i> se nessun esito è privilegiato rispetto agli altri.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Calcolo combinatorio"}>
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
                    </Panel>
                    <Panel title={"Permutazioni"}>
                        <p>
                            Estraggo <Latex>n</Latex> numeri e guardo in quanti ordini diversi li posso mettere.
                        </p>
                        <p>
                            <Latex>{r`\boldsymbol{P}_n = n!`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Probabilità condizionata"}>
                    <Panel title={"Eventi condizionati"}>
                        <blockquote>
                            "E dato F"
                        </blockquote>
                        <p>
                            La probabilità che si verifichi <Latex>E</Latex> sapendo che <b>si è già verificato</b> <Latex>F</Latex>.
                        </p>
                        <p>
                            <Latex>{r`P(E|F) = \frac{P(E \cap F)}{P(F)}`}</Latex>
                        </p>
                        <Example>
                            Ricorda vagamente le pipe di <code>bash</code>, però al contrario...
                        </Example>
                    </Panel>
                    <Panel title={"Eventi mutualmente esclusivi"}>
                        <p>
                            Se due eventi sono mutualmente esclusivi, entrambe le loro probabilità condizionate saranno uguali a 0.
                        </p>
                        <p>
                            <Latex>{r`E \cap F = \emptyset \Longleftrightarrow P(E|F) = P(F|E) = 0`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Regola della catena"}>
                        <p>
                            Si può sfruttare la formula inversa della probabilità condizionata per calcolare catene di intersezioni:
                        </p>
                        <p>
                            <Latex>{r`P(E_1 \cap \times \cap E_n) = P(E_1) \times P(E_2 | E_1) \times \dots \times P(E_n | E_1 \cap E_2 \cap \dots \cap E_{n-1})`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Legge delle alternative"}>
                    <Theorem title={"Teorema"}>
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
                                Essendo mutualmente esclusivi, le probabilità di tutti gli <Latex>E_i</Latex> possono essere sommate senza bisogno di sottrarvi l'intersezione:
                            </p>
                            <p>
                                <Latex>{r`\sum_i P(F \cap E_i) = P \left( \bigcup_i (F \cap E_i) \right)`}</Latex>
                            </p>
                            <p>
                                Essendo <Latex>E</Latex> una partizione di <Latex>{r`\Omega`}</Latex>, allora la unione di tutti gli eventi che la compongono riforma lo spazio campionario:
                            </p>
                            <p>
                                <Latex>{r`\bigcup_i ( F \cap E_i ) = F \cap \left( \bigcup_i E_i \right) = F \cap \Omega = F`}</Latex>
                            </p>
                        </Proof>
                    </Theorem>
                    <Panel title={"Legge condizionata delle alternative"}>
                        <p>
                            La legge delle alternative funziona anche quando ad essere partizionato è un <b>evento</b>:
                        </p>
                        <p>
                            <Latex>{r`P(F|G) = \sum_i P(F|E_i \cap G) \cdot P(E_i | G)`}</Latex>
                        </p>
                    </Panel>
                    <Theorem title={"Formula di Bayes"}>
                        <Hypothesis>
                            <ul>
                                <li><Latex>E_i</Latex> <b>partizione</b> di <Latex>{r`\Omega`}</Latex></li>
                                <li><Latex>{r`F`}</Latex> <b>evento</b> <Latex>{r`\in \Omega`}</Latex></li>
                            </ul>
                        </Hypothesis>
                        <Thesis>
                            <p>
                                <Latex>{r`P(E_h | F) = \frac{P(F | E_h) \cdot P(E_h)}{P(F)}`}</Latex>
                            </p>
                        </Thesis>
                        <Proof>
                            <p>
                                <Todo>TODO: ha un po' poco senso tbf</Todo>
                            </p>
                            <p>
                                Partiamo dalla definizione di probabilità condizionata:
                            </p>
                            <p>
                                <Latex>{r`P(E_h | F) \cdot P(F) = P(E_h \cap F) = P(F | E_h) \cdot P(E_h)`}</Latex>
                            </p>
                            <p>
                                Spostiamo al denominatore un pezzo:
                            </p>
                            <p>
                                <Latex>{r`P(E_h | F) = \frac{P(F | E_h) \cdot P(E_h)}{P(F)}`}</Latex>
                            </p>
                            <p>
                                Applichiamo la legge delle alternative sul denominatore:
                            </p>
                            <p>
                                <Latex>{r`P(E_h | F) = \frac{P(F | E_h) \cdot P(E_h)}{P(F)}`}</Latex>
                            </p>
                        </Proof>
                    </Theorem>
                </Split>
                <Split title={"Eventi indipendenti"}>
                    <Panel title={"Due eventi indipendenti"}>
                        <blockquote>
                            "eventi indipendenti a due a due"
                        </blockquote>
                        <p>
                            Se due eventi sono indipendenti, sapere che uno dei due si è verificato non influisce sulle probabilità che si sia verificato l'altro.
                        </p>
                        <p>
                            <Todo>TODO: ha una dimostrazione</Todo>
                        </p>
                        <p>
                            <Latex>{r`P(E \cap F) = P(E) \cdot P(F) \Longleftrightarrow P(E|F) = P(E) \Longleftrightarrow P(F|E) = P(F)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Più eventi indipendenti"}>
                        <blockquote>
                            "eventi indipendenti a tre a tre, a quattro a quattro, a cinque a cinque..."
                        </blockquote>
                        <p>
                            Si può verificare l'indipendenza di più eventi alla volta:
                        </p>
                        <p>
                            <Latex>{r`P(E \cap F \cap G) = P(E) \cdot P(F) \cdot P(G)`}</Latex>
                        </p>
                        <p>
                            Eventi indipendenti a due a due non sono per forza indipendenti a tre a tre, e viceversa.
                        </p>
                    </Panel>
                    <Panel title={"Famiglia di eventi indipendenti"}>
                        <p>
                            Un insieme di <Latex>n</Latex> eventi è una <i>famiglia di eventi indipendenti</i> se, preso un qualsiasi numero di eventi da essa, essi risulteranno indipendenti.
                        </p>
                        <Example>
                            Tutti gli eventi provenienti da essa saranno indipendenti sia a due a due, sia a tre a tre, sia a quattro a quattro, e così via!
                        </Example>
                    </Panel>
                </Split>
                <Split title={"Variabili aleatorie"}>
                    <Panel title={"Variabile aleatoria"}>
                        <p>
                            Una funzione che fa corrispondere un numero reale a ogni possibile esito dello spazio campionario. <Latex>{r`X(\omega) : \Omega \to \mathbb{R}`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={<Todo>Titolo?</Todo>}>
                        <p>
                            Ad ogni variabile aleatoria sono associati gli eventi <Latex>{r`A_t = \{ \omega | X(\omega) \leq t \}`}</Latex>, che contengono tutti gli esiti a cui la variabile aleatoria associa un valore minore o uguale a <Latex>t</Latex>.
                        </p>
                        <p>
                            Per definizione, tutte le variabili aleatorie devono rispettare questa condizione:
                        </p>
                        <p>
                            <Latex>{r`\forall t \in \mathbb{R}, A_t \in \mathcal{F}`}</Latex>
                        </p>
                        <Example>
                            All'aumentare di t, l'insieme conterrà sempre più elementi.
                        </Example>
                    </Panel>
                    <Panel title={"Supporto"}>
                        <blockquote>
                            "supporto di X"
                        </blockquote>
                        <p>
                            Il <b>codominio</b> della variabile aleatoria è il suo <i>supporto</i>.
                        </p>
                        <p>
                            Per indicare che un valore <Latex>x_0</Latex> appartiene al supporto di <Latex>X</Latex>, si usa la notazione <Latex>X \mapsto x_0</Latex>.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Densità"}>
                    <Panel title={"Funzione probabilità"}>
                        <p>
                            La <i>funzione probabilità</i> <Latex>{r`p_X : X \to [0, 1]`}</Latex> di una variabile aleatoria <b>discreta</b> <Latex>X</Latex> è la funzione che associa ad ogni esito la sua probabilità:
                        </p>
                        <p>
                            <Latex>{r`p_X (x) = \begin{cases}
                            P([X = x]) \quad se\ X \mapsto x \\
                            0 \qquad \qquad \quad se\ X \not\mapsto x
                            \end{cases}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Funzione densità"}>
                        <p>
                            La <i>funzione densità</i> <Latex>{r`f_X : X \to [0, 1]`}</Latex> di una variabile aleatoria <b>continua</b> <Latex>X</Latex> è l'equivalente continuo della funzione probabilità:
                        </p>
                        <p>
                            <Latex>{r`P([a < X \leq b]) = \int_a^b f_X (x) dx`}</Latex>
                        </p>
                        <p>
                            A differenza della funzione probabilità, è possibile che la funzione densità <b>non esista</b> per una certa variabile aleatoria.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Funzione di ripartizione"}>
                    <Panel title={"Definizione"}>
                        <p>
                            Ogni variabile aleatoria ha una <i>funzione di ripartizione</i> <Latex>{r`F_X : \mathbb{R} \to [0, 1]`}</Latex> associata, che rappresenta la probabilità che la variabile aleatoria assuma un valore minore o uguale a <Latex>t</Latex>:
                        </p>
                        <p>
                            Si può dire che essa rappresenti la probabilità dell'evento <Latex>{r`A_t`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`F_X (t) = P(A_t) = \begin{cases}
                            \sum_{x_i \leq t} p_X (x_i) \quad nel\ discreto\\
                            \\
                            \int_{-\infty}^t f_X (x) dx \quad nel\ continuo
                            \end{cases}`}</Latex>
                        </p>
                        <p>
                            <Todo>TODO: sintassi del libro che non mi piace</Todo>
                        </p>
                    </Panel>
                    <Panel title={"Proprietà della funzione"}>
                        <ul>
                            <li>È sempre <b>monotona crescente</b> (non strettamente).</li><br/>
                            <li>Vale <b>0</b> a <Latex>-\infty</Latex> e <b>1</b> a <Latex>+\infty</Latex>.</li><br/>
                            <li>È <b>continua da destra</b>: <Latex>{r`\forall x_0 \in \mathbb{R}, F_X (x_0) = \lim_{t \to x^+_0} F_X (t)`}</Latex></li>
                        </ul>
                    </Panel>
                    <Panel title={"Probabilità di un valore"}>
                        <p>
                            Possiamo usare la funzione di ripartizione per calcolare la probabilità di un certo valore reale:
                        </p>
                        <p>
                            <Latex>{r`P([X = x_0]) = \lim_{t \to x^+_0} F_X (t) - \lim_{t \to x^-_0} F_X (t)`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Trasformazioni di variabili aleatorie"}>
                    <Panel title={"Nel discreto"}>
                        <p>
                            Nel discreto basta abbinare un nuovo valore a ogni valore della variabile originale.
                        </p>
                    </Panel>
                    <Theorem title={"Nel continuo (invertibile)"}>
                        <Hypothesis>
                            <ul>
                                <li><Latex>{r`X`}</Latex> è una variabile aleatoria continua</li>
                                <li><Latex>{r`Y = g(X)`}</Latex> è invertibile</li>
                            </ul>
                        </Hypothesis>
                        <Thesis>
                            <p>
                                <Latex>{r`f_Y (y) = f_X ( g^{-1} (y) ) \cdot \left| g' (y) \right|`}</Latex>
                            </p>
                        </Thesis>
                        <Proof>
                            <p>
                                <Todo>TODO: è spiegata male!</Todo>
                            </p>
                            <p>
                                Per semplicità, assumiamo che <Latex>g</Latex> sia crescente.
                            </p>
                            <p>
                                Allora possiamo scrivere la funzione di ripartizione di <Latex>Y</Latex> in termini di <Latex>f_X</Latex>:
                            </p>
                            <p>
                                <Latex>{r`F_Y (y) = P( Y \leq y ) = P( g(X) \leq y ) = \int_{g(x) \leq y} f_X (x) dx`}</Latex>
                            </p>
                            <p>
                                Integriamo per sostituzione <Latex>{r`x = h(t)`}</Latex>:
                            </p>
                            <p>
                                <Latex>{r`\int_{g(x) \leq y} f_X (x) dx = \int_{t \leq y} f_X ( h(t) ) h'(t) dt`}</Latex>
                            </p>
                        </Proof>
                    </Theorem>
                    <Panel title={"Nel... digitale"}>
                        <p>
                            Trasformare variabili aleatorie è molto utile nell'informatica per creare distribuzioni partendo da una funzione <a href={"https://docs.python.org/3/library/random.html#random.random"}><code>random()</code></a> che restituisce numeri da 0 a 1 con una distribuzione lineare.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Informazioni delle variabili aleatorie"}>
                    <Panel title={"Valore medio"}>
                        <p>
                            Ogni variabile aleatoria che ha una <b>funzione di ripartizione</b> e un <b>supporto finito</b> ha anche un <i>valore medio</i> (o <i>valore atteso</i>):
                        </p>
                        <p>
                            <Latex>{r`E(X) = \int_0^{+infty} (1 - F_X (t)) dt - \int_{-\infty}^{0} F_X (t) dt`}</Latex>
                        </p>
                        <p>
                            Nel discreto, si può calcolare più facilmente con:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \sum_i P(X = x_i) \cdot x_i`}</Latex>
                        </p>
                        <p>
                            <Todo>TODO: dimostrazione</Todo>
                        </p>
                        <p>
                            Nel continuo, si può calcolare più facilmente con:
                        </p>
                        <p>
                            <Latex>{r`E(X) = \int_{-\infty}^{+\infty} f_X (x) \cdot x \cdot dx`}</Latex>
                        </p>
                        <p>
                            <Todo>TODO: dimostrazione</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Moda"}>
                        <p>
                            Valore per cui la <b>funzione probabilità</b> o <b>funzione densità</b> è <b>massima</b>.
                        </p>
                    </Panel>
                    <Panel title={"Quantili"}>
                        <p>
                            Il <i>quantile</i> <Latex>{r`x_{\alpha}`}</Latex> di ordine <Latex>{r`0 \leq \alpha \leq 1`}</Latex> della variabile aleatoria <Latex>X</Latex> è il più piccolo numero tale che:
                        </p>
                        <p>
                            <Latex>
                                {r`P([X < x_{\alpha} \leq \alpha \leq P([X \leq x_{\alpha}])`}
                            </Latex>
                        </p>
                        <p>

                        </p>
                        <p>
                            Il quantile di ordine 0.5 <Latex>{r`x_{0.5}`}</Latex> è detto <i>mediana</i>.
                        </p>
                        <p>
                            I quantili di ordine 0.25 <Latex>{r`x_{0.25}`}</Latex> e 0.75 <Latex>{r`x_{0.75}`}</Latex> sono detti <i>quartili</i>.
                        </p>
                        <p>
                            I quantili di ordine <Latex>{r`\frac{n}{100}`}</Latex> sono detti <i><Latex>n</Latex>-esima percentile</i>.
                        </p>
                    </Panel>
                    <Panel title={"Varianza"}>
                        <p>
                            È un valore che indica quanto la variabile aleatoria si discosta generalmente dal valore medio:
                        </p>
                        <p>
                            <Latex>{r`Var(X) = E( (X - E(X) )^2 ) = E ( X^2 ) - (E(X))^2`}</Latex>
                        </p>
                        <p>
                            <Todo>TODO: dimostrazione per la formula alternativa</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Disuguaglianze notevoli"}>
                    <Panel title={"Disuguaglianza di Markov"}>
                        <p>
                            <Todo>TODO: a cosa serve...?</Todo>
                        </p>
                        <p>
                            <Latex>{r`\forall K > 0, P([g(X) \geq K]) \leq \frac{E(g(X))}{K}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Disuguaglianza di Cebicev"}>
                        <p>
                            <Todo>TODO: a cosa serve...?</Todo>
                        </p>
                        <p>
                            <Latex>{r`\forall \epsilon > 0, P([\left| X - E(X) \right| \leq \epsilon]) \leq \frac{Var(X)}{\epsilon^2}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Momento di una variabile aleatoria"}>
                        <p>
                            <Todo>TODO</Todo>
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}