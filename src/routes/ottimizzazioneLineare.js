import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";

const r = String.raw;

export default class OttimizzazioneLineare extends Component {
    render() {
        return (
            <div>
                <h1>Ottimizzazione lineare</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Videolezioni su YouTube"}>
                        <p>
                            <a href={"https://www.youtube.com/playlist?list=PLh0s0u9-Vwuor8YXTflVvIIU82PO1oDXS"}>Link alla playlist</a>
                        </p>
                    </Panel>
                    <Panel title={"Slides"}>
                        <p>
                            <Todo>TODO: Ripulire e caricare le slides da qualche parte</Todo>
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
                <Split title={"La forma standard"}>
                    <Panel title={"Condizioni"}>
                        <p>
                            Un sistema è in <i>forma standard</i> quando ha:
                        </p>
                        <ul>
                            <li>Solo equazioni</li>
                            <li>Tutte le variabili maggiori di zero</li>
                        </ul>
                    </Panel>
                    <Panel title={"Slack"}>
                        <p>
                            Possiamo trasformare una disequazione in equazione introducendo variabili <i>slack</i>:
                        </p>
                        <p>
                            <Latex>{r`3x + 2y \leq 15 \implies 3x + 2y + s_1 = 15`}</Latex>
                        </p>
                        <p>
                            In seguito, possiamo riscrivere la funzione obiettivo in termini delle variabili slack.
                        </p>
                        <Example>
                            Si ottiene qualcosa come <Latex>{r`z = -2 s_1 - 3 s_2 + 40`}</Latex>.
                        </Example>
                    </Panel>
                    <Panel title={"Risoluzione"}>
                        <p>
                            Una volta riscritta la funzione obiettivo in termini di slack, se riscriviamo anche le altre funzioni in termini delle slack possiamo <a href={"https://imgur.com/a/3EXpd1B"}>ricavare la soluzione dai termini noti</a>.
                        </p>
                        <p>
                            <Todo>TODO: è praticamente Gauss-Jordan</Todo>
                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
