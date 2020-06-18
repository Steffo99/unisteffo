import Section from "../components/Elements/Section";
import Latex from "../components/Rendering/Latex";
import Panel from "../components/Elements/Panel";
import Example from "../components/Elements/Example";
import Todo from "../components/Elements/Todo";
import Timer from "../components/Elements/Timer";
import Empty from "../components/OttimizzazioneLineare/Empty";
import Unbounded from "../components/OttimizzazioneLineare/Unbounded";
import Min from "../components/OttimizzazioneLineare/Min";
import Max from "../components/OttimizzazioneLineare/Max";
import PLatex from "../components/Rendering/PLatex";
import LatexDefaultInline from "../contexts/LatexDefaultInline";
import TablePanel from "../components/Elements/TablePanel";
import Finite from "../components/OttimizzazioneLineare/Finite";

const r = String.raw;

export default function(props) {
    return (
        <div>
            <h1>Ottimizzazione lineare intera</h1>
            <Section title={"Informazioni"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><a href={"mailto:stefano.novellani@unimore.it"}>Prof. Stefano Novellani</a></li>
                    </ul>
                </Panel>
                <Panel title={"Archivio"}>
                    <p>
                        Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a href={"https://drive.google.com/drive/folders/13q-E6LvXca9uo3sATMZxrhJClqMB0wJu"}>archivio del corso su Google Drive</a></b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Esame"}>
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
                <Panel title={"Appelli"}>
                    <ol>
                        <li><Timer to={"2020-06-08"}/></li>
                        <li><Timer to={"2020-06-25"}/></li>
                        <li><Timer to={"2020-07-16"}/></li>
                    </ol>
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
                        </tbody>
                    </TablePanel>
                </Section>
            </LatexDefaultInline.Provider>
            <Section title={"Le basi"}>
                <Panel title={"Funzione obiettivo"}>
                    <p>
                        La funzione obiettivo è la funzione con valore noto sconosciuto:
                    </p>
                    <p>
                        <Latex>{r`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`}</Latex>
                    </p>
                </Panel>
            </Section>
            <Section title={"Problemi di ottimizzazione lineare"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        I problemi di ottimizzazione lineare sono problemi che cercano di <Min>minimizzare</Min>/<Max>massimizzare</Max> il valore di una <i>funzione obiettivo</i> le cui incognite sono sottoposte a un <b>sistema di <i>vincoli</i></b>.
                    </p>
                </Panel>
                <Panel title={"Funzione obiettivo"}>
                    <p>
                        La funzione da <Min>minimizzare</Min>/<Max>massimizzare</Max>.
                    </p>
                    <p>
                        Il vettore dei suoi coefficienti è detto <Latex>{r`\mathbf{c}`}</Latex>, mentre quello delle sue incognite <Latex>{r`\mathbf{x}`}</Latex>.
                    </p>
                </Panel>
                <Panel title={"Vincoli"}>
                    <p>
                        Equazioni e disequazioni a cui devono sottostare le incognite perchè esse formino una soluzione valida.
                    </p>
                    <p>
                        I loro coefficienti sono contenuti nella matrice <Latex>{r`\mathbf{A}`}</Latex>, mentre i loro termini noti nel vettore <Latex>{r`\mathbf{b}`}</Latex>.
                    </p>
                </Panel>
                <Panel title={"Valore ottimo"}>
                    <p>
                        La <b>soluzione</b> di un problema, ricavabile dal prodotto <Latex>{r`\mathbf{c}^T \mathbf{x}`}</Latex>.
                    </p>
                    <p>
                        Spesso, la funzione obiettivo è indicata con il nome <Latex>{r`z(\dots)`}</Latex>.
                    </p>
                </Panel>
                <Panel title={"Poliedro"}>
                    <p>
                        L'<b>insieme</b> che racchiunde tutte le <b>soluzioni ammissibili</b> di un problema.
                    </p>
                    <p>
                        In particolare, il valore ottimo è un <b>vertice</b> del poliedro, detto <i>vertice ottimo</i>.
                    </p>
                    <p>
                        Può essere <i><Finite/></i>, <i><Empty/></i> oppure <i><Unbounded/></i>.
                    </p>
                </Panel>
                <Panel title={"Gradiente"}>
                    <p>
                        <b>Funzione</b> della funzione obiettivo che restituisce la direzione del suo aumento più veloce.
                    </p>
                    <p>
                        <Latex>{r`\nabla f = \frac{\delta f}{\delta x_1} \mathbf{I}_1 + \frac{\delta f}{\delta x_2} \mathbf{I}_2 + \frac{\delta f}{\delta x_n} \mathbf{I}_n`}</Latex>
                    </p>
                    <Example>
                        La matrice <Latex>{r`\mathbf{I}`}</Latex> è la matrice identità.
                    </Example>
                    <Example>
                        Se la funzione obiettivo è <Latex>z = 2w + 3x + 4y</Latex>, il suo gradiente è <Latex>{r`\nabla z = (2, 3, 4)`}</Latex>.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Forme di un problema di ottimizzazione"}>
                <Panel title={"Forma generale"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><b>Equazioni e disequazioni</b></li>
                        <li><b>Variabili non vincolate</b></li>
                    </ul>
                    <PLatex>{r`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad \mathbf{A'} \mathbf{x} \geq \mathbf{b'} \quad x_j \geq 0,\quad j = 1 \dots n \right\}`}</PLatex>
                </Panel>
                <Panel title={"Forma canonica"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><b>Solo disequazioni</b></li>
                        <li><b>Vincoli di non-negatività sulle incognite</b></li>
                    </ul>
                    <PLatex>{r`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} \geq b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`}</PLatex>
                </Panel>
                <Panel title={"Forma standard"}>
                    <p>
                        Un problema con:
                    </p>
                    <ul>
                        <li><b>Solo equazioni</b></li>
                        <li><b>Vincoli di non-negatività sulle incognite</b></li>
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
                        Aggiungi una <i>variabile slack</i> <Latex>{r`s`}</Latex> <b>non-vincolata</b> a ogni disequazione nel sistema:
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
            <Section title={"La forma standard"}>
                <Panel title={"Tableau"}>
                    <p>
                        Un modo per rappresentare sistemi in forma standard, anche noto come <b>matrice equivalente completa</b> del sistema.
                    </p>
                    <Example>
                        Il sistema:<br/><br/>
                        <Latex inline={false}>{r`
                            \begin{cases}
                            2000x_1 + 1000x_2 = z\\
                            1x_1 \leq 3\\
                            1x_2 \leq 3\\
                            2x_1 + 2x_2 \leq 7
                            \end{cases}
                        `}</Latex><br/><br/>
                        Diventa il tableau:<br/><br/>
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
                <Panel title={"Variabili nella base"}>
                    <p>
                        Variabili che hanno <b>tutti 0 e un solo 1</b> nella loro colonna del tableau.
                    </p>
                    <p>
                        La loro controparte sono le <i>variabili fuori base</i>, che hanno qualsiasi altro valore.
                    </p>
                </Panel>
            </Section>
            <Section title={"Simplex primale"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un algoritmo per <Min>minimizzare</Min>/<Max>massimizzare</Max> trovare efficientemente <b>valore ottimo</b> di problemi di ottimizzazione lineare, derivato da Gauss-Jordan.
                    </p>
                    <p>
                        Da esso si può anche ricavare un <b>vertice ottimo ammissibile</b>.<br/>
                        C'è la possibilità che ne esistano anche altri: quello ottenuto dipende da come è stata effettuata la scelta delle variabili entranti.
                    </p>
                    <Example>
                        E' spiegato in modo semplice <a href={"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"}>qui</a>, e ci sono dei codici sorgenti di esempio <a href={"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"}>qui</a>.
                    </Example>
                    <Example title={"Esempio"}>
                        <p>
                            <a href={"https://i.imgur.com/1r405Mb.jpg"}>Questa</a> è la soluzione passo per passo del problema 3 del file <a href={"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"}><code>Ex_LP_testo</code></a>.
                        </p>
                    </Example>
                </Panel>
                <Panel title={"I passi"}>
                    <ol>
                        <li>Trasforma il sistema in <b>forma standard</b>.</li>
                        <li>Trova tante variabili <b>linearmente indipendenti</b> quante siano le righe: esse saranno la <i>base iniziale</i>.</li>
                        <li>Finchè ci sono variabili con coefficienti <Min>positivi</Min>/<Max>negativi</Max> nella funzione obiettivo:
                            <ol>
                                <li>
                                    <b>Scegli</b> la prima variabile fuori base con coefficiente <Min>positivo</Min>/<Max>negativo</Max> nella funzione obiettivo: essa è la <i>variabile entrante</i>.<br/>
                                    <aside><i>Regola di Bland</i>: Si potrebbe scegliere qualsiasi variabile come entrante, ma scegliendo sempre la prima ammissibile ci si assicura che l'algoritmo termini.</aside>
                                </li>
                                <li>
                                    <b>Scegli</b> la variabile in base con il minor rapporto positivo <Latex>{r`\frac{termine\ noto}{coeff.\ variabile\ entrante}`}</Latex>.
                                    <aside>Se non sei riuscito a trovare nessuna variabile con un rapporto positivo, significa che il poliedro è <Unbounded/>.</aside>
                                </li>
                                <li><u>Pivot</u>: <b>riscrivi</b> tutte le funzioni del sistema in termini della variabile entrante.</li>
                            </ol>
                        </li>
                        <li>Il poliedro è <Finite/>: i <b>termini noti dei vincoli</b> sono le coordinate del suo vertice ottimo, mentre il <b>termine noto della funzione obiettivo</b> è il valore ottimo.</li>
                    </ol>
                    <Example>
                        È praticamente l'algoritmo di Gauss-Jordan applicato al tableau, con delle regole aggiuntive per la decisione delle variabili di pivot.
                    </Example>
                </Panel>
                <Panel title={"Soluzioni di base degenerata"}>
                    <p>
                        Una soluzione con almeno una variabile di valore <Latex>0</Latex>, dovuta a uno o più <b>vincoli ridondanti</b>.
                    </p>
                    <p>
                        Senza <b>Regola di Bland</b> e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti.
                    </p>
                </Panel>
            </Section>
            <Section title={"Metodo delle due fasi"}>
                <Panel title={"Metodo delle due fasi"}>
                    <p>
                        Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile.
                    </p>
                    <p>
                        Prevede l'introduzione di un <i>problema ausiliario</i>, le cui incognite sono dette <i>artificiali</i>.
                    </p>
                    <p>
                        Il vettore delle incognite artificiali è solitamente chiamato <Latex>{r`\mathbf{y}`}</Latex>.
                    </p>
                    <Example>
                        E' spiegato in modo semplice <a href={"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"}>qui</a>.
                    </Example>
                </Panel>
                <Panel title={"Procedimento"}>
                    <ol>
                        <li>Crea un nuovo tableau, <b>aggiungendo variabili artificiali</b> in modo da avere una base ammissibile.</li>
                        <li>Sostituisci la vecchia funzione obiettivo con una nuova che <b>minimizzi la somma</b> di tutte le variabili artificiali.</li>
                        <li><u>Fase 1</u>: <b>Risolvi</b> il nuovo problema con il simplex primale.</li>
                        <li>Se il Simplex termina quando ci sono ancora <b>variabili artificiali nella base</b>, allora il poliedro è <b><Empty/></b>.</li>
                        <li>Una volta che le variabili artificiali sono fuori base, <b>elimina</b> le loro colonne e la nuova funzione obiettivo.<br/></li>
                        <li>Riporta il tableau in forma base compiendo operazioni per <b>azzerare i coefficienti</b> delle variabili di base nella funzione obiettivo.</li>
                        <li><u>Fase 2</u>: <b>Risolvi</b> il tableau con il simplex primale.</li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Rilassamento"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Una versione semplificata di un problema nella quale si <b>ignora la violazione</b> di uno o più vincoli.
                    </p>
                </Panel>
                <Panel title={"Rilassamento di Lagrange"}>
                    <p>
                        Un rilassamento che permette di misurare <b>di quanto i vincoli vengono violati</b>.
                    </p>
                    <p>
                        I vincoli, moltiplicati per <b>coefficienti di rilassamento</b>, vengono inseriti nella funzione obiettivo.
                    </p>
                    <p>
                        Il vettore dei coefficienti di rilassamento solitamente è indicato con <Latex>{r`\mathbf{u}`}</Latex>.
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
                        Il sistema che <b><Min>massimizza</Min>/<Max>minimizza</Max> i moltiplicatori di rilassamento</b> di un problema detto <i>primale</i>.
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
                        <li>Se un problema è <b><Empty/></b>, allora il suo duale potrà essere <Empty/> oppure <Unbounded/>.</li>
                        <li>Se un problema è <b><Unbounded/></b>, allora il suo duale sarà certamente <Empty/>.</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Un po' di teoria"}>
                <Panel title={"Lemma di Farkas"}>
                    <p>
                        Una disuguaglianza lineare <Latex>{r`c_0 \leq \mathbf{c}^T \mathbf{x}`}</Latex> è verificata da tutti i punti di un poliedro non-<Empty/> se e solo se esiste un vettore <Latex>{r`u \in \mathfrak{R}^m`}</Latex> tale che:
                    </p>
                    <PLatex>{r`\mathbf{c}^T \geq \mathbf{u}^T \mathbf{A}`}</PLatex>
                    <PLatex>{r`c_0 \leq \mathbf{u}^T \mathbf{b}`}</PLatex>
                    <p>
                        <Todo>TODO: Cioè?</Todo>
                    </p>
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
                        Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre <Min>minore o uguale</Min>/<Max>maggiore o uguale</Max> alla soluzione del corrispettivo primale.
                    </p>
                    <p>
                        <Todo>TODO: Dimostrazione cortina, ma sembra complicata.</Todo>
                    </p>
                </Panel>
                <Panel title={"Condizioni di ottimalità"}>
                    <p>
                        Il teorema che ci permette di passare dalla soluzione del duale alla soluzione del primale. <Todo>TODO: credo?</Todo>
                    </p>
                    <p>
                        Si deriva combinando le seguenti condizioni:
                    </p>
                    <ul>
                        <li>Ammissibilità del primale: <Latex>{r`\mathbf{A} \mathbf{X} \geq \mathbf{b}, \quad \mathbf{x} \geq 0`}</Latex></li>
                        <li>Ammissibilità del duale: <Latex>{r`\mathbf{u}^T \mathbf{A} \leq \mathbf{c}^T, \quad \mathbf{u} \geq 0`}</Latex></li>
                        <li>Teorema della dualità forte: <Latex>{r`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`}</Latex> (alla soluzione ottima)</li>
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
                        Funziona esattamente come il Simplex primale, ma opera sulle righe invece che sulle colonne, cercando di rendere <Min>positivi</Min>/<Max>negativi</Max> tutti i termini noti.
                    </p>
                    <Example>
                        Significa che si possono moltiplicare tutti i valori di una riga per lo stesso numero e il risultato non cambia...?
                    </Example>
                </Panel>
            </Section>
            <Section title={"Analisi di sensibilità"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un procedimento che misura di <b>quanto può variare</b> il termine noto di un vincolo <Latex>{r`b_i`}</Latex> o il coefficiente della funzione obiettivo <Latex>{r`c_i`}</Latex> prima che la base degeneri. <Todo>TODO: verificare</Todo>
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
