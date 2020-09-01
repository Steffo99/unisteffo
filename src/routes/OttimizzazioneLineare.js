import {
    BaseLink,
    BLatex,
    ILatex,
    Image,
    Latex,
    LatexDefaultInline,
    Panel,
    PLatex,
    Section,
    TablePanel,
    Timer,
    Todo
} from "bluelib";
import Example from "../components/Example";
import Empty from "../components/OttimizzazioneLineare/Empty";
import Unbounded from "../components/OttimizzazioneLineare/Unbounded";
import Finite from "../components/OttimizzazioneLineare/Finite";
import Min from "../components/OttimizzazioneLineare/Min";
import Max from "../components/OttimizzazioneLineare/Max";
import Plus from "../components/Fisica/Plus";
import Minus from "../components/Fisica/Minus";
import ExampleBoxColor from "../components/ExampleBoxColor";
import {Link} from "preact-router";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Ottimizzazione lineare intera</h1>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:stefano.novellani@unimore.it"}>Prof. Stefano Novellani</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Scritto"}>
                    <p>
                        Uno scritto con tre domande:
                    </p>
                    <ul>
                        <li>Progettazione concettuale e logica</li>
                        <li>Formulazione interrogazione</li>
                        <li>Una domanda tra:
                            <ul>
                                <li>Studio dato derivato</li>
                                <li>Progettazione fisica</li>
                                <li>Tecnologia database</li>
                            </ul>
                        </li>
                    </ul>
                </Panel>
            </Section>
            <LatexDefaultInline.Provider value={false}>
                <Section title={"Glossario"}>
                    <TablePanel>
                        <thead>
                        <tr>
                            <th><abbr title={"Vettore / matrice"}>v</abbr></th>
                            <th><abbr title={"Elemento singolo"}>s</abbr></th>
                            <th>Significato</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Latex>{r`\mathbf{x}`}</Latex></td>
                            <td><Latex>{r`x_i`}</Latex></td>
                            <td>Incognite</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{s}`}</Latex></td>
                            <td><Latex>{r`s_i`}</Latex></td>
                            <td>Variabili slack</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{c}`}</Latex></td>
                            <td><Latex>{r`c_i`}</Latex></td>
                            <td>Coefficienti della funzione obiettivo</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{A}`}</Latex></td>
                            <td><Latex>{r`a_{ij}`}</Latex></td>
                            <td>Coefficienti dei vincoli</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{b}`}</Latex></td>
                            <td><Latex>{r`b_i`}</Latex></td>
                            <td>Termini noti dei vincoli</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{y}`}</Latex></td>
                            <td><Latex>{r`y_i`}</Latex></td>
                            <td>Incognite artificiali</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{u}`}</Latex></td>
                            <td><Latex>{r`u_i`}</Latex></td>
                            <td>Coefficienti di rilassamento</td>
                        </tr>
                        <tr>
                            <td/>
                            <td><Latex>{r`c_0`}</Latex></td>
                            <td>Valore ottimo di un problema</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{x}_B`}</Latex></td>
                            <td/>
                            <td>Incognite in base</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{c}_B`}</Latex></td>
                            <td/>
                            <td>Coefficienti della funzione obiettivo delle variabili in base</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{B}`}</Latex></td>
                            <td/>
                            <td>Coefficienti dei vincoli delle variabili in base</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{x}_F`}</Latex></td>
                            <td/>
                            <td>Incognite fuori base</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{c}_F`}</Latex></td>
                            <td/>
                            <td>Coefficienti della funzione obiettivo delle variabili fuori base</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{F}`}</Latex></td>
                            <td/>
                            <td>Coefficienti dei vincoli delle variabili fuori base</td>
                        </tr>
                        </tbody>
                    </TablePanel>
                    <TablePanel>
                        <thead>
                        <tr>
                            <th>Simboli</th>
                            <th>Significato</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Latex>{r`\mathbf{c}^T \mathbf{x}`}</Latex></td>
                            <td>Soluzione del problema</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{A} \mathbf{x} = \mathbf{b}`}</Latex></td>
                            <td>Vincoli in forma standard</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`z(\dots)`}</Latex></td>
                            <td>Funzione obiettivo</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{u}^T \mathbf{b}`}</Latex></td>
                            <td>Soluzione del problema duale</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\mathbf{u}^T \mathbf{A} = \mathbf{c}^T`}</Latex></td>
                            <td>Vincoli del problema duale in forma standard</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\lfloor x \rfloor`}</Latex></td>
                            <td>Arrotondamento per difetto di x</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`\lceil x \rceil`}</Latex></td>
                            <td>Arrotondamento per eccesso di x</td>
                        </tr>
                        <tr>
                            <td><Latex>{r`x - \lfloor x \rfloor`}</Latex></td>
                            <td>Parte frazionaria di x (se non è negativo)</td>
                        </tr>
                        </tbody>
                    </TablePanel>
                </Section>
            </LatexDefaultInline.Provider>
            <Section title={"Problemi di ottimizzazione lineare"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Problemi che cercano di <Min>minimizzare</Min>/<Max>massimizzare</Max> il valore di una <i>funzione
                        obiettivo</i> le cui incognite sono sottoposte a un <b>sistema di <i>vincoli</i></b>.
                    </p>
                    <p>
                        Spesso sono detti anche <i>problemi di <abbr title={"Linear Programming"}>LP</abbr></i>.
                    </p>
                </Panel>
                <Panel title={"Funzione obiettivo"}>
                    <p>
                        La funzione da <Min>minimizzare</Min>/<Max>massimizzare</Max>.
                    </p>
                    <p>
                        Il vettore dei suoi coefficienti è detto <Latex>{r`\mathbf{c}`}</Latex>, mentre quello delle sue
                        incognite <Latex>{r`\mathbf{x}`}</Latex>.
                    </p>
                    <p>
                        In genere, la funzione obiettivo è scritta in questa forma:
                    </p>
                    <p>
                        <Latex>{r`z(\mathbf{x}) = c_1 \cdot x_1 + c_2 \cdot x_2 + \dots + c_n \cdot x_n`}</Latex>
                    </p>
                </Panel>
                <Panel title={"Gradiente"}>
                    <p>
                        <b>Funzione</b> della funzione obiettivo che restituisce la direzione del suo aumento più
                        veloce.
                    </p>
                    <p>
                        <Latex>{r`\nabla (f) = \frac{d f}{d x_1} I_1 + \frac{d f}{d x_2} I_2 + \frac{d f}{d x_n} I_n`}</Latex>
                    </p>
                    <Example>
                        La matrice <Latex>{r`\mathbf{I}`}</Latex> è la matrice identità.
                    </Example>
                    <Example>
                        Se la funzione obiettivo è <Latex>z = 2w + 3x + 4y</Latex>, il suo gradiente
                        è <Latex>{r`\nabla z = (2, 3, 4)`}</Latex>.
                    </Example>
                </Panel>
                <Panel title={"Vincoli"}>
                    <p>
                        Equazioni e disequazioni a cui devono sottostare le incognite perchè esse formino una soluzione
                        valida.
                    </p>
                    <p>
                        I loro coefficienti sono contenuti nella matrice <Latex>{r`\mathbf{A}`}</Latex>, mentre i loro
                        termini noti nel vettore <Latex>{r`\mathbf{b}`}</Latex>.
                    </p>
                </Panel>
                <Panel title={"Poliedro"}>
                    <p>
                        L'<b>insieme</b> che racchiunde tutte le <b>soluzioni ammissibili</b> di un problema.
                    </p>
                    <p>
                        Può essere <i><Finite/></i>, <i><Empty/></i> oppure <i><Unbounded/></i>.
                    </p>
                    <Example>
                        Si chiama così perchè se si disegna su un piano cartesiano, esso forma una figura geometrica a
                        più lati, ovvero un <a href={"https://it.wikipedia.org/wiki/Poliedro"}>poliedro</a>.
                    </Example>
                </Panel>
                <Panel title={"Valore ottimo"}>
                    <p>
                        La <b>soluzione</b> di un problema, ricavabile dal
                        prodotto <Latex>{r`\mathbf{c}^T \mathbf{x}`}</Latex>.
                    </p>
                    <p>
                        In particolare, il valore ottimo è un <b>vertice</b> del poliedro, detto <i>vertice ottimo</i>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Forme di un problema di ottimizzazione"}>
                <Panel title={"Forma generale"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><Plus>Equazioni e disequazioni</Plus></li>
                        <li><Plus>Variabili non vincolate</Plus></li>
                    </ul>
                    <PLatex>{r`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad \mathbf{A'} \mathbf{x} \geq \mathbf{b'} \quad x_j \geq 0,\quad j = 1 \dots n \right\}`}</PLatex>
                </Panel>
                <Panel title={"Forma canonica"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><Plus>Solo disequazioni</Plus></li>
                        <li><Minus>Vincoli di non-negatività sulle incognite</Minus></li>
                    </ul>
                    <PLatex>{r`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} \geq b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`}</PLatex>
                </Panel>
                <Panel title={"Forma standard"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><Minus>Solo equazioni</Minus></li>
                        <li><Minus>Vincoli di non-negatività sulle incognite</Minus></li>
                    </ul>
                    <PLatex>{r`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`}</PLatex>
                </Panel>
            </Section>
            <Section title={"Conversioni tra le forme"}>
                <Panel title={"Standard e generale"}>
                    <p>
                        Applica questa conversione a ogni equazione nel sistema:
                    </p>
                    <p>
                        <Latex inline={false}>{r`a = b \Leftrightarrow
                            \begin{cases}
                                a \leq b\\
                                a \geq b
                            \end{cases}
                        `}</Latex>
                    </p>
                    <Example>Serve solo nella teoria per dimostrare che le forme sono equivalenti.</Example>
                </Panel>
                <Panel title={"Canonica e standard"}>
                    <p>
                        Aggiungi una <i>variabile slack</i> <Latex>{r`s`}</Latex> <b>non-vincolata</b> a ogni
                        disequazione nel sistema:
                    </p>
                    <p>
                        <Latex inline={false}>{r`
                            a \leq b \Leftrightarrow a + s = b
                        `}</Latex>
                    </p>
                    <p>
                        <Latex inline={false}>{r`
                            a \geq b \Leftrightarrow a - s = b
                        `}</Latex>
                    </p>
                </Panel>
                <Panel title={"Generale e canonica"}>
                    <p>
                        Sdoppia ogni variabile non-vincolata in due variabili con vincolo di non-negatività:
                    </p>
                    <p>
                        <Latex inline={false}>{r`\begin{cases}
                            a = a^+ - a^-\\
                            a^+ \geq 0\\
                            a^- \geq 0
                        \end{cases}`}</Latex>
                    </p>
                </Panel>
            </Section>
            <Section>
                Valore attuale
            </Section>
            <Section title={"Tableau"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modo per rappresentare sistemi in forma standard, anche noto come <b>matrice equivalente
                        completa</b> del sistema.
                    </p>
                </Panel>
                <Panel title={"Trasformazioni"}>
                    <p>
                        Un tableau è un sistema di equazioni in <b>forma matriciale completa</b>.
                    </p>
                    <p>
                        È possibile effettuare senza che cambi il risultato finale le seguenti trasformazioni:
                    </p>
                    <ul>
                        <li><b>Moltiplicare</b> un'intera riga per una costante.</li>
                        <li><b>Sommare</b> una riga a un'altra</li>
                    </ul>
                    <Example>
                        Suona familiare? Sì, lo abbiamo fatto anche in Algebra Lineare.
                    </Example>
                </Panel>
                <Panel title={"Variabili nella base"}>
                    <p>
                        Variabili che hanno <b>tutti 0 e un solo 1</b> nella loro colonna del tableau.
                    </p>
                    <p>
                        La loro controparte sono le <i>variabili fuori base</i>, che hanno qualsiasi altro valore.
                    </p>
                </Panel>
                <Panel title={"Valore attuale"}>
                    <p>
                        Il valore della funzione obiettivo che si otterrebbe se <b>tutte le variabili fuori base
                        valessero 0</b>.
                    </p>
                    <p>
                        Procedendo nella risoluzione (descritta in seguito) del tableau, questo valore aumenterà, fino a
                        raggiungere il valore ottimo quando la risoluzione sarà completata.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel color={ExampleBoxColor} title={"Un esempio"}>
                    <p>
                        Il sistema:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                        2000x_1 + 1000x_2 = z\\
                        1x_1 \leq 3\\
                        1x_2 \leq 3\\
                        2x_1 + 2x_2 \leq 7
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Diventa il tableau:
                    </p>
                    <table className={"right"}>
                        <thead>
                        <tr>
                            <th><Latex>x_1</Latex></th>
                            <th><Latex>x_2</Latex></th>
                            <th><Latex>s_1</Latex></th>
                            <th><Latex>s_2</Latex></th>
                            <th><Latex>s_3</Latex></th>
                            <th><abbr title={"Termine noto"}>TN</abbr></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Latex>1</Latex></td>
                            <td><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(255, 0, 0, 0.1);"}><Latex>3</Latex></td>
                        </tr>
                        <tr>
                            <td><Latex>0</Latex></td>
                            <td><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(255, 0, 0, 0.1);"}><Latex>3</Latex></td>
                        </tr>
                        <tr>
                            <td><Latex>2</Latex></td>
                            <td><Latex>2</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 0, 255, 0.1);"}><Latex>1</Latex></td>
                            <td style={"background-color: rgba(255, 0, 0, 0.1);"}><Latex>7</Latex></td>
                        </tr>
                        <tr style={"background-color: rgba(0, 255, 0, 0.1);"}>
                            <td><Latex>2000</Latex></td>
                            <td><Latex>1000</Latex></td>
                            <td><Latex>0</Latex></td>
                            <td><Latex>0</Latex></td>
                            <td><Latex>0</Latex></td>
                            <td style={"background-color: rgba(255, 255, 0, 0.2);"}><Latex>0</Latex></td>
                        </tr>
                        </tbody>
                    </table>
                    <ul>
                        <li>
                            <u style={"color: #7dff7d;"}>Verde</u>: funzione obiettivo
                        </li>
                        <li>
                            <u style={"color: #ffff7d;"}>Giallo</u>: valore attuale della funzione
                        </li>
                        <li>
                            <u style={"color: #ff7d7d;"}>Rosso</u>: termini noti
                        </li>
                        <li>
                            <u style={"color: #7d7dff;"}>Blu</u>: Variabili slack
                        </li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Simplex primale"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un algoritmo per trovare efficientemente il <b>valore ottimo</b> e le coordinate di un <b>vertice
                        ottimo</b> in problemi di ottimizzazione lineare.
                    </p>
                    <Example>
                        Ricordi <BaseLink href={"/vldigeometria"}>Gauss-Jordan</BaseLink>? Il Simplex è la stessa cosa,
                        aggiungendo criteri per la selezione del pivot.
                    </Example>
                    <Example title={"Esempio"}>
                        <a href={"https://i.imgur.com/1r405Mb.jpg"}>Questa</a> è la soluzione passo per passo del
                        problema 3 del file <a href={"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"}><code>Ex_LP_testo</code></a>.
                    </Example>
                    <p>
                        Perchè sia possibile effettuare il Simplex è necessario che l'<b>origine sia nel poliedro</b>:
                        pertanto, <b>non</b> è possibile che un problema risolto con il Simplex sia <Empty/>.
                    </p>
                </Panel>
                <Panel title={"I passi"}>
                    <ol>
                        <li>Trasforma il sistema in <b>forma standard</b>.</li>
                        <li>Trova tante variabili <b>linearmente indipendenti</b> quante siano le righe: esse saranno
                            la <i>base iniziale</i>.
                        </li>
                        <li>Finchè ci sono variabili con coefficienti <Min>positivi</Min>/<Max>negativi</Max> nella
                            funzione obiettivo:
                            <ol>
                                <li>
                                    <b>Scegli</b> la prima variabile fuori base con
                                    coefficiente <Min>positivo</Min>/<Max>negativo</Max> nella funzione obiettivo: essa
                                    è la <i>variabile entrante</i>.<br/>
                                    <aside><u>Regola di Bland</u>: Si potrebbe scegliere qualsiasi variabile come
                                        entrante, ma scegliendo sempre la prima ammissibile ci si assicura che
                                        l'algoritmo termini.
                                    </aside>
                                </li>
                                <li>
                                    <b>Scegli</b> la variabile in base con il minor rapporto
                                    positivo <Latex>{r`\frac{termine\ noto}{coeff.\ variabile\ entrante}`}</Latex>.
                                    <aside>Se non sei riuscito a trovare nessuna variabile con un rapporto positivo,
                                        significa che il poliedro è <Unbounded/>.</aside>
                                </li>
                                <li><u>Pivot</u>: <b>trasforma</b> tutte le funzioni del sistema in modo che abbiano 0
                                    nella colonna della variabile entrante, tranne nella riga della variabile uscente,
                                    in cui avrà 1.
                                </li>
                            </ol>
                        </li>
                        <li>Il poliedro è <Finite/>: i <b>termini noti dei vincoli</b> sono le coordinate del suo
                            vertice ottimo, mentre il <b>termine noto della funzione obiettivo</b> è il valore ottimo.
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Soluzioni di base degenerata"}>
                    <p>
                        Una soluzione con almeno una variabile di valore <Latex>0</Latex>, dovuta a uno o più <b>vincoli
                        ridondanti</b>.
                    </p>
                    <p>
                        Senza <b>Regola di Bland</b> e in presenza di vincoli ridondanti si rischia di trovarsi a fare
                        pivot infiniti.
                    </p>
                </Panel>
            </Section>
            <Section title={"Metodo delle due fasi"}>
                <Panel title={"Metodo delle due fasi"}>
                    <p>
                        Un <b>estensione del Simplex</b> per permettere la risoluzione di problemi la cui <b>origine non
                        è una soluzione ammissibile</b>.
                    </p>
                    <p>
                        Prevede l'introduzione di un <i>problema ausiliario</i>, le cui incognite sono
                        dette <i>artificiali</i>.
                    </p>
                    <p>
                        Il vettore delle incognite artificiali è solitamente chiamato <Latex>{r`\mathbf{y}`}</Latex>.
                    </p>
                </Panel>
                <Panel title={"Procedimento"}>
                    <ol>
                        <li>Crea un nuovo tableau, <b>aggiungendo variabili artificiali</b> in modo da avere una base
                            ammissibile.
                        </li>
                        <li>Sostituisci la vecchia funzione obiettivo con una nuova che <b>minimizzi la somma</b> di
                            tutte le variabili artificiali.
                        </li>
                        <li><u>Fase 1</u>: <b>Risolvi</b> il nuovo problema con il Simplex primale.</li>
                        <li>Se il Simplex termina quando ci sono ancora <b>variabili artificiali nella base</b>, allora
                            il poliedro è <b><Empty/></b>.
                        </li>
                        <li>Una volta che le variabili artificiali sono fuori base, <b>elimina</b> le loro colonne e la
                            nuova funzione obiettivo.<br/></li>
                        <li>Riporta il tableau in forma base compiendo operazioni per <b>azzerare i
                            coefficienti</b> delle variabili di base nella funzione obiettivo.
                        </li>
                        <li><u>Fase 2</u>: <b>Risolvi</b> il tableau con il Simplex primale.</li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Rilassamento"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Una versione semplificata di un problema nella quale si <b>ignora la violazione</b> di uno o più
                        vincoli.
                    </p>
                </Panel>
                <Panel title={"Rilassamento di Lagrange"}>
                    <p>
                        Un rilassamento che permette di misurare <b>di quanto i vincoli vengono violati</b>.
                    </p>
                    <p>
                        I vincoli, moltiplicati per <b>coefficienti di rilassamento</b>, vengono inseriti nella funzione
                        obiettivo.
                    </p>
                    <p>
                        Il vettore dei coefficienti di rilassamento solitamente è indicato
                        con <Latex>{r`\mathbf{u}`}</Latex>.
                    </p>
                    <Example>
                        <p>
                            Il sistema:
                        </p>
                        <Latex inline={false}>{r`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2\\
                            2 x_1 + 3 x_2 \geq 12\\
                            - x_1 + 3 x_2 \geq 3\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `}</Latex>
                        <p>
                            diventa:
                        </p>
                        <Latex inline={false}>{r`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `}</Latex>
                    </Example>
                </Panel>
            </Section>
            <Section title={"Dualità"}>
                <Panel title={"Duale"}>
                    <p>
                        Il sistema che <b><Min>massimizza</Min>/<Max>minimizza</Max> i moltiplicatori di
                        rilassamento</b> di un problema detto <i>primale</i>.
                    </p>
                </Panel>
                <Panel title={"In termini matriciali"}>
                    <p>
                        Possiamo <b>trasporre</b> il tableau e sostituire le variabili <Latex>{r`x_n`}</Latex> con
                        variabili <Latex>{r`u_n`}</Latex> per ottenere il sistema duale!
                    </p>
                    <p>
                        I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.
                    </p>
                </Panel>
                <Panel title={"Feasibility del duale"}>
                    <ul>
                        <li>Se un problema ha una <b>soluzione finita</b>, allora anche il suo duale la avrà.</li>
                        <li>Se un problema è <b><Empty/></b>, allora il suo duale potrà
                            essere <Empty/> oppure <Unbounded/>.
                        </li>
                        <li>Se un problema è <b><Unbounded/></b>, allora il suo duale sarà certamente <Empty/>.</li>
                    </ul>
                </Panel>
                <Panel title={"Variabili e vincoli"}>
                    <p>
                        Variabili e vincoli del duale corrispondono rispettivamente a vincoli e variabili del primale.
                    </p>
                    <p>
                        In particolare:
                    </p>
                    <table>
                        <thead>
                        <tr>
                            <th><Min>Min</Min></th>
                            <th><Max>Max</Max></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Vincolo <ILatex>\leq</ILatex></td>
                            <td>Variabile <ILatex>\leq</ILatex></td>
                        </tr>
                        <tr>
                            <td>Vincolo <ILatex>\geq</ILatex></td>
                            <td>Variabile <ILatex>\geq</ILatex></td>
                        </tr>
                        <tr>
                            <td>Vincolo <ILatex>=</ILatex></td>
                            <td>Variabile <b>libera</b></td>
                        </tr>
                        <tr>
                            <td>Variabile <ILatex>\leq</ILatex></td>
                            <td>Vincolo <ILatex>\geq</ILatex></td>
                        </tr>
                        <tr>
                            <td>Variabile <ILatex>\geq</ILatex></td>
                            <td>Vincolo <ILatex>\leq</ILatex></td>
                        </tr>
                        <tr>
                            <td>Variabile <b>libera</b></td>
                            <td>Vincolo <ILatex>=</ILatex></td>
                        </tr>
                        </tbody>
                    </table>
                </Panel>
            </Section>
            <Section title={"Un po' di teoria"}>
                <Panel title={"Lemma di Farkas"}>
                    <p>
                        Una disuguaglianza lineare <Latex>{r`c_0 \leq \mathbf{c}^T \mathbf{x}`}</Latex> è verificata da
                        tutti i punti di un poliedro non-<Empty/> se e solo se esiste un
                        vettore <Latex>{r`u \in \mathfrak{R}^m`}</Latex> tale che:
                    </p>
                    <PLatex>{r`\mathbf{c}^T \geq \mathbf{u}^T \mathbf{A}`}</PLatex>
                    <PLatex>{r`c_0 \leq \mathbf{u}^T \mathbf{b}`}</PLatex>
                </Panel>
                <Panel title={"Dualità forte"}>
                    <p>
                        Il teorema che dimostra l'equivalenza tra primale e duale.
                    </p>
                    <p>
                        Se uno dei due problemi è finito, la soluzione di uno coincide con la soluzione dell'altro.
                    </p>
                    <p>
                        <Latex>{r`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`}</Latex>
                    </p>
                    <p>
                        <Todo>TODO: Anche qui c'è una lunga dimostrazione...</Todo>
                    </p>
                </Panel>
                <Panel title={"Dualità debole"}>
                    <p>
                        Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi
                        tableau) è sempre <Min>minore o uguale</Min>/<Max>maggiore o uguale</Max> alla soluzione del
                        corrispettivo primale.
                    </p>
                    <p>
                        <Todo>TODO: Dimostrazione cortina, ma sembra complicata.</Todo>
                    </p>
                </Panel>
                <Panel title={"Condizioni di ottimalità"}>
                    <p>
                        Il teorema che ci permette di passare dalla soluzione del duale alla soluzione del
                        primale. <Todo>TODO: credo?</Todo>
                    </p>
                    <p>
                        Si deriva combinando le seguenti condizioni:
                    </p>
                    <ul>
                        <li>Ammissibilità del
                            primale: <Latex>{r`\mathbf{A} \mathbf{X} \geq \mathbf{b}, \quad \mathbf{x} \geq 0`}</Latex>
                        </li>
                        <li>Ammissibilità del
                            duale: <Latex>{r`\mathbf{u}^T \mathbf{A} \leq \mathbf{c}^T, \quad \mathbf{u} \geq 0`}</Latex>
                        </li>
                        <li>Teorema della dualità
                            forte: <Latex>{r`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`}</Latex> (alla soluzione
                            ottima)
                        </li>
                    </ul>
                    <p>
                        Ne risulta che una soluzione è ottima se e solo se:
                    </p>
                    <PLatex>{r`\left( \mathbf{c}^T - \mathbf{u}^T \mathbf{A} \right) \mathbf{x} = 0`}</PLatex>
                    <PLatex>{r`\mathbf{u}^T \left( \mathbf{A} \mathbf{x} - \mathbf{b}  \right) = 0`}</PLatex>
                </Panel>
            </Section>
            <Section title={"Simplex duale"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un'estensione al Simplex primale che opera sul problema duale.
                    </p>
                </Panel>
                <Panel title={"Come funziona?"}>
                    <p>
                        Funziona esattamente come il Simplex primale, ma opera sul duale.
                    </p>
                </Panel>
            </Section>
            <Section title={"Analisi di sensibilità"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un procedimento che misura di <b>quanto può variare</b> il termine noto di un
                        vincolo <Latex>{r`b_i`}</Latex> o il coefficiente della funzione
                        obiettivo <Latex>{r`c_i`}</Latex> prima che la base degeneri.
                    </p>
                </Panel>
            </Section>
            <Section title={"Ottimizzazione lineare intera"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Particolari problemi di ottimizzazione lineare in cui le <b>variabili sono vincolate ad essere
                        numeri interi</b>.
                    </p>
                    <PLatex>{r`
                        \mathbf{x} \in \mathbb{Z}^n
                    `}</PLatex>
                    <p>
                        Spesso detti anche <i>problemi di <abbr title={"Integer Linear Programming"}>ILP</abbr></i>.
                    </p>
                </Panel>
                <Panel title={"Rilassamento lineare"}>
                    <p>
                        Un rilassamento che rimuove il <b>vincolo di integrità</b> a un problema, trovando la sua <b>soluzione
                        continua</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Dal rilassamento alla soluzione"}>
                <Panel title={"Enumerazione totale"}>
                    <p>
                        Un <b>modo</b> per passare dalla soluzione del rilassamento alla soluzione intera di un problema
                        di ILP.
                    </p>
                    <p>
                        Consiste nel calcolare la soluzione di ogni singolo punto incluso nel poliedro, e selezionare
                        la <Min>minore</Min>/<Max>maggiore</Max>.
                    </p>
                    <p>
                        Trova <b>sicuramente</b> la soluzione giusta, ma il costo computazionale è
                        esponenziale <ILatex>O(n^k)</ILatex>!
                    </p>
                </Panel>
                <Panel title={"Arrotondamento"}>
                    <p>
                        Un altro <b>modo</b> per passare dalla soluzione del rilassamento alla soluzione intera di un
                        problema di ILP.
                    </p>
                    <p>
                        Consiste nell'<b>arrotondare tutte le variabili al loro valore intero più vicino</b>, e
                        calcolarne il valore ottimo.
                    </p>
                    <p>
                        Funziona bene per valori grandi, ma più essi si avvicinano allo 0 più l'<b>errore diventa
                        grande</b>.
                    </p>
                </Panel>
                <Panel title={"Piani secanti"}>
                    <p>
                        Un altro <b>modo</b> ancora per passare dalla soluzione del rilassamento alla soluzione intera
                        di un problema di ILP.
                    </p>
                    <p>
                        Consiste nel tagliare il poliedro con nuovi vincoli (<i>piani secanti</i>) che <b>riducono le
                        possibili soluzioni continue</b> ma non quelle intere.
                    </p>
                    <p>
                        Per selezionare i vincoli, si usano i <b>tagli di Gomory</b>:
                    </p>
                    <PLatex>{r`
                        \sum_{j \in F} \left( \left( a_{tj} - \lfloor a_{tj} \rfloor \right) \cdot x_j \right) \geq (b_t - \lfloor b_t \rfloor)
                    `}</PLatex>
                    <p>
                        Per ogni valore noto frazionario si viene quindi a creare <b>una nuova variabile in base</b> e
                        un nuovo vincolo formato dall'opposto di tutti i valori frazionari dei coefficienti fuori base.
                    </p>
                    <Example>
                        <p>
                            Il tableau:
                            <table>
                                <thead>
                                <tr>
                                    <th><BLatex>{r`x_1`}</BLatex></th>
                                    <th><BLatex>{r`x_2`}</BLatex></th>
                                    <th><BLatex>{r`s_1`}</BLatex></th>
                                    <th><BLatex>{r`s_2`}</BLatex></th>
                                    <th><abbr title={"Termine noto"}>TN</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`3`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`\frac{3}{2}`}</BLatex></td>
                                    <td><BLatex>{r`\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`\frac{6}{5}`}</BLatex></td>
                                </tr>
                                </tbody>
                            </table>
                        </p>
                        <p>
                            Diventa:
                            <table>
                                <thead>
                                <tr>
                                    <th><BLatex>{r`x_1`}</BLatex></th>
                                    <th><BLatex>{r`x_2`}</BLatex></th>
                                    <th><BLatex>{r`s_1`}</BLatex></th>
                                    <th><BLatex>{r`s_2`}</BLatex></th>
                                    <th style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`s_3`}</BLatex>
                                    </th>
                                    <th><abbr title={"Termine noto"}>TN</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`3`}</BLatex></td>
                                </tr>
                                <tr>
                                    <td><BLatex>{r`\frac{3}{2}`}</BLatex></td>
                                    <td><BLatex>{r`\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`1`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.1);"}><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`\frac{6}{5}`}</BLatex></td>
                                </tr>
                                <tr style={"background-color: rgba(255, 255, 0, 0.1);"}>
                                    <td><BLatex>{r`-\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`-\frac{1}{2}`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td><BLatex>{r`0`}</BLatex></td>
                                    <td style={"background-color: rgba(255, 255, 0, 0.2);"}><BLatex>{r`1`}</BLatex></td>
                                    <td><BLatex>{r`-\frac{1}{5}`}</BLatex></td>
                                </tr>
                                </tbody>
                            </table>
                        </p>
                    </Example>
                </Panel>
                <Panel title={"Divide et impera"}>
                    <p>
                        È possibile usare la tecnica <i>divide et impera</i> per rendere più efficiente l'<b>enumerazione
                        totale</b>.
                    </p>
                    <p>
                        Si divide il problema principale (trovare il valore ottimo di un problema di ILP) in più
                        sottoproblemi (trovare il valore ottimo di un problema di ILP con una variabile impostata a un
                        valore fisso).
                    </p>
                    <p>
                        Si crea così un <b>albero</b>.
                    </p>
                    <p>
                        È possibile <b>chiudere in anticipo</b> alcuni nodi dell'albero se il loro miglior possibile
                        valore ottimo è inferiore a uno precedentemente trovato o se il loro poliedro è <Empty/>.
                    </p>
                    <p>
                        È possibile utilizzare diverse <b>strategie di esplorazione</b> dell'albero:
                        <ul>
                            <li><b>depth-first</b>: permette di raggiungere immediatamente a una soluzione accettabile
                                (ma non ottimale)
                            </li>
                            <li><b>best-first</b>: permette di raggiungere più velocemente alla soluzione corretta</li>
                        </ul>
                    </p>
                </Panel>
                <Panel title={"Seca et impera"}>
                    <p>
                        È possibile combinare il metodo dei <b>tagli secanti</b> con la tecnica <b>divide et
                        impera</b> per raggiungere ancora più velocemente a una soluzione.
                    </p>
                    <p>
                        Si effettuano <b>poche iterazioni</b> del metodo dei tagli secanti, e sul risultato di quelle
                        iterazioni si applica il <b>divide et impera</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={<span>Terminologia dei grafi <Todo>TODO: migliorare</Todo></span>}>
                <Panel title={"Grafo"}>
                    <p>
                        Insieme di <b>nodi</b> <ILatex>{r`N`}</ILatex> e <b>archi</b> <ILatex>{r`E`}</ILatex> che li
                        connettono.
                    </p>
                    <p>
                        Può essere <b>diretto</b> se gli archi hanno una direzione.
                    </p>
                </Panel>
                <Panel title={"Nodi adiacenti"}>
                    <p>
                        Nodi <b>connessi da un arco</b>.
                    </p>
                </Panel>
                <Panel title={"Arco incidente"}>
                    <p>
                        Arco <b>connesso a un dato nodo</b>.
                    </p>
                </Panel>
                <Panel title={"Arco entrante o uscente"}>
                    <p>
                        Un arco diretto che <b>termina</b> o <b>inizia</b> da un dato nodo.
                    </p>
                </Panel>
                <Panel title={"Grado"}>
                    <p>
                        <b>Conteggio</b> degli archi incidenti di un nodo.
                    </p>
                    <p>
                        Si può calcolare anche relativamente agli archi entranti o agli archi uscenti.
                    </p>
                </Panel>
                <Panel title={"Percorso"}>
                    <p>
                        Sequenza di <b>archi consecutivi</b>.
                    </p>
                </Panel>
                <Panel title={"Connessione"}>
                    <p>
                        Due nodi sono connessi se tra loro esiste <b>almeno un percorso</b>.
                    </p>
                    <p>
                        Un grafo è connesso se tutti i suoi nodi sono connessi.
                    </p>
                </Panel>
                <Panel title={"Cicli e circuiti"}>
                    <p>
                        Percorsi rispettivamente indiretti e diretti in cui l'inizio coincide con la fine.
                    </p>
                </Panel>
                <Panel title={"Grafo completo"}>
                    <p>
                        Grafo in cui ogni nodo è connesso con ogni altro.
                    </p>
                    <p>
                        Se diretto, contiene <ILatex>{r`n \cdot (n - 1)`}</ILatex> archi; altrimenti, ne contiene la
                        metà.
                    </p>
                </Panel>
                <Panel title={"Matrice di adiacenza"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Lista di adiacenza"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Taglio"}>
                    <p>
                        Sottoinsieme di archi che connettono due sottoinsiemi di nodi.
                    </p>
                    <p>
                        Può essere anche uscente o entrante; in tal caso include solo gli archi entranti o uscenti dal
                        sottoinsieme.
                    </p>
                </Panel>
                <Panel title={"Sottografo"}>
                    <p>
                        Sottoinsieme di nodi e archi di un grafo.
                    </p>
                    <p>
                        Tutti gli archi di un sottografo possono connettere solo nodi all'interno di esso.
                    </p>
                </Panel>
                <Panel title={"Albero"}>
                    <p>
                        Sottografo connesso e aciclico.
                    </p>
                </Panel>
                <Panel title={"Spanning tree"}>
                    <p>
                        Albero che include tutti i nodi di un grafo.
                    </p>
                </Panel>
            </Section>
            <Section title={"Algoritmi con i grafi"}>
                <Panel title={"Prim"}>
                    <p>
                        Crea uno spanning tree.
                    </p>
                    <ol>
                        <li>Aggiungi l'arco di costo minimo all'albero.</li>
                        <li>Finchè mancano ancora archi:
                            <ol>
                                <li>Trova tutti gli archi che aggiungerebbero un nuovo nodo all'albero.</li>
                                <li>Seleziona l'arco di costo minore.</li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Ordine topologico"}>
                    <p>
                        Trova l'ordine topologico di un albero.
                    </p>
                    <ol>
                        <li>Ripeti finchè ci sono nodi nel grafo:
                            <ol>
                                <li>Assegna un numero sequenziale a un nodo senza archi entranti.</li>
                                <li>Elimina il nodo a cui hai assegnato il numero.</li>
                                <li>Elimina tutti gli archi incidenti sul nodo che hai eliminato.</li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Percorsi minimi in grafo diretto"}>
                    <p>
                        Trova i percorsi di costo minimo in un albero.
                    </p>
                    <ol>
                        <li>Trova l'ordine topologico dell'albero.</li>
                        <li>Invece che provare ogni singola combinazione di nodi, prova solo i nodi che hanno un numero
                            topologico maggiore di quello del nodo attuale.
                        </li>
                    </ol>
                    <p>
                        <Todo>TODO: forse spiegarlo meglio non farebbe male</Todo>
                    </p>
                </Panel>
                <Panel title={"Algoritmo di Dijkstra"}>
                    <blockquote>
                        Vedi <BaseLink href={"/algoritmiestrutturedati"}>Algoritmi</BaseLink>.
                    </blockquote>
                </Panel>
                <Panel title={"Algoritmo di Ford-Fulkerson"}>
                    <Example>
                        Trova il volume massimo di acqua che è possibile fare scorrere attraverso tubature con una data
                        capacità.
                    </Example>
                    <p>
                        Costruisci il grafo residuo e vedi se c'è un percorso che va dalla sorgente alla destinazione.
                    </p>
                    <p>
                        <Image src={"https://i.imgur.com/FJk44q0.png"}/>
                    </p>
                    <p>
                        <Image src={"https://i.imgur.com/fzb6xz2.png"}/>
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
