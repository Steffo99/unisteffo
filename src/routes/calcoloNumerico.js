import {Component} from 'preact'
import Split from "../components/old/split";
import Latex from "../components/Latex";
import Panel from "../components/old/panel";
import Example from "../components/example";
import Todo from "../components/old/todo";
import Timer from "../components/old/timer";

const r = String.raw;

export default class CalcoloNumerico extends Component {
    render() {
        return (
            <div>
                <h1>Calcolo Numerico</h1>
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
                    <Panel title={"La funzione fl"}>
                        <p>
                            Indica che un valore è soggetto alla precisione di macchina:
                        </p>
                        <p>
                            <Latex>{r`fl(x) = (x)(1 + \epsilon_x)`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Errori nelle operazioni di macchina"}>
                    <Panel title={"Errore inerente"}>
                        <p>
                            Errore dipendente <b>solo dai dati</b>.
                        </p>
                        <p>
                            <Todo>TODO: qual è la formula?</Todo>
                        </p>
                        <p>
                            È l'errore che si presenterebbe se <Latex>{r`\epsilon_1 = \epsilon_2 = \dots = 0`}</Latex>.
                        </p>
                    </Panel>
                    <Panel title={"Errore algoritmico"}>
                        <p>
                            Errore dipendente <b>solo dalle operazioni effettuate</b>.
                        </p>
                        <p>
                            <Todo>TODO: qual è la formula?</Todo>
                        </p>
                        <p>
                            È l'errore che si presenterebbe se <Latex>{r`\epsilon_x = \epsilon_y = \dots = 0`}</Latex>.
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Problema ben condizionato"}>
                        <p>
                            Un problema poco sensibile all'<b>errore inerente</b>.
                        </p>
                        <Example>
                            <Latex>{r`y = \frac{1}{x}`}</Latex> è mal condizionato intorno allo 0 e ben condizionato lontano dallo 0.
                        </Example>
                    </Panel>
                    <Panel title={"Algoritmo stabile"}>
                        <p>
                            Un algoritmo poco sensibile all'<b>errore algoritmico</b>.
                        </p>
                        <Example>
                            <p>
                                Cerchiamo un algoritmo che risolva <Latex>{r`2x = 4`}</Latex>.
                            </p>
                            <p>
                                Calcolare prima <Latex>{r`t = fl \left( \frac{1}{4} \right)`}</Latex> e poi <Latex>{r`x^* = fl ( 2 \cdot t )`}</Latex> porta a una perdita di precisione.
                            </p>
                            <p>
                                Calcolare direttamente <Latex>{r`x^* = fl \left( \frac{2}{4} \right)`}</Latex> non ha alcuna perdita di precisione e rende l'algoritmo <b>più stabile</b> del precedente.
                            </p>
                        </Example>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Indice di condizionamento"}>
                        <p>
                            È il coefficiente di proporzionalità tra i dati e l'<b>errore inerente</b>.
                        </p>
                        <p>
                            Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione.
                        </p>
                        <p>
                            Minore è l'indice di condizionamento, meglio condizionato è un problema.
                        </p>
                    </Panel>
                    <Panel title={"Indice algoritmico"}>
                        <p>
                            È il coefficiente di proporzionalità tra i dati e l'<b>errore algoritmico</b>.
                        </p>
                        <p>
                            Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Le cose più difficili di Algebra Lineare"}>
                    <Panel title={"Matrice singolare"}>
                        <p>
                            Matrice con determinante 0.
                        </p>
                        <p>
                            Le matrici singolari <b>non sono invertibili</b>.
                        </p>
                    </Panel>
                </Split>
                <Split title={"Norme"}>
                    <Panel title={"Norma vettoriale"}>
                        <p>
                            Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero.
                        </p>
                        <Example>
                            <a href={"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"}>Esempi su Wikipedia</a>
                        </Example>
                    </Panel>
                    <Panel title={"Norma a infinito"}>
                        <p>
                            Massimo dei valori assoluti di tutti gli elementi del vettore.
                        </p>
                        <p>
                            <Latex>{r`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Norma a 1"}>
                        <p>
                            Somma dei valori assoluti di tutti gli elementi del vettore.
                        </p>
                        <p>
                            <Latex>{r`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Norma a 2"}>
                        <p>
                            Radice quadrata della somma dei quadrati di tutti gli elementi del vettore.
                        </p>
                        <p>
                            <Latex>{r`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Norma matriciale indotta"}>
                        <p>
                            Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero.
                        </p>
                        <p>
                            Si ricavano dalle norme vettoriali:
                        </p>
                        <p>
                            <Latex>{r`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`}</Latex>
                        </p>
                        <Example>
                            <Latex>sup</Latex> è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?
                        </Example>
                    </Panel>
                    <Panel title={"Norma a infinito"}>
                        <p>
                            Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice.
                        </p>
                        <p>
                            <Latex>{r`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Norma a 1"}>
                        <p>
                            Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice.
                        </p>
                        <p>
                            <Latex>{r`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title={"Norma a 2"}>
                        <p>
                            Radice quadrata del rango del prodotto tra una matrice e la sua trasposta.
                        </p>
                        <p>
                            <Latex>{r`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title={"Errore relativo tra vettori e matrici"}>
                        <p>
                            Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:
                        </p>
                        <p>
                            <Latex>{r`\frac{\Vert x - y \Vert}{\Vert x \Vert}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title={"Fattorizzazione"}>
                    <Panel title={"Cos'è?"}>
                        <p>
                            La fattorizzazione è il processo che permette di risolvere sistemi di equazioni lineari rappresentati in forma di matrice.
                        </p>
                        <p>
                            Esistono molteplici algoritmi in grado di realizzarla: mentre tutti portano alla stessa soluzione, possono avere <b>velocità</b> e <b>indici algoritmici</b> diversi.
                        </p>
                        <p>
                            Il sistema lineare da risolvere viene diviso in due parti: la <i>matrice dei coefficienti</i> e il <i>vettore termine noto</i>.
                        </p>
                    </Panel>
                    <Panel title={"Teorema di Rouché-Capélli"}>
                        <p>

                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
