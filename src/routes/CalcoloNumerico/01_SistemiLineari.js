import style from "./01_SistemiLineari.less"
import {ILatex, Panel, PLatex, Section, Todo} from "bluelib";
import Link from "../../components/Link";
import Example from "../../components/Example";
import {Fragment} from "preact";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
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
                <Panel title={"Divisione"}>
                    <p>
                        Se la matrice dei coefficienti del sistema è <b>diagonale</b>, allora è possibile trovare la soluzione <i>dividendo</i> ogni termine noto per l'unico coefficiente diverso da zero presente nella sua riga:
                    </p>
                    <PLatex>{r`x_i = \frac{b_i}{A_{ii}}`}</PLatex>
                </Panel>
                <Panel title={"Sostituzione"}>
                    <p>
                        Se la matrice dei coefficienti del sistema è <b>triangolare</b> inferiore o superiore, allora è possibile trovare la soluzione effettuando una <i>sostituzione</i> all'avanti oppure all'indietro:
                    </p>
                    <PLatex>{r`x_i = \frac{b_i - \sum_{k = 1}^{i - 1} (x_k \cdot A_{ik})}{A_{ii}}`}</PLatex>
                    <PLatex>{r`x_i = \frac{b_i - \sum_{k = i - 1}^{n} (x_k \cdot A_{ik})}{A_{ii}}`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex></span>}>
                    <p>
                        Se la matrice dei coefficienti del sistema <b>non ha <Link href={"https://it.wikipedia.org/wiki/Minore_(algebra_lineare)"}>minori</Link> uguali a 0 <small>(eccetto l'ultimo)</small></b> allora è possibile <i>fattorizzarla</i> in due matrici: una <ILatex>{r`L`}</ILatex> triangolare inferiore, e una <ILatex>{r`U`}</ILatex> triangolare superiore.
                    </p>
                    <PLatex>{r`A = L \cdot U`}</PLatex>
                    <Example>
                        Abbiamo fatto questo metodo in Algebra Lineare, chiamandolo <b>metodo di Gauss</b>.
                    </Example>
                    <p>
                        La matrice <ILatex>{r`L`}</ILatex> è così composta:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            L_{ii} = 1 \qquad \qquad (diagonale)\\
                            L_{ik} = -\frac{A_{ik}}{A_{kk}} \qquad (tri.\ infer.)
                        \end{cases}
                    `}</PLatex>
                    <Example>
                        Sono i moltiplicatori usati per rendere annullare il triangolo inferiore!
                    </Example>
                    <p>
                        La matrice <ILatex>{r`U`}</ILatex> è così composta:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            U_{ik} = A_{ik} \quad se\ i \leq k \quad (tri.\ super.)\\
                            U_{ik} = 0 \qquad se\ i > k \quad (tri.\ infer.)
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Il sistema può essere poi risolto applicando due volte il metodo di sostituzione:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            L \cdot y = b\\
                            U \cdot x = y
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{n^3}{3}\right)} + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> con pivoting parziale</span>}>
                    <p>
                        È possibile applicare la fattorizzazione <ILatex>{r`LU`}</ILatex> a <b>qualsiasi matrice non-singolare</b> permettendo lo scambio (<i>pivoting</i>) delle righe, potenzialmente <b>aumentando la stabilità</b> dell'algoritmo.
                    </p>
                    <Example>
                        Abbiamo fatto questo metodo in Algebra Lineare, chiamandolo <b>metodo di Gauss-Jordan</b>!
                    </Example>
                    <p>
                        Alla formula precedente si aggiunge una <Link href={"https://it.wikipedia.org/wiki/Matrice_di_permutazione"}>matrice di permutazione</Link> che indica quali righe sono state scambiate:
                    </p>
                    <PLatex>{r`P \cdot A = L \cdot U`}</PLatex>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{n^2}{2}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> con pivoting totale</span>}>
                    <p>
                        È possibile anche permettere il <i>pivoting</i> <b>sulle colonne</b> per <b>aumentare ulteriormente la stabilità</b> dell'algoritmo, a costo di maggiore costo computazionale:
                    </p>
                    <PLatex>{r`P \cdot A \cdot Q = L \cdot U`}</PLatex>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{n^3}{3}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LDL^{-1}`}</ILatex></span>}>
                    <p>
                        È possibile <b>ridurre la complessità computazionale</b> della fattorizzazione <ILatex>{r`LU`}</ILatex> se la matrice dei coefficienti è <b>simmetrica</b>:
                    </p>
                    <PLatex>{r`A = L \cdot D \cdot L^{-1}`}</PLatex>
                    <p>
                        In questo caso, si calcola solo la matrice L, utilizzando il <b>metodo di pavimentazione</b>.
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            d_{ii} = A_{ii} - \sum_{k=1}^{i-1} ( d_{kk} \cdot (l_{jk})^2 )\\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot d_{kk} \cdot l_{jk}}{d_ii}
                        \end{cases}
                    `}</PLatex>
                    <Example>
                        <p>
                            La prima colonna della matrice sarà:
                        </p>
                        <PLatex>{r`
                            \begin{cases}
                                d_{11} = A_{11}
                                l_{i1} = \frac{A_{i1}}{d_{11}}
                            \end{cases}
                        `}</PLatex>
                        <p>
                            La seconda colonna della matrice sarà:
                        </p>
                        <PLatex>{r`
                            \begin{cases}
                                d_{22} = A_{22} - d_{11} \cdot (l_{21})^2\\
                                l_{i2} = \frac{A_{i2} - l_{i1} \cdot d_{11} \cdot l_{21}}{d_ii}
                            \end{cases}
                        `}</PLatex>
                    </Example>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{n^3}{6}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`\mathcal{L} \mathcal{L}^{-1}`}</ILatex></span>}>
                    <p>
                        È possibile dare <b>stabilità forte</b> alla fattorizzazione <ILatex>{r`LDL^{-1}`}</ILatex> se la matrice dei coefficienti è <b>simmetrica definita positiva</b>:
                    </p>
                    <PLatex>{r`A = \mathcal{L} \cdot \mathcal{L}^{-1}`}</PLatex>
                    <p>
                        Il <b>metodo di pavimentazione</b> diventa:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            l_{ii} = \sqrt{A_{ii} - \sum_{k=1}^{i-1}  (l_{ik})^2 }\\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot l_{jk}}{l_ii}
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`O\left(\frac{n^3}{3}\right) + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Trasformazione di Householder"}>
                    <p>
                        Matrice ricavata dalla seguente formula:
                    </p>
                    <PLatex>{r`U(v) = I - \frac{1}{\alpha} \cdot v \cdot v^T`}</PLatex>
                    <PLatex>{r`\alpha = \frac{1}{2} \| v \|_{(2)}^2`}</PLatex>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`QR`}</ILatex></span>}>
                    <p>
                        Metodo che fornisce una <b>maggiore stabilità</b> a costo di una <b>maggiore complessità computazionale</b>.
                    </p>
                    <p>
                        La matrice <ILatex>{r`A`}</ILatex> viene <i>fattorizzata</i> in due matrici, una <b>ortogonale</b> <ILatex>{r`Q`}</ILatex> e una <b>triangolare superiore</b> <ILatex>{r`R`}</ILatex>:
                    </p>
                    <PLatex>{r`A = Q \cdot R`}</PLatex>
                    <p>
                        Le matrici si ottengono dal prodotto delle trasformazioni di Householder (<ILatex>{r`Q`}</ILatex> sulle colonne della matrice <ILatex>{r`A`}</ILatex>, trasformandola in una matrice triangolare superiore (<ILatex>{r`R`}</ILatex>).
                    </p>
                    <p>
                        Una volta fattorizzata, il sistema si può risolvere con:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            y = Q^T \cdot b\\
                            R \cdot x = y
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{2 \cdot n^3}{3}\right)} + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                    <p>
                        <Todo>TODO: l'algoritmo con tau per ricavare la q se non è in memoria</Todo>
                    </p>
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
        </Fragment>
    )
}
