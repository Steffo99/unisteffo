import style from "./02_ZeriDiFunzione.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Ricerca degli zeri di funzione"}>
                <Panel title={"Descrizione"}>
                    <p>
                        Si vogliono trovare i punti (<i>zeri</i>) in cui una funzione <b>continua</b> <ILatex>f : [a, b] \to R</ILatex> vale <ILatex>0</ILatex>.
                    </p>
                    <p>
                        Per il <b>teorema del valore medio</b>, se <ILatex>{r`f(a) \cdot f(b) \leq 0`}</ILatex>, allora esiste sicuramente un punto in cui la funzione vale 0.
                    </p>
                    <p>
                        Denominiamo il punto in cui la funzione vale <ILatex>0</ILatex> come <ILatex>{r`x_{(*)}`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"Condizionamento"}>
                    <p>
                        Più la <b>derivata prima</b> della funzione <b>si avvicina allo 0</b>, <b>peggio</b> il problema sarà condizionato.
                    </p>
                    <PLatex>{r`f'(x_{(*)}) \simeq 0 \implies mal\ condizionato`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Ordine di convergenza"}>
                    <p>
                        Indice <ILatex>{r`{\color{Orange} p}`}</ILatex> di quanto in fretta una successione converge alla soluzione.
                    </p>
                    <PLatex>{r`\lim_{i \to +\infty} \frac{ \left| x_{(i+1)} - x_{(*)} \right| }{ \left| x_{(k)} - x_{(*)} \right|^{\color{Orange} p}}`}</PLatex>
                    <ul>
                        <li><u>Convergenza lineare</u>: <ILatex>{r`p = 1`}</ILatex> e <ILatex>{r`0 < C < 1`}</ILatex></li>
                        <li><u>Convergenza superlineare</u>: <ILatex>{r`p = 1`}</ILatex> e <ILatex>{r`C = 0`}</ILatex></li>
                        <li><u>Convergenza quadratica</u>: <ILatex>{r`p = 2`}</ILatex> e <ILatex>{r`0 < C < 1`}</ILatex></li>
                        <li><u>Convergenza superquadratica</u>: <ILatex>{r`p = 2`}</ILatex> e <ILatex>{r`C = 0`}</ILatex></li>
                        <li>...</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Metodi dicotomici"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Sono <b>metodi iterativi</b> in grado di ridurre sempre di più l'intervallo in cui è definita la funzione, facendolo convergere allo zero desiderato.
                    </p>
                    <p>
                        Alcuni di essi sono il <i>metodo dicotomico</i> e il <i>metodo regula falsi</i>.
                    </p>
                    <p>
                        Richiedono <b>una valutazione di funzione non-lineare</b> ad ogni iterazione.
                    </p>
                    <p>
                        Ad ogni iterazione, l'intervallo viene sempre <i>almeno</i> <b>dimezzato</b>; si ha, pertanto, che:
                    </p>
                    <PLatex>{r`b_{(i)} - a_{(i)} = \frac{b - a}{2^{i - 1}}`}</PLatex>
                    <p>
                        Hanno quindi <b>convergenza lineare</b> (<ILatex>{r`C = \frac{1}{2}, p = 1`}</ILatex>).
                    </p>
                    <p>
                        Il loro <i>criterio di arresto</i> è un <b>numero di iterazioni prefissato</b> che dipende dalla <b>tolleranza</b> sull'errore:
                    </p>
                    <PLatex>{r`i \geq \log_2 \left( \frac{b - a}{\tau} \right)`}</PLatex>
                    <Example>
                        Dividi l'intervallo <ILatex>{r`[a, b]`}</ILatex> in tante parti grandi quanto la tolleranza. L'algoritmo di bisezione ne escluderà metà ad ogni iterazione; la tolleranza sarà raggiunta quando rimarrà una parte sola!
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodo di bisezione"}>
                    <ol>
                        <li>Finchè non sono state compiute il numero di iterazioni prefissate:
                            <ol>
                                <li>
                                    Calcoliamo il <b>punto medio</b> dell'intervallo <ILatex>{r`[a_{(n)}, b_{(n)}]`}</ILatex>:
                                    <PLatex>{r`c_{(n)} = a_{(n)} + \frac{b_{(n)} - a_{(n)}}{2}`}</PLatex>
                                </li>
                                <li>
                                    Dividiamo l'intervallo in due parti, separate da <ILatex>{r`c_{(n)}`}</ILatex>:
                                    <ul>
                                        <li><ILatex>{r`[a_{(n)}, c_{(n)}]`}</ILatex> è la <b>metà</b> sinistra</li>
                                        <li><ILatex>{r`[c_{(n)}, b_{(n)}]`}</ILatex> è la <b>metà</b> destra</li>
                                    </ul>
                                </li>
                                <li>
                                    Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e rinominiamolo in <ILatex>{r`[a_{(n+1)}, b_{(n+1)}]`}</ILatex>.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
                <Panel title={"Metodo regula falsi"}>
                    <ol>
                        <li>Finchè non sono state compiute il numero di iterazioni prefissate:
                            <ol>
                                <li>
                                    Calcoliamo l'<b>intersezione</b> tra la <b>retta che congiunge i due estremi</b> <ILatex>{r`a_{(n)}, b_{(n)}`}</ILatex> e l'<b>asse X</b>:
                                    <PLatex>{r`c_{(n)} = b_{(n)} - \frac{f(b_{(n)})}{\frac{f(b_{(n)}) - f(a_{(n)})}{b_{(n)} - a_{(n)}}}`}</PLatex>
                                </li>
                                <li>
                                    Dividiamo l'intervallo in due parti, separate da <ILatex>{r`c_{(n)}`}</ILatex>:
                                    <ul>
                                        <li><ILatex>{r`[a_{(n)}, c_{(n)}]`}</ILatex> è la parte sinistra</li>
                                        <li><ILatex>{r`[c_{(n)}, b_{(n)}]`}</ILatex> è la parte destra</li>
                                    </ul>
                                </li>
                                <li>
                                    Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e rinominiamolo in <ILatex>{r`[a_{(n+1)}, b_{(n+1)}]`}</ILatex>.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Metodo delle approssimazioni successive"}>
                <Panel title={"Metodi delle approssimazioni successive"}>
                    <p>
                        Sono <b>metodi iterativi</b> che funzionano in modo molto simile ai metodi iterativi per i sistemi lineari, utilizzando una funzione <ILatex>{r`\phi`}</ILatex> come "metodo".
                    </p>
                    <PLatex>{r`x = x - \phi(x) \cdot f(x)`}</PLatex>
                    <p>
                        Che diventa:
                    </p>
                    <PLatex>{r`x_{(k+1)} = g( x_{(k)} )`}</PLatex>
                    <p>
                        Sfruttano i <b>punti fissi</b> <ILatex>{r`g(x_{(*)}) = x_{(*)}`}</ILatex> della funzione <ILatex>{r`f`}</ILatex> per convergere:<br/>
                        se <ILatex>{r`\phi(x)`}</ILatex> non ha zeri, allora i punti fissi <b>coincideranno</b> con gli <b>zeri</b> della funzione <ILatex>{r`f`}</ILatex>.
                    </p>
                    <PLatex>{r`g(x) = x - \phi(x) \cdot f(x)`}</PLatex>
                    <p>
                        Si può raggiungere iterativamente ad un punto fisso attraverso la formula:
                    </p>
                    <PLatex>{r`x_{(k+1)} = g( x_{(k)} )`}</PLatex>
                    <p>
                        <u>Teorema della mappa contrattiva</u>: il punto fisso <b>esiste</b> ed è <b>unico</b>. <Todo>TODO: Studiarlo?</Todo>
                    </p>
                    <p>
                        Non si conosce in anticipo il numero di iterazioni necessarie per soddisfare la tolleranza <ILatex>{r`\tau`}</ILatex>; ad ogni iterazione, si controlla se la tolleranza è soddisfatta:
                    </p>
                    <ul>
                        <li>Nella differenza tra due iterate: <ILatex>{r`\frac{\left| x_{(k+1)} - x_{(k)} \right|}{\left| x_{(k+1)} \right|} \leq \tau`}</ILatex></li>
                        <li>Nel <i>residuo</i> del problema: <ILatex>{r`\left| f(x_{(k)}) \right| \leq \tau`}</ILatex></li>
                    </ul>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodo di Newton"}>
                    <p>
                        Sfrutta la <b>continuità</b> delle funzioni per ottenere una convergenza di ordine più alto.
                    </p>
                    <PLatex>{r`\phi (x) = \frac{1}{f' (x)}`}</PLatex>
                    <PLatex>{r`x_{(k+1)} = x_{(k)} - \frac{ f(x_{(k)}) }{ f'(x_{(k)}) }`}</PLatex>
                    <Example>
                        Geometricamente, corrisponde a prolungare una retta nel punto <ILatex>{r`(x_{(k)}, f(x_{(k)}))`}</ILatex> con pendenza <ILatex>{r`f'(x_{(k)})`}</ILatex>, e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine nella funzione.
                    </Example>
                    <p>
                        Ha costo computazionale di <b>2 valutazioni di funzione</b> più <b>2 valutazioni di derivata</b>.
                    </p>
                    <p>
                        Ha <b>convergenza quadratica</b>.
                    </p>
                </Panel>
                <Panel title={"Metodo delle secanti"}>
                    <p>
                        È come il metodo di Newton, ma usa il <b>rapporto incrementale</b>, in modo da poter essere applicato a funzioni non continue.
                    </p>
                    <PLatex>{r`\phi (x) = \frac{ 1 }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`}</PLatex>
                    <PLatex>{r`x_{(k+1)} = x_{(k)} - \frac{ f(x_{(k)}) }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`}</PLatex>
                    <Example>
                        Geometricamente, corrisponde a costruire una retta che attraversa i punti <ILatex>{r`(x_{(k)}, f(x_{(k)}))`}</ILatex> e <ILatex>{r`(x_{(k-1)}, f(x_{(k-1)}))`}</ILatex>, e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine nella funzione.
                    </Example>
                    <p>
                        Ha costo computazionale di <b>3 valutazioni di funzione</b>.
                    </p>
                    <p>
                        Ha <b>convergenza superlineare</b>.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
