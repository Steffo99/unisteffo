import {Component} from 'preact'
import Split from "../components/old/split";
import Latex from "../components/Latex";
import Panel from "../components/old/panel";
import Example from "../components/example";
import Todo from "../components/old/todo";
import Minus from "../components/old/minus";
import Plus from "../components/old/plus";
import Code from "../components/old/code";
import Timer from "../components/old/timer";
import Image from "../components/Image";
import Unfeasible from "../components/OttimizzazioneLineare/Unfeasible";
import Unbounded from "../components/OttimizzazioneLineare/Unbounded";
import Min from "../components/OttimizzazioneLineare/Min";
import Max from "../components/OttimizzazioneLineare/Max";

const r = String.raw;

export default class OttimizzazioneLineare extends Component {
    render() {
        return (
            <div>
                <h1>Ottimizzazione lineare intera</h1>
                <Split title={"Unimore"}>
                    <Panel title={"Videolezioni su YouTube"}>
                        <p>
                            Ho rimosso il rumore in sottofondo da tutti i video di Ricerca Operativa!
                        </p>
                        <p>
                            <b><a href={"https://www.youtube.com/playlist?list=PLh93e8qjTszffkHNn-19CqUOhHFbhBlBh"}>Guardate i video qui!</a></b>
                        </p>
                    </Panel>
                    <Panel title={"Prossimi appelli"}>
                        <ol>
                            <li><Timer to={"2020-06-08"}/></li>
                            <li><Timer to={"2020-06-25"}/></li>
                            <li><Timer to={"2020-07-14"}/></li>
                        </ol>
                    </Panel>
                </Split>
                <Split title={"Le basi"}>
                    <Panel title={"Funzione obiettivo"}>
                        <p>
                            La funzione obiettivo è la funzione con valore noto sconosciuto:
                        </p>
                        <p>
                            <Latex>{r`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Gradiente"}>
                        <p>
                            Funzione della funzione obiettivo che indica la direzione del suo aumento più veloce.
                        </p>
                        <p>
                            <Latex>{r`\nabla f = \frac{\delta f}{\delta x_1} e_1 + \frac{\delta f}{\delta x_2} e_2 + \frac{\delta f}{\delta x_n} e_n`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`e_i`}</Latex> è la direzione della coordinata i-esima.
                        </p>
                        <Example>
                            Se <Latex>{r`n = 3`}</Latex>, allora:
                            <ul>
                                <li><Latex>{r`e_1 = (1, 0, 0)`}</Latex></li>
                                <li><Latex>{r`e_2 = (0, 1, 0)`}</Latex></li>
                                <li><Latex>{r`e_3 = (0, 0, 1)`}</Latex></li>
                            </ul>
                        </Example>
                        <Example>
                            Se la funzione obiettivo è <Latex>z = 2w + 3x + 4y</Latex>, il suo gradiente è <Latex>{r`\nabla z = (2, 3, 4)`}</Latex>.
                        </Example>
                    </Panel>
                </Split>
                <Split title={"Forme di un sistema"}>
                    <Panel title={"Forma standard"}>
                        <ul>
                            <li><Minus>Solo equazioni</Minus></li>
                            <li><Minus>Tutte le variabili maggiori di zero</Minus></li>
                        </ul>
                    </Panel>
                    <Panel title={"Forma canonica"}>
                        <ul>
                            <li><Plus>Equazioni e disequazioni</Plus></li>
                            <li><Minus>Tutte le variabili maggiori di zero</Minus></li>
                        </ul>
                    </Panel>
                    <Panel title={"Forma generale"}>
                        <ul>
                            <li><Plus>Equazioni e disequazioni</Plus></li>
                            <li><Plus>Variabili con qualsiasi valore</Plus></li>
                        </ul>
                    </Panel>
                </Split>
                <Split title={"Equivalenza di forma"}>
                    <Panel title={"Da standard a generale"}>
                        <p>
                            Convertiamo ogni equazione <Latex>{r`=`}</Latex> in due disequazioni <Latex>{r`\leq`}</Latex> e <Latex>{r`\geq`}</Latex>,
                        </p>
                        <Example>Why would you ever do that?!</Example>
                    </Panel>
                    <Panel title={"Da canonica a standard"}>
                        <p>
                            Convertiamo le disequazioni in equazioni aggiungendo una variabile slack.
                        </p>
                        <Example>
                            <Latex>{r`a \leq 3`}</Latex> diventa <Latex>{r`a + s_1 = 3`}</Latex>.
                        </Example>
                    </Panel>
                    <Panel title={"Da generale a canonica"}>
                        <p>
                            Sostituiamo le variabili potenzialmente negative (unconstrained) <Latex>{r`x_j`}</Latex> con due variabili <Latex>{r`x_j^+`}</Latex> e <Latex>{r`x_j^-`}</Latex>.
                        </p>
                        <Example>
                            <Latex>{r`a \in \mathbb{Z}`}</Latex> diventa <Latex>{r`a^+ \in \mathbb{N}`}</Latex> e <Latex>{r`-a^- \in \mathbb{N}`}</Latex>.
                        </Example>
                    </Panel>
                </Split>
                <Split title={"La forma standard"}>
                    <Panel title={"Funzione obiettivo"}>
                        <p>
                            La funzione da minimizzare/massimizzare, tipicamente indicata con una <Latex>{r`z`}</Latex> al termine noto.
                        </p>
                    </Panel>
                    <Panel title={"Vincoli"}>
                        <p>
                            Le funzioni del sistema che non sono quella obiettivo.
                        </p>
                    </Panel>
                    <Panel title={"Tableu"}>
                        <p>
                            Un modo per rappresentare sistemi in forma standard, anche noto come <b>matrice equivalente completa</b> del sistema.
                        </p>
                        <Example>
                            Il sistema:<br/><br/>
                            <Latex>{r`
                                \begin{cases}
                                2000A + 1000B = z\\
                                1A \leq 3\\
                                1B \leq 3\\
                                2A + 2B \leq 7
                                \end{cases}
                            `}</Latex><br/><br/>
                            Diventa in forma di tableau:<br/><br/>
                            <table class={"right"}>
                                <thead>
                                    <tr>
                                        <th><abbr title={"Termine noto"}>TN</abbr></th>
                                        <th><Latex>x_1</Latex></th>
                                        <th><Latex>x_2</Latex></th>
                                        <th><Latex>s_1</Latex></th>
                                        <th><Latex>s_2</Latex></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Latex>z</Latex></td>
                                        <td><Latex>2000</Latex></td>
                                        <td><Latex>1000</Latex></td>
                                        <td><Latex>0</Latex></td>
                                        <td><Latex>0</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>3</Latex></td>
                                        <td><Latex>1</Latex></td>
                                        <td><Latex>0</Latex></td>
                                        <td><Latex>1</Latex></td>
                                        <td><Latex>0</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>3</Latex></td>
                                        <td><Latex>0</Latex></td>
                                        <td><Latex>1</Latex></td>
                                        <td><Latex>0</Latex></td>
                                        <td><Latex>1</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>7</Latex></td>
                                        <td><Latex>2</Latex></td>
                                        <td><Latex>2</Latex></td>
                                        <td><Latex>0</Latex></td>
                                        <td><Latex>0</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Example>
                    </Panel>
                    <Panel title={"Variabili di base"}>
                        <p>
                            Variabili che hanno tutti 0 e un 1 nella loro colonna del tableu.
                        </p>
                        <p>
                            La loro controparte sono le <i>variabili fuori base</i>.
                        </p>
                        <p>
                            Un sistema lineare è risolto quando tutte le variabili originali (<Latex>x_n</Latex>) sono nella base.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Simplex"}>
                    <Panel title={"Cos'è?"}>
                        <p>
                            Un algoritmo per <Min>minimizzare</Min>/<Max>massimizzare</Max> efficientemente variabili di sistemi lineari, derivato da Gauss-Jordan.
                        </p>
                        <Example>
                            E' spiegato in modo semplice <a href={"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"}>qui</a>, e ci sono dei codici sorgenti di esempio <a href={"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"}>qui</a>.
                        </Example>
                    </Panel>
                    <Panel title={"I passi"}>
                        <ol>
                            <li>Trasforma il sistema in <b>forma standard</b>.</li>
                            <li>Trova tante variabili <b>linearmente indipendenti</b> quante siano le righe: esse saranno la <i>base iniziale</i>.</li>
                            <li>Finchè ci sono variabili con coefficienti <Min>positivi</Min>/<Max>negativi</Max> nella funzione obiettivo:
                                <ol>
                                    <li>
                                        <b>Scegli</b> la prima variabile con coefficiente <Min>positivo</Min>/<Max>negativo</Max> nella funzione obiettivo: essa è la <i>variabile entrante</i>.
                                        <Example>Si potrebbe scegliere qualsiasi variabile, ma scegliendo sempre la prima possibile (<i>Regola di Bland</i>) ci si assicura che l'algoritmo termini.</Example>
                                    </li>
                                    <li>Trova la variabile di base (detta <i>variabile uscente</i>) tramite il rapporto <Latex>{r`\frac{termine\ noto}{coeff.\ variabile\ entrante}`}</Latex>: scegli la variabile con il <b>rapporto minore</b>, assicurandoti che esso sia <b>positivo</b>. Se tutti i rapporti sono negativi, allora il problema è <b><Unbounded/></b>.</li>
                                    <li><b>Riscrivi</b> tutte le funzioni del sistema in termini della variabile entrante.</li>
                                </ol>
                            </li>
                            <li>I <b>termini noti dei vincoli</b> sono le coordinate del risultato, mentre il <b>termine noto della funzione obiettivo</b> è il valore <Min>minimizzato</Min>/<Max>massimizzato</Max>.</li>
                        </ol>
                    </Panel>
                    <Panel title={"Sotto forma di tableau"}>
                        <p>
                            Se il problema è rappresentato in forma di tableau, allora esso è risolvibile applicando l'algoritmo di Gauss-Jordan, in aggiunta tenendo conto delle regole per la selezione delle variabili entranti e uscenti.
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Soluzioni di base degenerata"}>
                        <p>
                            Una soluzione con almeno una variabile di valore <Latex>0</Latex>, dovuta a uno o più <b>vincoli ridondanti</b>.
                        </p>
                        <p>
                            Senza <b>Regola di Bland</b> e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti.
                        </p>
                    </Panel>
                    <Panel title={"Esempio"}>
                        <Example>
                            Ho risolto il problema 3 del file <a href={"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"}><code>Ex_LP_testo</code></a> con il Simplex:
                            <p>
                                <Image src={"https://i.imgur.com/1r405Mb.jpg"}/>
                            </p>
                        </Example>
                    </Panel>
                </Split>
                <Split title={"Metodo delle due fasi"}>
                    <Panel title={"Metodo delle due fasi"}>
                        <p>
                            Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile.
                        </p>
                        <p>
                            Prevede l'introduzione di un <i>problema ausiliario</i>, le cui variabili sono dette <i>artificiali</i> e sono solitamente rappresentate come <Latex>{r`y_n`}</Latex>.
                        </p>
                        <Example>
                            E' spiegato in modo semplice <a href={"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"}>qui</a>.
                        </Example>
                    </Panel>
                    <Panel title={"Procedimento"}>
                        <ol>
                            <li>Crea un nuovo tableau, <b>aggiungendo variabili artificiali</b> in modo da avere una base ammissibile.</li>
                            <li>Sostituisci la vecchia funzione obiettivo con una nuova che <b>minimizzi la somma</b> di tutte le variabili artificiali.</li>
                            <li><u>Fase 1</u>: <b>Risolvi</b> il nuovo problema con il metodo Simplex.</li>
                            <li>Se il Simplex termina con ancora <b>variabili artificiali nella base</b>, allora il problema è <b><Unfeasible/></b>.</li>
                            <li>Una volta che le variabili artificiali sono fuori base, <b>elimina</b> le loro colonne e la nuova funzione obiettivo.<br/></li>
                            <li>Riporta il tableau in forma base compiendo operazioni per <b>azzerare i coefficienti</b> delle variabili di base nella funzione obiettivo.</li>
                            <li><u>Fase 2</u>: <b>Risolvi</b> il tableau con il metodo Simplex.</li>
                        </ol>
                    </Panel>
                </Split>
                <Split title={"Dualità"}>
                    <Panel title={"Rilassamento"}>
                        <p>
                            Una versione semplificata di un problema nella quale si <b>ignorano</b> uno o più vincoli.
                        </p>
                    </Panel>
                    <Panel title={"Rilassamento di Lagrange"}>
                        <p>
                            Un rilassamento che permette di misurare <b>di quanto i vincoli vengono violati</b>.
                        </p>
                        <p>
                            I vincoli vengono aggiunti alla funzione obiettivo assieme a un moltiplicatore, solitamente rappresentato con <Latex>{r`u_n`}</Latex>.
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
                                z_{LR} = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                                x_1 \geq 0\\
                                x_2 \geq 0
                                \end{cases}
                            `}</Latex>
                        </Example>
                    </Panel>
                    <Panel title={"Duale"}>
                        <p>
                            Il sistema che <b><Min>massimizza</Min>/<Max>minimizza</Max> i moltiplicatori di rilassamento</b> di un qualsiasi sistema, detto <i>primale</i>.
                        </p>
                        <p>
                            Si dimostra che la sua soluzione (se esiste) è <b>uguale</b> alla soluzione del problema primale.
                        </p>
                    </Panel>
                    <Panel title={"In termini matriciali"}>
                        <p>
                            Possiamo <b>trasporre</b> il tableau e sostituire le variabili <Latex>{r`x_n`}</Latex> con variabili <Latex>{r`u_n`}</Latex> per ottenere il sistema duale!
                        </p>
                        <p>
                            I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.
                        </p>
                    </Panel>
                    <Panel title={"Feasibility del duale"}>
                        <ul>
                            <li>Se un problema ha una <b>soluzione finita</b>, allora anche il suo duale la avrà.</li>
                            <li>Se un problema è <b><Unfeasible/></b>, allora il suo duale potrà essere <Unfeasible/> oppure <Unbounded/>.</li>
                            <li>Se un problema è <b><Unbounded/></b>, allora il suo duale sarà certamente <Unfeasible/>.</li>
                        </ul>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Lemma di Farkas"}>
                        <p>
                            <Todo>TODO: una complicata dimostrazione per dire varie cose. Probabilmente si riesce a saltare se non si dà l'orale...</Todo>
                        </p>
                    </Panel>
                    <Panel title={"Dualità forte"}>
                        <p>
                            Il teorema che dimostra l'equivalenza tra primale e duale.
                        </p>
                        <p>
                            <Todo>TODO: Anche qui c'è una lunga dimostrazione...</Todo>
                        </p>
                    </Panel>
                    <Panel title={"Dualità debole"}>
                        <p>
                            Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre <Min>minore o uguale</Min>/<Max>maggiore o uguale</Max> alla soluzione del corrispettivo primale.
                        </p>
                        <p>
                            <Todo>TODO: Dimostrazione cortina, ma sembra complicata.</Todo>
                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
