import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";
import Timer from "../components/timer";

const r = String.raw;

export default class CalcoloNumerico extends Component {
    render() {
        return (
            <div>
                <h1>Calcolo Numerico</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Slides"}>
                        <p>
                            Ultimo aggiornamento: <time>2020-03-11</time>
                        </p>
                        <ul>
                            <li><a href={"https://t.me/unimorefiles/13"}>Richiami di Algebra Lineare</a></li>
                            <li><a href={"https://t.me/unimorefiles/14"}>Slides</a></li>
                            <li><a href={"https://t.me/unimorefiles/15"}>Laboratorio</a></li>
                            <li><a href={"https://t.me/unimorefiles/16"}>Matlab</a></li>
                        </ul>
                        <p>
                            <i>Per slides più aggiornate, visitate <a href={"https://dolly.fim.unimore.it/2019/course/view.php?id=25"}>Dolly</a>!</i>
                        </p>
                    </Panel>
                    <Panel title={"Videolezioni"}>
                        <ol>
                            <li><a href={"https://t.me/unimorefiles/34"}>Introduzione al corso</a></li>
                            <li><a href={"https://t.me/unimorefiles/35"}>Introduzione alla materia</a></li>
                            <li><a href={"https://t.me/unimorefiles/36"}>Rappresentazione dei numeri</a></li>
                            <li><a href={"https://t.me/unimorefiles/37"}>Rappresentazione fixed point degli interi</a></li>
                            <li><a href={"https://t.me/unimorefiles/38"}>Rappresentazione floating point dei reali</a></li>
                            <li><a href={"https://t.me/unimorefiles/39"}>Operazioni di macchina</a></li>
                            <li>Analisi degli errori: condizionamento e stabilità</li>
                            <li>Richiami di Algebra lineare</li>
                        </ol>
                    </Panel>
                    <Panel title={"Team-based Learning"}>
                        <blockquote>
                            <p>
                                Le lezioni in modalità TBL, previste per il corso di Laurea in Informatica, saranno erogate solo quando sarà possibile tornare alla modalità didattica in presenza, per la natura stessa di questa metodologia che non prevede uno svolgimento a distanza.
                            </p>
                            <p>
                                Per il momento, vista l'incertezza della situazione in continua evoluzione, è inutile dare ulteriori indicazioni sulle date o altri aspetti pratici legati al progetto.
                            </p>
                            <p>
                                Appena sarà possibile, gli interessati verranno informati tramite email.
                            </p>
                        </blockquote>
                        <p>
                            Partecipare al Team-based Learning può portare all'ottenimento di fino a 3 punti bonus all'esame e esenzione dalla domanda di Matlab.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Contatti"}>
                    <Panel title={"Email della prof.ssa"}>
                        <p>
                            <a href={"mailto:silvia.bonettini@unimore.it"}>silvia.bonettini@unimore.it</a>
                        </p>
                    </Panel>
                    <Panel title={"Ricevimento"}>
                        <p>
                            Su appuntamento.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Esame"}>
                    <Panel title={"Orale"}>
                        <p>
                            E' composto da:
                        </p>
                        <ul>
                            <li>2 domande sugli argomenti teorici</li>
                            <li>1 domanda di implementazione algoritmo in MATLAB <small>(facoltativa per i punteggi migliori del TBL)</small></li>
                        </ul>
                        <p>
                            Prossimo appello:
                            <Timer/>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Algoritmi"}>
                    <Panel title={"Algoritmi numerici"}>
                        <p>
                            Algoritmi che hanno:
                        </p>
                        <ul>
                            <li>numeri reali in input e output</li>
                            <li>successioni delle quattro operazioni aritmetiche fondamentali come passi</li>
                        </ul>
                    </Panel>
                </Split>
                <Split title={"Errore di rappresentazione"}>
                    <Panel title={"Errore di rappresentazione"}>
                        <p>
                            Con i numeri floating point può capitare che un certo numero <Latex>{r`\alpha`}</Latex> non sia rappresentato correttamente.
                        </p>
                        <p>
                            In tal caso, il numero si indica con <Latex>{r`\alpha^*`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Errore assoluto"}>
                        <p>
                            È la differenza tra il numero desiderato e il numero rappresentato:
                        </p>
                        <p>
                            <Latex>{r`E_a = \left | \alpha - \alpha^* \right |`}</Latex>
                        </p>
                        <Example>
                            Vale sempre 0, tranne in caso di underflow o overflow.
                        </Example>
                    </Panel>
                    <Panel title={"Errore relativo"}>
                        <p>
                            Indica quanto il numero rappresentato differisce dal numero desiderato:
                        </p>
                        <p>
                            <Latex>{r`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Floating point"}>
                    <Panel title={"Precisione di macchina"}>
                        <p>
                            L'errore relativo di un numero reale rappresentato in virgola mobile è minore o uguale alla <i>precisione di macchina</i>:
                        </p>
                        <p>
                            <Latex>{r`E_r \leq k \cdot \beta^{1-t}`}</Latex>
                        </p>
                        <ul>
                            <li>
                                <Latex>\beta</Latex> è uguale alla base utilizzata (solitamente 2).
                            </li>
                            <li>
                                <Latex>t</Latex> è uguale al numero di cifre della mantissa.
                            </li>
                            <li>
                                <Latex>k</Latex> è uguale a <Latex>1</Latex> se il numero viene rappresentato per troncamento oppure a <Latex>{r`\frac{1}{2}`}</Latex> se viene rappresentato per arrotondamento.
                            </li>
                        </ul>
                    </Panel>
                </Split>
                <Split title={"Operazioni di macchina"}>
                    <Panel title={"Un nuovo insieme"}>
                        <p>
                            L'insieme <Latex>F</Latex> è il sottoinsieme dei numeri reali rappresentabili in floating point dalla macchina che stiamo usando.
                        </p>
                        <p>
                            Operazioni tra elementi di <Latex>F</Latex> producono risultati in <Latex>{r`\mathbb{R}`}</Latex>, che però decaderanno nuovamente a elementi di <Latex>F</Latex>, perdendo informazioni.
                        </p>
                        <p>
                            Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.
                        </p>
                    </Panel>
                    <Panel title={"Caratteristiche delle operazioni di macchina"}>
                        <ul>
                            <li>Hanno più di un elemento neutro.</li>
                            <li>Un numero ha più opposti.</li>
                            <li>Non sono associative.</li>
                            <li>Non sono distributive.</li>
                            <li>Non vale la legge di annullamento del prodotto.</li>
                        </ul>
                    </Panel>
                </Split>
            </div>
        )
    }
}
