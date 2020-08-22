import {ILatex, Panel, PLatex, Section, Timer, Todo} from "bluelib";
import Example from "../components/Example";
import Link from "../components/Link";
import MenuList from "../components/MenuList";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Calcolo Numerico</h1>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:silvia.bonettini@unimore.it"}>Prof.ssa Silvia Bonettini</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Orale"}>
                    <p>
                        E' composto da:
                    </p>
                    <ul>
                        <li>2 domande sugli argomenti teorici</li>
                        <li>1 domanda di implementazione algoritmo in MATLAB</li>
                    </ul>
                </Panel>
                <Panel title={"Prossimi appelli"}>
                    <ol>
                        <li><Timer to={"2020-08-31 09:00"}/></li>
                        <li><Timer to={"2020-09-14 09:00"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Informazioni"}>
                <Panel title={"Ripasso di Algebra Lineare"}>
                    <p>
                        Prima di iniziare a studiare Calcolo Numerico, potrebbe essere una buona idea ripassare un pochino Algebra Lineare:
                    </p>
                    <MenuList>
                        <li>
                            <a href={"/calcolonumerico/ripassodialgebralineare"}>Ripasso di Algebra Lineare</a> <small>(per studenti sperduti di Calcolo Numerico)</small>
                        </li>
                    </MenuList>
                </Panel>
            </Section>
            <Section title={"Algoritmi"}>
                <Panel title={"Algoritmi numerici"}>
                    <p>
                        Particolari algoritmi che hanno:
                    </p>
                    <ul>
                        <li>numeri reali in input e output</li>
                        <li>successioni delle quattro operazioni aritmetiche fondamentali come passi</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Errore di rappresentazione"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Con i numeri floating point può capitare che un certo numero <ILatex>{r`\alpha`}</ILatex> non
                        sia rappresentato correttamente.
                    </p>
                    <p>
                        In tal caso, il numero si indica con <ILatex>{r`\alpha^*`}</ILatex>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Errore assoluto"}>
                    <p>
                        È la differenza tra il numero desiderato e il numero rappresentato:
                    </p>
                    <PLatex>{r`E_a = \left | \alpha - \alpha^* \right |`}</PLatex>
                </Panel>
                <Panel title={"Errore relativo"}>
                    <p>
                        Indica quanto il numero rappresentato differisce dal numero desiderato:
                    </p>
                    <PLatex>{r`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Troncamento"}>
                    <p>
                        Metodo con cui gestire gli <b>underflow floating point</b>: le cifre meno significative
                        vengono <b>rimosse</b>.
                    </p>
                    <Example>
                        <pre>
                            1.00  →  1.0<br/>
                            1.01  →  1.0<br/>
                            1.10  →  1.1<br/>
                            1.11  →  1.1
                        </pre>
                    </Example>
                </Panel>
                <Panel title={"Arrotondamento"}>
                    <p>
                        Metodo con cui gestire gli <b>underflow floating point</b>: se la cifra più significativa di
                        quelle che devono essere rimosse è 1, allora <b>aumenta di 1</b> anche quella meno signficativa
                        che viene tenuta.
                    </p>
                    <Example>
                        <pre>
                            1.00  →  1.0<br/>
                            1.01  →  1.0<br/>
                            1.10  →  1.1<br/>
                            1.11  → 10.
                        </pre>
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Precisione di macchina"}>
                    <p>
                        Un numero reale rappresentato in <b>virgola mobile</b> ha un <b>errore relativo</b> minore o uguale alla <i>precisione
                        di macchina</i>:
                    </p>
                    <p>
                        <ILatex>{r`E_r \leq k \cdot \beta^{1-t}`}</ILatex>
                    </p>
                    <ul>
                        <li>
                            <ILatex>\beta</ILatex> è uguale alla base utilizzata (solitamente 2).
                        </li>
                        <li>
                            <ILatex>t</ILatex> è uguale al numero di cifre della mantissa.
                        </li>
                        <li>
                            <ILatex>k</ILatex> è uguale a <ILatex>1</ILatex> se il numero viene rappresentato per
                            troncamento oppure a <ILatex>{r`\frac{1}{2}`}</ILatex> se viene rappresentato per
                            arrotondamento.
                        </li>
                    </ul>
                </Panel>
                <Panel title={"La funzione fl"}>
                    <p>
                        Associa un valore reale al suo <b>corrispondente valore floating point</b>, utilizzando uno dei
                        due metodi di gestione dell'undeflow.
                    </p>
                    <PLatex>{r`fl(x) = (x)(1 + \epsilon_x)`}</PLatex>
                    <Example>
                        Indica che un valore è soggetto alla precisione di macchina.
                        <PLatex>{r`fl(1.11) = 1.1`}</PLatex>
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Un nuovo insieme"}>
                    <p>
                        L'insieme <ILatex>{r`\mathbb{F}`}</ILatex> è il sottoinsieme dei numeri reali rappresentabili in
                        floating point dalla macchina che stiamo usando.
                    </p>
                    <p>
                        Operazioni tra elementi di <ILatex>{r`\mathbb{F}`}</ILatex> producono risultati
                        in <ILatex>{r`\mathbb{R}`}</ILatex>, che però decaderanno nuovamente a elementi
                        di <ILatex>{r`\mathbb{F}`}</ILatex>, perdendo informazioni.
                    </p>
                    <p>
                        Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.
                    </p>
                </Panel>
                <Panel title={"Caratteristiche delle operazioni di macchina"}>
                    <ul>
                        <li>Hanno <b>più elementi neutri</b>.</li>
                        <li>Un numero ha <b>più opposti</b>.</li>
                        <li><b>Non</b> sono associative.</li>
                        <li><b>Non</b> sono distributive.</li>
                        <li><b>Non</b> vale la legge di annullamento del prodotto.</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Errori nelle operazioni di macchina"}>
                <Panel title={"Errore inerente"}>
                    <p>
                        Errore derivato da underflow sui <b>dati</b>.
                    </p>
                    <p>
                        Si indica con <ILatex>{r`\epsilon_{nome\_var}`}</ILatex>.
                    </p>
                    <Example>
                        L'errore sulla variabile <ILatex>x</ILatex> si indica con <ILatex>{r`\epsilon_{x}`}</ILatex>.
                    </Example>
                </Panel>
                <Panel title={"Errore algoritmico"}>
                    <p>
                        Errore derivato da underflow durante l'<b>esecuzione dell'algoritmo</b>.
                    </p>
                    <p>
                        Si indica con <ILatex>{r`\epsilon_{num\_passo}`}</ILatex>.
                    </p>
                    <Example>
                        L'errore al primo passo dell'algoritmo si indica con <ILatex>{r`\epsilon_{1}`}</ILatex>.
                    </Example>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Condizionamento"}>
                    <p>
                        Sensibilità di un problema all'<b>errore inerente</b>.
                    </p>
                    <Example>
                        <ILatex>{r`y = \frac{1}{x}`}</ILatex> è mal condizionato intorno allo 0 e ben condizionato
                        lontano dallo 0.
                    </Example>
                </Panel>
                <Panel title={"Stabilità"}>
                    <p>
                        Sensibilità di un problema all'<b>errore algoritmico</b>.
                    </p>
                    <Example>
                        <p>
                            Cerchiamo un algoritmo che risolva <ILatex>{r`2x^* = 4`}</ILatex>.
                        </p>
                        <p>
                            Calcolare prima <ILatex>{r`t = fl \left( \frac{1}{4} \right)`}</ILatex> e
                            poi <ILatex>{r`x = fl ( 2 \cdot t )`}</ILatex> porta a una perdita di precisione.
                        </p>
                        <p>
                            Calcolare direttamente <ILatex>{r`x = fl \left( \frac{2}{4} \right)`}</ILatex> non ha alcuna
                            perdita di precisione e rende l'algoritmo <b>più stabile</b> del precedente.
                        </p>
                    </Example>
                </Panel>
            </Section>
            <Section>
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
            </Section>
            <Section title={"Problema: Risoluzione di sistemi lineari"}>
                <Panel title={"Descrizione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Condizionamento"}>
                    <p>
                        Il condizionamento della risoluzione di sistemi lineari è:
                    </p>
                    <PLatex>{r`\frac{{\color{yellow} \|A\| \cdot \|A^{-1}\|} \cdot \| \Delta b \|}{\| b \|}`}</PLatex>
                    <p>
                        In particolare, è segnato in giallo nella formula il <b>numero di condizionamento</b>:
                    </p>
                    <PLatex>
                        {r`k(A) = \| A \| \cdot \| A^{-1} \|`}
                    </PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodi diretti"}>
                    <p>
                        Metodi che trovano la soluzione esatta<abbr title={"Per quanto possibile nell'algebra di macchina."}>*</abbr> di un sistema lineare.
                    </p>
                    <p>
                        Tipicamente prevedono la <b>fattorizzazione</b> della matrice dei coefficienti in due sottomatrici più facili da risolvere.
                    </p>
                    <p>
                        Generalmente hanno una complessità temporale <ILatex>{r`O(n^3)`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"Metodi iterativi"}>
                    <p>
                        Metodi che trovano una soluzione imperfetta<abbr title={"Che però può essere la migliore ottenibile, considerando la precisione di macchina."}>*</abbr> di un sistema lineare.
                    </p>
                    <p>
                        Tipicamente prevedono l'applicazione ripetuta di un <b>metodo</b>, in base al quale cambia la <b>velocità di convergenza</b> alla soluzione.
                    </p>
                    <p>
                        Generalmente hanno una complessità temporale <ILatex>{r`O(n^2)`}</ILatex>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Metodi diretti"}>
                <Panel title={"Matrice diagonale"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Matrice triangolare"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex></span>}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> con pivoting</span>}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LDL^{-1}`}</ILatex></span>}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`\mathcal{L} \mathcal{L}^{-1}`}</ILatex></span>}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section>
                <Panel title={<span>Fattorizzazione <ILatex>{r`QR`}</ILatex></span>}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodi iterativi"}>
                <Panel title={"Metodo di Jacobi"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo di Gauss-Seidel"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Problema: Ricerca degli zeri di funzione"}>
                <Panel title={"Descrizione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Condizionamento"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodi dicotomici"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo delle approssimazioni successive"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodi dicotomici"}>
                <Panel title={"Metodo di bisezione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo regula falsi"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodo delle approssimazioni successive"}>
                <Panel title={"Metodo generale"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo di Newton"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
        </div>
    )
}
