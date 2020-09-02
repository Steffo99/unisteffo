import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Latex, BaseLink, Todo} from "bluelib";
import Min from "../../components/OttimizzazioneLineare/Min";
import Max from "../../components/OttimizzazioneLineare/Max";
import Example from "../../components/Example";
import Finite from "../../components/OttimizzazioneLineare/Finite";
import Empty from "../../components/OttimizzazioneLineare/Empty";
import Unbounded from "../../components/OttimizzazioneLineare/Unbounded";
import Plus from "../../components/Fisica/Plus";
import Minus from "../../components/Fisica/Minus";
import ExampleBoxColor from "../../components/ExampleBoxColor";

const r = String.raw;


export default function () {
    return (
        <Fragment>
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
                        In genere, la funzione obiettivo è scritta in forma di <b>combinazione lineare</b> tra le <b>incognite</b> e i <b>coefficienti</b>:
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
                        <Latex inline={false}>{r`
                            a = b \Leftrightarrow
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
                        <Latex inline={false}>{r`
                            \begin{cases}
                                a = a^+ - a^-\\
                                a^+ \geq 0\\
                                a^- \geq 0
                            \end{cases}
                        `}</Latex>
                    </p>
                </Panel>
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
                        1x_1\ {\color{Cyan} \leq}\ {\color{Red} 3}\\
                        1x_2\ {\color{Cyan} \leq}\ {\color{Red} 3}\\
                        2x_1 + 2x_2\ {\color{Cyan} \leq}\ {\color{Red} 7}\\
                        {\color{Yellow} \min}\ {\color{Green} 2000x_1 + 1000x_2}
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
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(255, 0, 0, 0.1);"}><Latex>3</Latex></td>
                        </tr>
                        <tr>
                            <td><Latex>0</Latex></td>
                            <td><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>1</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(255, 0, 0, 0.1);"}><Latex>3</Latex></td>
                        </tr>
                        <tr>
                            <td><Latex>2</Latex></td>
                            <td><Latex>2</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>0</Latex></td>
                            <td style={"background-color: rgba(0, 255, 255, 0.1);"}><Latex>1</Latex></td>
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
                    <p>
                        Con i seguenti elementi:
                    </p>
                    <ul>
                        <li>
                            <u style={"color: #7dff7d;"}>Funzione obiettivo</u>
                        </li>
                        <li>
                            <u style={"color: #ffff7d;"}>Valore attuale</u>
                        </li>
                        <li>
                            <u style={"color: #ff7d7d;"}>Termini noti</u>
                        </li>
                        <li>
                            <u style={"color: #7dffff;"}>Variabili slack</u>
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
                        Ricordi <BaseLink href={"/calcolonumerico"}>Gauss</BaseLink>? Il Simplex è la stessa cosa,
                        in cui però si cerca di <Min>minimizzare</Min>/<Max>massimizzare</Max> il termine noto della funzione obiettivo.
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
                                    <p>
                                        <b>Scegli</b> la prima variabile fuori base con
                                        coefficiente <Min>positivo</Min>/<Max>negativo</Max> nella funzione obiettivo: essa
                                        è la <i>variabile entrante</i>.
                                    </p>
                                    <aside><u>Regola di Bland</u>: Si potrebbe scegliere qualsiasi variabile come
                                        entrante, ma scegliendo sempre la prima ammissibile ci si assicura che
                                        l'algoritmo termini.
                                    </aside>
                                </li>
                                <li>
                                    <p>
                                        <b>Scegli</b> la variabile in base con il minor rapporto
                                        positivo:
                                    </p>
                                    <PLatex>{r`\frac{b_i}{A_ik}`}</PLatex>
                                    <aside>
                                        Se non sei riuscito a trovare nessuna variabile con un rapporto positivo,
                                        significa che il poliedro è <Unbounded/>.
                                    </aside>
                                </li>
                                <li>
                                    <p>
                                        <u>Pivot</u>: <b>trasforma</b> tutte le funzioni del sistema in modo che abbiano 0
                                        nella colonna della variabile entrante, tranne nella riga della variabile uscente,
                                        in cui avrà 1.
                                    </p>
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
        </Fragment>
    )
}
