import style from "./01_SistemiLineari.less"
import {ILatex, Panel, PLatex, Section, Todo} from "bluelib";
import Link from "../../components/Link";
import Example from "../../components/Example";
import {Fragment} from "preact";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Problema: Risoluzione di sistemi lineari"}>
                <Panel title={"Descrizione"}>
                    <p>
                        Dato un sistema di equazioni lineari, si vuole trovare la sua soluzione.
                    </p>
                    <p>
                        In forma matriciale, avrà una <b>matrice dei coefficienti</b> <ILatex>{r`A`}</ILatex>, un <b>vettore dei termini noti</b> <ILatex>{r`b`}</ILatex> e un <b>vettore delle incognite</b> <ILatex>{r`x`}</ILatex>.
                    </p>
                    <p>
                        L'equazione matriciale del sistema è:
                    </p>
                    <PLatex>{r`A \cdot x = b`}</PLatex>
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
                        Se tutti i valori sulla diagonale di <ILatex>{r`A`}</ILatex> sono <b>diversi da 0 <small>(eccetto l'ultimo)</small></b> allora è possibile <i>fattorizzarla</i> in due matrici: una <ILatex>{r`L`}</ILatex> <b>triangolare inferiore</b>, e una <ILatex>{r`U`}</ILatex> <b>triangolare superiore</b>.
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
                    <Example>
                        È la parte triangolare superiore di <ILatex>{r`A`}</ILatex>!
                    </Example>
                    <p>
                        Il sistema può essere poi risolto applicando due volte il metodo di sostituzione (all'avanti e all'indietro):
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
                        Alla formula precedente si aggiunge una <b>matrice di permutazione</b> che indica quali righe sono state scambiate:
                    </p>
                    <PLatex>{r`P \cdot A = L \cdot U`}</PLatex>
                    <p>
                        Per massimizzare la stabilità, si cerca di <b>usare come perno l'elemento più grande</b> della colonna.
                    </p>
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
                        Per massimizzare la stabilità, si cerca di <b>ordinare in modo decrescente la diagonale</b>, assicurandoci che il primo perno sia più grande del secondo e così via.
                    </p>
                    <p>
                        Questo metodo ha costo computazionale:
                    </p>
                    <PLatex>{r`{\color{Yellow} O\left(\frac{n^3}{3}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> a banda</span>}>
                    <p>
                        Se la matrice <ILatex>{r`A`}</ILatex> è <b>a banda</b>, è possibile risparmiare spazio durante la fattorizzazione, in quanto sia <ILatex>{r`L`}</ILatex> sia <ILatex>{r`U`}</ILatex> saranno a banda!
                    </p>
                </Panel>
                <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> sparsa</span>}>
                    <p>
                        Se la matrice <ILatex>{r`A`}</ILatex> è <b>sparsa</b>, non è detto che <ILatex>{r`L`}</ILatex> e <ILatex>{r`U`}</ILatex> siano sparse a loro volta.
                    </p>
                    <p>
                        Per evitare il <u>fill-in</u>, è necessario <b>riordinare</b> la matrice <ILatex>{r`A`}</ILatex> in modo che sia il più possibile simile a una matrice a banda. <Todo>TODO: Confermare?</Todo>
                    </p>
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
                            \\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot d_{kk} \cdot l_{jk}}{d_{ii}}
                        \end{cases}
                    `}</PLatex>
                    <Example>
                        <p>
                            La prima colonna della matrice sarà:
                        </p>
                        <PLatex>{r`
                            \begin{cases}
                                d_{11} = A_{11}\\
                                \\
                                l_{i1} = \frac{A_{i1}}{d_{11}}
                            \end{cases}
                        `}</PLatex>
                        <p>
                            La seconda colonna della matrice sarà:
                        </p>
                        <PLatex>{r`
                            \begin{cases}
                                d_{22} = A_{22} - d_{11} \cdot (l_{21})^2\\
                                \\
                                l_{i2} = \frac{A_{i2} - l_{i1} \cdot d_{11} \cdot l_{21}}{d_{ii}}
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
                            \\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot l_{jk}}{l_{ii}}
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
                        Matrice ricavata dalla seguente formula, dove <ILatex>{r`v`}</ILatex> è la colonna di un'altra matrice:
                    </p>
                    <PLatex>{r`U(v) = \mathbf{I} - \frac{2 \cdot v \cdot v^T}{\| v \|_{(2)}^2}`}</PLatex>
                    <p>
                        Se moltiplicata per per la matrice da cui proviene <ILatex>{r`v`}</ILatex>, sostituirà la colonna <ILatex>{r`v`}</ILatex> con la colonna:
                    </p>
                    <PLatex>{r`
                        \begin{pmatrix}
                            - \| v \|\\\\
                            0\\\\
                            0\\\\
                            \vdots\\\\
                            0
                        \end{pmatrix}
                    `}</PLatex>
                    <p>
                        Si calcola con una complessità computazionale nell'ordine di <ILatex>{r`O(n)`}</ILatex>.
                    </p>
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
                        Le matrici si ottengono dal <b>prodotto delle trasformazioni di Householder</b> (che concatenate formano <ILatex>{r`Q`}</ILatex>) sulla matrice <ILatex>{r`A`}</ILatex> necessarie a trasformarla in una matrice triangolare superiore (<ILatex>{r`R`}</ILatex>).
                    </p>
                    <Example>
                        C'è un bell'esempietto <Link href={"https://web.archive.org/web/20200828003151/https://rpubs.com/aaronsc32/qr-decomposition-householder"}>qui</Link>.
                    </Example>
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
                </Panel>
            </Section>
            <Section title={"Metodi iterativi"}>
                <Panel title={"Forma generale"}>
                    <p>
                        Se si pone che:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            G = I - M^{-1} \cdot A\\
                            c = M^{-1} \cdot b
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Allora la formula generale di un sistema lineare può anche essere scritta in questo modo:
                    </p>
                    <PLatex>{r`x = G \cdot x + c`}</PLatex>
                    <p>
                        È particolarmente utile perchè ci permette di definire un <b>algoritmo ricorsivo</b> che trovi <ILatex>{r`x`}</ILatex>:
                    </p>
                    <PLatex>{r`x_{(i+1)} = G \cdot x_{(i)} + c`}</PLatex>
                    <p>
                        <ILatex>{r`G`}</ILatex> è il <b>metodo</b>, e in base ad esso cambiano stabilità e velocità di convergenza.
                    </p>
                    <p>
                        Ponendo <ILatex>{r`A = M - N`}</ILatex>, la formula può essere scritta anche in questo modo:
                    </p>
                    <PLatex>{r`M \cdot x_{(i+1)} = N \cdot x_{(i)} + b`}</PLatex>
                    <p>
                        Possiamo ottenere alcuni metodi separando <ILatex>A</ILatex> in tre matrici:
                    </p>
                    <ul>
                        <li>La parte diagonale <ILatex>{r`D`}</ILatex></li>
                        <li>L'opposto del triangolo inferiore <ILatex>{r`E`}</ILatex></li>
                        <li>L'opposto del triangolo superiore <ILatex>{r`F`}</ILatex></li>
                    </ul>
                    <PLatex>{r`A = D - E - F`}</PLatex>
                </Panel>
                <Panel title={"Convergenza di un metodo"}>
                    <p>
                        Un metodo è convergente se e solo se:
                    </p>
                    <PLatex>{r`\rho (M) < 1`}</PLatex>
                    <p>
                        (dove <ILatex>{r`\rho`}</ILatex> è il <b>raggio spettrale</b>, il massimo autovalore della matrice)
                    </p>
                    <p>
                        Perchè un metodo sia convergente, è sufficiente che:
                    </p>
                    <PLatex>{r`\| M \| < 1`}</PLatex>
                    <p>
                        <Todo>TODO: l'algoritmo con tau per le condizioni di arresto</Todo>
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodo di Jacobi"}>
                    <p>
                        Il metodo di Jacobi si ottiene ponendo:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            M = D\\
                            N = E + F
                        \end{cases}
                    `}</PLatex>
                    <p>
                        <u>Spostamenti simultanei</u>: Permette di ottenere ogni componente di <ILatex>{r`x`}</ILatex> indipendentemente dagli altri: è <b>parallelizzabile</b>.
                    </p>
                    <p>
                        Se la matrice è <b>diagonale dominante</b>, allora il metodo di Jacobi <b>converge</b> sicuramente.
                    </p>
                </Panel>
                <Panel title={"Metodo di Gauss-Seidel"}>
                    <p>
                        Il metodo di Gauss-Seidel si ottiene ponendo:
                    </p>
                    <PLatex>{r`
                        \begin{cases}
                            M = D - E\\
                            N = F
                        \end{cases}
                    `}</PLatex>
                    <p>
                        Ha una velocità di convergenza <b>maggiore o uguale</b> rispetto al metodo di Jacobi.
                    </p>
                    <p>
                        <u>Spostamenti successivi</u>: Non è parallelizzabile, perchè ogni componente <b>dipende da quelle calcolate in precedenza</b>.
                    </p>
                    <p>
                        Se la matrice è <b>diagonale dominante</b>, allora il metodo di Gauss-Seidel <b>converge</b> sicuramente.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
