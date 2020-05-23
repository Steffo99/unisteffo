import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";
import Minus from "../components/minus";
import Plus from "../components/plus";
import Code from "../components/code";

const r = String.raw;

export default class OttimizzazioneLineare extends Component {
    render() {
        return (
            <div>
                <h1>Ottimizzazione lineare intera</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Videolezioni su YouTube"}>
                        <p>
                            Ho rimosso il rumore in sottofondo da tutti i video di Ricerca Operativa!
                        </p>
                        <p>
                            <b><a href={"https://www.youtube.com/playlist?list=PLh93e8qjTszffkHNn-19CqUOhHFbhBlBh"}>Guardate i video qui!</a></b>
                        </p>
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
                                    <th><Latex>A</Latex></th>
                                    <th><Latex>B</Latex></th>
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
                            <Todo>TODO: come spiegarla?</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Simplex"}>
                    <Panel title={"Simplex"}>
                        <p>
                            Un algoritmo per massimizzare efficientemente variabili di sistemi lineari, derivato da Gauss-Jordan.
                        </p>
                        <Example>
                            E' spiegato semplicemente <a href={"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"}>qui</a>.
                        </Example>
                    </Panel>
                    <Panel title={"I passi"}>
                        <ol>
                            <li>Trasforma il sistema in <b>forma standard</b>.</li>
                            <li>Finchè ci sono variabili con coefficienti positivi nella funzione obiettivo:
                                <ol>
                                    <li><b>Scegli</b> una variabile della funzione obiettivo, chiamandola <i>variabile entrante</i>. <Example>Come? Vedi nel prossimo pannello.</Example></li>
                                    <li>Trova la variabile di base (detta <i>variabile uscente</i>) con il <b>valore minore</b> per questo rapporto: <Code>termine noto / coeff. variabile entrante</Code></li>
                                    <li><b>Riscrivi</b> tutte le funzioni del sistema in termini della variabile entrante.</li>
                                </ol>
                            </li>
                            <li>Il <b>termine noto</b> della funzione obiettivo è il tuo risultato.</li>
                        </ol>
                    </Panel>
                    <Panel title={"Criteri per la variabile entrante"}>
                        <ul>
                            <li>Coefficiente maggiore nella funzione obiettivo.</li>
                            <li>Incremento maggiore della funzione obiettivo.</li>
                            <li>A caso.</li>
                            <li><i>Regola di Bland</i>: scegli variabili entranti e uscenti con indice minore. <Example>Impedisce cicli infiniti!</Example></li>
                        </ul>
                    </Panel>
                </Split>
                <Split title={"Metodo delle due fasi"}>
                    <Panel title={"Metodo delle due fasi"}>
                        <p>
                            Un estensione del Simplex per permettere la risoluzione di problemi con termini noti negativi.
                        </p>
                        <p>
                            Prevede l'introduzione di un <b>problema ausiliario</b>.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
