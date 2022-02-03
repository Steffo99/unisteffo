import * as Bluelib from "@steffo/bluelib-react"
import { BaseElement } from "@steffo/bluelib-react/dist/components/BaseElement"
import { Section, Panel, r, ILatex, BLatex, PLatex, P, Anchor, I, B, Help, Example, Link } from "../../components/compat-old"
import 'katex/dist/katex.min.css';
import { WarningIncomplete, WarningPorted, WarningUnchecked } from "../../components/warnings";


export default function CalcoloNumerico() {
    return <>
        <Bluelib.Heading level={2}>
            Calcolo numerico
        </Bluelib.Heading>
        <Bluelib.Chapter>
            <Bluelib.Box>
                <Bluelib.Heading level={3}>
                    Introduzione
                </Bluelib.Heading>
                <p>
                    <Bluelib.Idiomatic>Calcolo numerico</Bluelib.Idiomatic> credo sia il corso per il quale ho realizzato il materiale più dettagliato.
                </p>
                <p>
                    Avere tutto schematizzato mi ha permesso di apprendere facilmente tutti i concetti! 
                </p>
                <p>
                    Non ho però realizzato nessun materiale su MATLAB, in quanto esistevano già numerose guide su Internet a riguardo...
                </p>
                <WarningPorted />
                <WarningUnchecked />
                <WarningIncomplete />
            </Bluelib.Box>
        </Bluelib.Chapter>
        <Section title={"Matrici speciali"}>
            <Panel title={"Matrice identità"}>
                <p>
                    Elemento neutro della moltiplicazione matriciale.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Yellow} 1} & {\color{Yellow} 0} & {\color{Yellow} 0}\\
                            {\color{Yellow} 0} & {\color{Yellow} 1} & {\color{Yellow} 0}\\
                            {\color{Yellow} 0} & {\color{Yellow} 0} & {\color{Yellow} 1}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice diagonale"}>
                <p>
                    Matrice con elementi diversi da 0 solo sulla diagonale.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                            {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                            {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice triangolare inferiore"}>
                <p>
                    Matrice con elementi diversi da 0 sopra la diagonale.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                            {\color{Orange} 4} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                            {\color{Orange} 5} & {\color{Orange} 5} & {\color{Yellow} 5}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice triangolare superiore"}>
                <p>
                    Matrice con elementi diversi da 0 sotto la diagonale.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Yellow} 3} & {\color{Orange} 3} & {\color{Orange} 3}\\
                            {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Orange} 4}\\
                            {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice non-singolare"}>
                <p>
                    Matrice con determinante diverso da 0.
                </p>
                <PLatex>{r`det(A) \neq 0`}</PLatex>
                <p>
                    Sono anche dette <b>matrici linearmente indipendenti</b> o <b>matrici invertibili</b>.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Yellow} 1} & {\color{Yellow} 1} & {\color{Yellow} 2}\\
                            {\color{Orange} 2} & {\color{Orange} 1} & {\color{Orange} 1}\\
                            {\color{Red} 1} & {\color{Red} 2} & {\color{Red} 1}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice simmetrica"}>
                <p>
                    Matrice con un asse di simmetria lungo la diagonale.
                </p>
                <PLatex>{r`A = A^T`}</PLatex>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            1 & {\color{Yellow} 2} & {\color{Orange} 4}\\ 
                            {\color{Yellow} 2} & 3 & {\color{Red} 5}\\ 
                            {\color{Orange} 4} & {\color{Red} 5} & 6
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice antisimmetrica"}>
                <p>
                    Matrice con un asse di simmetria lungo la diagonale; gli elementi nel triangolo superiore sono
                    però l'opposto di quelli del triangolo inferiore.
                </p>
                <p>
                    Ha sempre degli <ILatex>0</ILatex> lungo la diagonale.
                </p>
                <PLatex>{r`A = -A^T`}</PLatex>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Gray} 0} & {\color{Yellow} -2} & {\color{Orange} -4}\\ 
                            {\color{Yellow} 2} & {\color{Gray} 0} & {\color{Red} -5}\\ 
                            {\color{Orange} 4} & {\color{Red} 5} & {\color{Gray} 0}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice a diagonale dominante per riga/colonna"}>
                <p>
                    Matrice in cui i valori della diagonale sono maggiori della somma di tutti gli altri nella
                    riga/colonna.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Orange} 9} & 1 & 2\\
                            1 & {\color{Orange} 8} & 1\\
                            1 & 2 & {\color{Orange} 7}
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice ortogonale"}>
                <p>
                    Matrice che se moltiplicata per la sua trasposta dà come risultato la <b>matrice identità</b>.
                </p>
                <PLatex>{r`A^T \cdot A = I`}</PLatex>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            \frac{1}{3} & \frac{2}{3} & -\frac{2}{3}\\
                            \frac{2}{3} & \frac{1}{3} & \frac{2}{3}\\
                            \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3}\\
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice inversa"}>
                <p>
                    Matrice tale che:
                </p>
                <PLatex>{r`A^{-1} \cdot A = I`}</PLatex>
            </Panel>
            <Panel title={"Matrice sparsa"}>
                <p>
                    Matrice con pochissimi valori diversi da 0.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                            1 & 1 & {\color{Gray} 0}\\
                            {\color{Gray} 0} & {\color{Gray} 0} & 1
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
            </Panel>
            <Panel title={"Matrice di permutazione"}>
                <p>
                    Matrice riempita di 0 eccetto per un solo 1 per riga e per colonna.
                </p>
                <Example>
                    <PLatex>{r`
                        \begin{pmatrix}
                            {\color{Gray} 0} & {\color{Gray} 0} & 1\\
                            {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                            1 & {\color{Gray} 0} & {\color{Gray} 0}\\
                        \end{pmatrix}
                    `}</PLatex>
                </Example>
                <p>
                    Se premoltiplicata per una matrice, ne <b>riordina le righe</b>; se invece postmoltiplicata, ne <b>riordina le colonne</b>.
                </p>
                <Example>
                    <p>
                        Premoltiplicare la matrice precedente scambia la prima e la terza righa, postmoltiplicarla scambia la prima e la terza colonna.
                    </p>
                </Example>
            </Panel>
            <Panel title={"Matrice di permutazione elementare"}>
                <p>
                    Matrice di permutazione con un solo scambio.
                </p>
                <p>
                    Sono <b>nonsingolari</b>, <b>simmetriche</b> e <b>ortogonali</b>.
                </p>
            </Panel>
        </Section>
        <Section title={"Norme vettoriali"}>
            <Panel title={"Norma vettoriale"}>
                <p>
                    Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero.
                </p>
                <Example>
                    <a href={"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"}>Esempi
                        su Wikipedia</a>
                </Example>
            </Panel>
            <Panel title={"Norma a infinito"}>
                <p>
                    Massimo dei valori assoluti di tutti gli elementi del vettore.
                </p>
                <p>
                    <ILatex>{r`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`}</ILatex>
                </p>
            </Panel>
            <Panel title={"Norma a 1"}>
                <p>
                    Somma dei valori assoluti di tutti gli elementi del vettore.
                </p>
                <p>
                    <ILatex>{r`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`}</ILatex>
                </p>
            </Panel>
            <Panel title={"Norma a 2"}>
                <p>
                    Radice quadrata della somma dei quadrati di tutti gli elementi del vettore.
                </p>
                <p>
                    <ILatex>{r`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`}</ILatex>
                </p>
            </Panel>
        </Section>
        <Section title={"Norme matriciali"}>
            <Panel title={"Norma matriciale indotta"}>
                <p>
                    Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero.
                </p>
                <p>
                    Si ricavano dalle norme vettoriali:
                </p>
                <p>
                    <ILatex>{r`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`}</ILatex>
                </p>
                <Example>
                    <ILatex>sup</ILatex> è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le
                    prime lezioni di Analisi?
                </Example>
            </Panel>
            <Panel title={"Norma a infinito"}>
                <p>
                    Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice.
                </p>
                <p>
                    <ILatex>{r`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`}</ILatex>
                </p>
            </Panel>
            <Panel title={"Norma a 1"}>
                <p>
                    Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice.
                </p>
                <p>
                    <ILatex>{r`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`}</ILatex>
                </p>
            </Panel>
            <Panel title={"Norma a 2"}>
                <p>
                    Radice quadrata del rango del prodotto tra una matrice e la sua trasposta.
                </p>
                <p>
                    <ILatex>{r`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`}</ILatex>
                </p>
            </Panel>
        </Section>
        <Section title={"Norme tra funzioni"}>
            <Panel title={"Norma di funzione"}>
                <p>
                    Funzione che associa un valore reale positivo a ogni funzione.
                </p>
            </Panel>
            <Panel title={"Norma a infinito"}>
                <p>
                    Valore massimo che assume la funzione nel suo dominio.
                </p>
                <PLatex>{r`\| f \|_\infty = max | f(x) |`}</PLatex>
            </Panel>
        </Section>
        <Section title={"Errori"}>
            <Panel title={"Errore relativo tra vettori e matrici"}>
                <p>
                    Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:
                </p>
                <p>
                    <ILatex>{r`\frac{\Vert x - y \Vert}{\Vert x \Vert}`}</ILatex>
                </p>
            </Panel>
            <Panel title={"Errore assoluto tra funzioni"}>
                <p>
                    L'errore, ovvero la <b>massima distanza</b> tra due funzioni, si ottiene con:
                </p>
                <PLatex>{r`\| f - g \|_\infty`}</PLatex>
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
                    In tal caso, il numero si indica con <ILatex>{r`\alpha^\star`}</ILatex>.
                </p>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Errore assoluto"}>
                <p>
                    È la differenza tra il numero desiderato e il numero rappresentato:
                </p>
                <PLatex>{r`E_a = \left | \alpha - \alpha^\star \right |`}</PLatex>
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
                    Un numero reale rappresentato in <b>virgola mobile</b> ha un <b>errore relativo</b> minore o
                    uguale alla <i>precisione
                    di macchina</i>:
                </p>
                <p>
                    <ILatex>{r`\epsilon_x \leq k \cdot \beta^{1-t}`}</ILatex>
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
                        Cerchiamo un algoritmo che risolva <ILatex>{r`2x^\star = 4`}</ILatex>.
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
                <p>
                    Dato un sistema di equazioni lineari, si vuole trovare la sua soluzione.
                </p>
                <p>
                    In forma matriciale, avrà una <b>matrice dei coefficienti</b> <ILatex>{r`A`}</ILatex>, un <b>vettore
                    dei termini noti</b> <ILatex>{r`b`}</ILatex> e un <b>vettore delle incognite</b>
                    <ILatex>{r`x`}</ILatex>.
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
                    Metodi che trovano la soluzione esatta<abbr
                    title={"Per quanto possibile nell'algebra di macchina."}>*</abbr> di un sistema lineare.
                </p>
                <p>
                    Tipicamente prevedono la <b>fattorizzazione</b> della matrice dei coefficienti in due
                    sottomatrici più facili da risolvere.
                </p>
                <p>
                    Generalmente hanno una complessità temporale <ILatex>{r`O(n^3)`}</ILatex>.
                </p>
            </Panel>
            <Panel title={"Metodi iterativi"}>
                <p>
                    Metodi che trovano una soluzione imperfetta<abbr
                    title={"Che però può essere la migliore ottenibile, considerando la precisione di macchina."}>*</abbr> di
                    un sistema lineare.
                </p>
                <p>
                    Tipicamente prevedono l'applicazione ripetuta di un <b>metodo</b>, in base al quale cambia
                    la <b>velocità di convergenza</b> alla soluzione.
                </p>
                <p>
                    Generalmente hanno una complessità temporale <ILatex>{r`O(n^2)`}</ILatex>.
                </p>
            </Panel>
        </Section>
        <Section title={"Metodi diretti"}>
            <Panel title={"Divisione"}>
                <p>
                    Se la matrice dei coefficienti del sistema è <b>diagonale</b>, allora è possibile trovare la
                    soluzione <i>dividendo</i> ogni termine noto per l'unico coefficiente diverso da zero presente
                    nella sua riga:
                </p>
                <PLatex>{r`x_i = \frac{b_i}{A_{ii}}`}</PLatex>
            </Panel>
            <Panel title={"Sostituzione"}>
                <p>
                    Se la matrice dei coefficienti del sistema è <b>triangolare</b> inferiore o superiore, allora è
                    possibile trovare la soluzione effettuando una <i>sostituzione</i> all'avanti oppure
                    all'indietro:
                </p>
                <PLatex>{r`x_i = \frac{b_i - \sum_{k = 1}^{i - 1} (x_k \cdot A_{ik})}{A_{ii}}`}</PLatex>
                <PLatex>{r`x_i = \frac{b_i - \sum_{k = i - 1}^{n} (x_k \cdot A_{ik})}{A_{ii}}`}</PLatex>
            </Panel>
        </Section>
        <Section>
            <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex></span>}>
                <p>
                    Se tutti i valori sulla diagonale di <ILatex>{r`A`}</ILatex> sono <b>diversi da 0 <small>(eccetto
                    l'ultimo)</small></b> allora è possibile <i>fattorizzarla</i> in due matrici:
                    una <ILatex>{r`L`}</ILatex> <b>triangolare inferiore</b>, e una <ILatex>{r`U`}</ILatex> <b>triangolare
                    superiore</b>.
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
                    Il sistema può essere poi risolto applicando due volte il metodo di sostituzione (all'avanti e
                    all'indietro):
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
                    È possibile applicare la fattorizzazione <ILatex>{r`LU`}</ILatex> a <b>qualsiasi matrice
                    non-singolare</b> permettendo lo scambio (<i>pivoting</i>) delle righe, potenzialmente <b>aumentando
                    la stabilità</b> dell'algoritmo.
                </p>
                <Example>
                    Abbiamo fatto questo metodo in Algebra Lineare, chiamandolo <b>metodo di Gauss-Jordan</b>!
                </Example>
                <p>
                    Alla formula precedente si aggiunge una <b>matrice di permutazione</b> che indica quali righe
                    sono state scambiate:
                </p>
                <PLatex>{r`P \cdot A = L \cdot U`}</PLatex>
                <p>
                    Per massimizzare la stabilità, si cerca di <b>usare come perno l'elemento più grande</b> della
                    colonna.
                </p>
                <p>
                    Questo metodo ha costo computazionale:
                </p>
                <PLatex>{r`{\color{Yellow} O\left(\frac{n^2}{2}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`}</PLatex>
            </Panel>
            <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> con pivoting totale</span>}>
                <p>
                    È possibile anche permettere il <i>pivoting</i> <b>sulle colonne</b> per <b>aumentare
                    ulteriormente la stabilità</b> dell'algoritmo, a costo di maggiore costo computazionale:
                </p>
                <PLatex>{r`P \cdot A \cdot Q = L \cdot U`}</PLatex>
                <p>
                    Per massimizzare la stabilità, si cerca di <b>ordinare in modo decrescente la diagonale</b>,
                    assicurandoci che il primo perno sia più grande del secondo e così via.
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
                    Se la matrice <ILatex>{r`A`}</ILatex> è <b>a banda</b>, è possibile risparmiare spazio durante
                    la fattorizzazione, in quanto sia <ILatex>{r`L`}</ILatex> sia <ILatex>{r`U`}</ILatex> saranno a
                    banda!
                </p>
            </Panel>
            <Panel title={<span>Fattorizzazione <ILatex>{r`LU`}</ILatex> sparsa</span>}>
                <p>
                    Se la matrice <ILatex>{r`A`}</ILatex> è <b>sparsa</b>, non è detto
                    che <ILatex>{r`L`}</ILatex> e <ILatex>{r`U`}</ILatex> siano sparse a loro volta.
                </p>
                <p>
                    Per evitare il <u>fill-in</u>, è necessario <b>riordinare</b> la
                    matrice <ILatex>{r`A`}</ILatex> in modo che sia il più possibile simile a una matrice a
                    banda.
                </p>
            </Panel>
        </Section>
        <Section>
            <Panel title={<span>Fattorizzazione <ILatex>{r`LDL^{-1}`}</ILatex></span>}>
                <p>
                    È possibile <b>ridurre la complessità computazionale</b> della
                    fattorizzazione <ILatex>{r`LU`}</ILatex> se la matrice dei coefficienti è <b>simmetrica</b>:
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
                    È possibile dare <b>stabilità forte</b> alla fattorizzazione <ILatex>{r`LDL^{-1}`}</ILatex> se
                    la matrice dei coefficienti è <b>simmetrica definita positiva</b>:
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
                    Matrice ricavata dalla seguente formula, dove <ILatex>{r`v`}</ILatex> è la colonna di un'altra
                    matrice:
                </p>
                <PLatex>{r`U(v) = \mathbf{I} - \frac{2 \cdot v \cdot v^T}{\| v \|_{(2)}^2}`}</PLatex>
                <p>
                    Se moltiplicata per per la matrice da cui proviene <ILatex>{r`v`}</ILatex>, sostituirà la
                    colonna <ILatex>{r`v`}</ILatex> con la colonna:
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
                    Metodo che fornisce una <b>maggiore stabilità</b> a costo di una <b>maggiore complessità
                    computazionale</b>.
                </p>
                <p>
                    La matrice <ILatex>{r`A`}</ILatex> viene <i>fattorizzata</i> in due matrici,
                    una <b>ortogonale</b> <ILatex>{r`Q`}</ILatex> e una <b>triangolare superiore</b>
                    <ILatex>{r`R`}</ILatex>:
                </p>
                <PLatex>{r`A = Q \cdot R`}</PLatex>
                <p>
                    Le matrici si ottengono dal <b>prodotto delle trasformazioni di Householder</b> (che concatenate
                    formano <ILatex>{r`Q`}</ILatex>) sulla matrice <ILatex>{r`A`}</ILatex> necessarie a trasformarla
                    in una matrice triangolare superiore (<ILatex>{r`R`}</ILatex>).
                </p>
                <Example>
                    C'è un bell'esempietto <Link
                    href={"https://web.archive.org/web/20200828003151/https://rpubs.com/aaronsc32/qr-decomposition-householder"}>qui</Link>.
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
                    È particolarmente utile perchè ci permette di definire un <b>algoritmo ricorsivo</b> che
                    trovi <ILatex>{r`x`}</ILatex>:
                </p>
                <PLatex>{r`x_{(i+1)} = G \cdot x_{(i)} + c`}</PLatex>
                <p>
                    <ILatex>{r`G`}</ILatex> è il <b>metodo</b>, e in base ad esso cambiano stabilità e velocità di
                    convergenza.
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
                    (dove <ILatex>{r`\rho`}</ILatex> è il <b>raggio spettrale</b>, il massimo autovalore della
                    matrice)
                </p>
                <p>
                    Perchè un metodo sia convergente, è sufficiente che:
                </p>
                <PLatex>{r`\| M \| < 1`}</PLatex>
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
                    <u>Spostamenti simultanei</u>: Permette di ottenere ogni componente
                    di <ILatex>{r`x`}</ILatex> indipendentemente dagli altri: è <b>parallelizzabile</b>.
                </p>
                <p>
                    Se la matrice è <b>diagonale dominante</b>, allora il metodo di
                    Jacobi <b>converge</b> sicuramente.
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
                    <u>Spostamenti successivi</u>: Non è parallelizzabile, perchè ogni componente <b>dipende da
                    quelle calcolate in precedenza</b>.
                </p>
                <p>
                    Se la matrice è <b>diagonale dominante</b>, allora il metodo di
                    Gauss-Seidel <b>converge</b> sicuramente.
                </p>
            </Panel>
        </Section>
        <Section title={"Problema: Ricerca degli zeri di funzione"}>
            <Panel title={"Descrizione"}>
                <p>
                    Si vogliono trovare i punti (<i>zeri</i>) in cui una funzione <b>continua</b> <ILatex>f : [a, b]
                    \to R</ILatex> vale <ILatex>0</ILatex>.
                </p>
                <p>
                    Per il <b>teorema del valore medio</b>, se <ILatex>{r`f(a) \cdot f(b) \leq 0`}</ILatex>, allora
                    esiste sicuramente un punto in cui la funzione vale 0.
                </p>
                <p>
                    Denominiamo il punto in cui la funzione
                    vale <ILatex>0</ILatex> come <ILatex>{r`x_{(\star)}`}</ILatex>.
                </p>
            </Panel>
            <Panel title={"Condizionamento"}>
                <p>
                    Più la <b>derivata prima</b> della funzione <b>si avvicina allo 0</b>, <b>peggio</b> il problema
                    sarà condizionato.
                </p>
                <PLatex>{r`f'(x_{(\star)}) \simeq 0 \implies mal\ condizionato`}</PLatex>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Ordine di convergenza"}>
                <p>
                    Indice <ILatex>{r`{\color{Orange} p}`}</ILatex> di quanto in fretta una successione converge
                    alla soluzione.
                </p>
                <PLatex>{r`\lim_{i \to +\infty} \frac{ \left| x_{(i+1)} - x_{(\star)} \right| }{ \left| x_{(k)} - x_{(\star)} \right|^{\color{Orange} p}}`}</PLatex>
                <ul>
                    <li><u>Convergenza lineare</u>: <ILatex>{r`p = 1`}</ILatex> e <ILatex>{r`0 < C < 1`}</ILatex>
                    </li>
                    <li><u>Convergenza superlineare</u>: <ILatex>{r`p = 1`}</ILatex> e <ILatex>{r`C = 0`}</ILatex>
                    </li>
                    <li><u>Convergenza quadratica</u>: <ILatex>{r`p = 2`}</ILatex> e <ILatex>{r`0 < C < 1`}</ILatex>
                    </li>
                    <li><u>Convergenza
                        superquadratica</u>: <ILatex>{r`p = 2`}</ILatex> e <ILatex>{r`C = 0`}</ILatex></li>
                    <li>...</li>
                </ul>
            </Panel>
        </Section>
        <Section title={"Metodi dicotomici"}>
            <Panel title={"Cosa sono?"}>
                <p>
                    Sono <b>metodi iterativi</b> in grado di ridurre sempre di più l'intervallo in cui è definita la
                    funzione, facendolo convergere allo zero desiderato.
                </p>
                <p>
                    Alcuni di essi sono il <i>metodo dicotomico</i> e il <i>metodo regula falsi</i>.
                </p>
                <p>
                    Richiedono <b>una valutazione di funzione non-lineare</b> ad ogni iterazione.
                </p>
                <p>
                    Ad ogni iterazione, l'intervallo viene sempre <i>almeno</i> <b>dimezzato</b>; si ha, pertanto,
                    che:
                </p>
                <PLatex>{r`b_{(i)} - a_{(i)} = \frac{b - a}{2^{i - 1}}`}</PLatex>
                <p>
                    Hanno quindi <b>convergenza lineare</b> (<ILatex>{r`C = \frac{1}{2}, p = 1`}</ILatex>).
                </p>
                <p>
                    Il loro <i>criterio di arresto</i> è un <b>numero di iterazioni prefissato</b> che dipende
                    dalla <b>tolleranza</b> sull'errore:
                </p>
                <PLatex>{r`i \geq \log_2 \left( \frac{b - a}{\tau} \right)`}</PLatex>
                <Example>
                    Dividi l'intervallo <ILatex>{r`[a, b]`}</ILatex> in tante parti grandi quanto la tolleranza.
                    L'algoritmo di bisezione ne escluderà metà ad ogni iterazione; la tolleranza sarà raggiunta
                    quando rimarrà una parte sola!
                </Example>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Metodo di bisezione"}>
                <ol>
                    <li>Finchè non sono state compiute il numero di iterazioni prefissate:
                        <ol>
                            <li>
                                Calcoliamo il <b>punto
                                medio</b> dell'intervallo <ILatex>{r`[a_{(n)}, b_{(n)}]`}</ILatex>:
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
                                Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e
                                rinominiamolo in <ILatex>{r`[a_{(n+1)}, b_{(n+1)}]`}</ILatex>.
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
                                Calcoliamo l'<b>intersezione</b> tra la <b>retta che congiunge i due estremi</b>
                                <ILatex>{r`a_{(n)}, b_{(n)}`}</ILatex> e l'<b>asse X</b>:
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
                                Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e
                                rinominiamolo in <ILatex>{r`[a_{(n+1)}, b_{(n+1)}]`}</ILatex>.
                            </li>
                        </ol>
                    </li>
                </ol>
            </Panel>
        </Section>
        <Section title={"Metodo delle approssimazioni successive"}>
            <Panel title={"Metodi delle approssimazioni successive"}>
                <p>
                    Sono <b>metodi iterativi</b> che funzionano in modo molto simile ai metodi iterativi per i
                    sistemi lineari, utilizzando una funzione <ILatex>{r`\phi`}</ILatex> come "metodo".
                </p>
                <PLatex>{r`x = x - \phi(x) \cdot f(x)`}</PLatex>
                <p>
                    Che diventa:
                </p>
                <PLatex>{r`x_{(k+1)} = g( x_{(k)} )`}</PLatex>
                <p>
                    Sfruttano i <b>punti fissi</b> <ILatex>{r`g(x_{(\star)}) = x_{(\star)}`}</ILatex> della
                    funzione <ILatex>{r`f`}</ILatex> per convergere:<br/>
                    se <ILatex>{r`\phi(x)`}</ILatex> non ha zeri, allora i punti fissi <b>coincideranno</b> con
                    gli <b>zeri</b> della funzione <ILatex>{r`f`}</ILatex>.
                </p>
                <PLatex>{r`g(x) = x - \phi(x) \cdot f(x)`}</PLatex>
                <p>
                    Si può raggiungere iterativamente ad un punto fisso attraverso la formula:
                </p>
                <PLatex>{r`x_{(k+1)} = g( x_{(k)} )`}</PLatex>
                <p>
                    Non si conosce in anticipo il numero di iterazioni necessarie per soddisfare la
                    tolleranza <ILatex>{r`\tau`}</ILatex>; ad ogni iterazione, si controlla se la tolleranza è
                    soddisfatta:
                </p>
                <ul>
                    <li>Nella differenza tra due
                        iterate: <ILatex>{r`\frac{\left| x_{(k+1)} - x_{(k)} \right|}{\left| x_{(k+1)} \right|} \leq \tau`}</ILatex>
                    </li>
                    <li>Nel <i>residuo</i> del problema: <ILatex>{r`\left| f(x_{(k)}) \right| \leq \tau`}</ILatex>
                    </li>
                </ul>
            </Panel>
            <Panel title={"Teorema della mappa contrattiva"}>
                <p>
                    Se:
                </p>
                <ul>
                    <li>
                        Tutti i valori restituiti dalla funzione <ILatex>{r`g`}</ILatex> rientrano nel suo stesso
                        dominio:
                        <PLatex>{r`g : [a, b] \to [a, b]`}</PLatex>
                    </li>
                    <li>
                        <p>
                            La funzione <ILatex>{r`g`}</ILatex> è una contrazione, ovvero restringe
                            l'intervallo <ILatex>{r`[a, b]`}</ILatex>:
                        </p>
                        <PLatex>{r`\forall (x, y) \in [a, b], | g(x) - g(y) | \leq L \cdot | x - y |`}</PLatex>
                        <p>
                            (dove <ILatex>{r`0 < L < 1`}</ILatex>)
                        </p>
                    </li>
                </ul>
                <p>
                    Allora:
                </p>
                <ul>
                    <li>
                        <p>
                            Il punto fisso esiste ed è unico:
                        </p>
                        <PLatex>{r`\exists! x_{(\star)}`}</PLatex>
                    </li>
                    <li>
                        Il metodo delle approssimazioni successive converge per qualsiasi punto di partenza.
                    </li>
                    <li>
                        <p>
                            Vale la seguente disequazione di <i>maggiorazione dell'errore</i>:
                        </p>
                        <PLatex>{r`\left| x_{(k)} - x_{(\star)} \right| \leq \frac{ L^k }{ 1 - L } \cdot \left| x_{(1)} - x_{(0)} \right|`}</PLatex>
                    </li>
                </ul>
                <p>
                    Più è piccolo <ILatex>L</ILatex>, più il metodo convergerà in fretta.
                </p>
                <Example>
                    <ILatex>L</ILatex> è molto simile al raggio spettrale <ILatex>{r`\rho(M)`}</ILatex> dei metodi
                    iterativi per i sistemi lineari!
                </Example>
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
                    Geometricamente, corrisponde a prolungare una retta nel
                    punto <ILatex>{r`(x_{(k)}, f(x_{(k)}))`}</ILatex> con pendenza <ILatex>{r`f'(x_{(k)})`}</ILatex>,
                    e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine
                    nella funzione.
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
                    È come il metodo di Newton, ma usa il <b>rapporto incrementale</b>, in modo da poter essere
                    applicato a funzioni non continue.
                </p>
                <PLatex>{r`\phi (x) = \frac{ 1 }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`}</PLatex>
                <PLatex>{r`x_{(k+1)} = x_{(k)} - \frac{ f(x_{(k)}) }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`}</PLatex>
                <Example>
                    Geometricamente, corrisponde a costruire una retta che attraversa i
                    punti <ILatex>{r`(x_{(k)}, f(x_{(k)}))`}</ILatex> e <ILatex>{r`(x_{(k-1)}, f(x_{(k-1)}))`}</ILatex>,
                    e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine
                    nella funzione.
                </Example>
                <p>
                    Ha costo computazionale di <b>3 valutazioni di funzione</b>.
                </p>
                <p>
                    Ha <b>convergenza superlineare</b>.
                </p>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Approssimare sistemi non-lineari"}>
                <p>
                    È possibile usare questi metodi per <b>approssimare le soluzioni di sistemi non-lineari</b>.
                </p>
            </Panel>
        </Section>
        <Section title={"Problema: Interpolazione"}>
            <Panel title={"Descrizione"}>
                <p>
                    Si vuole trovare una funzione in grado di <b>approssimarne</b> un'altra, di cui si conoscono
                    però solo alcuni punti.
                </p>
                <Example>
                    È utile in un sacco di casi! Ad esempio, quando si vuole scalare un'immagine.
                </Example>
                <p>
                    I punti sono detti <b>nodi</b> <ILatex>{r`(x_i, y_i)`}</ILatex>, mentre la funzione costruita su
                    di essi è detta <b>interpolante</b> <ILatex>{r`g`}</ILatex>:
                </p>
                <PLatex>{r`g(x_i) = y_i`}</PLatex>
                <p>
                    Dato un insieme di punti, esistono <b>infinite</b> funzioni interpolanti.
                </p>
            </Panel>
            <Panel title={"Interpolazione polinomiale"}>
                <p>
                    Il <u>teorema fondamentale dell'algebra</u> dice che <b>esiste una sola
                    interpolante <i>polinomiale</i></b> che interpola un dato insieme di punti.
                </p>
                <p>
                    Con <ILatex>n+1</ILatex> punti, l'interpolante sarà al massimo di grado <ILatex>n</ILatex>, e
                    viene detta <ILatex>{r`p_n`}</ILatex>.
                </p>
                <p>
                    La sua <b>forma canonica</b> sarà:
                </p>
                <PLatex>{r`p_n(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots + a_n x^n`}</PLatex>
            </Panel>
        </Section>
        <Section title={"Metodi di interpolazione"}>
            <Panel title={"Metodo dei coefficienti indeterminati"}>
                <p>
                    È possibile scrivere la forma canonica come <b>matrice</b>:
                </p>
                <PLatex>{r`A \cdot x = b`}</PLatex>
                <p>
                    Costruiamo la <b>matrice di Vandermonde</b>:
                </p>
                <PLatex>{r`
                A =
                \begin{pmatrix}
                    1 & x_0 & x_0^2 & \dots & x_0^n\\\\
                    1 & x_1 & x_1^2 & \dots & x_1^n\\\\
                    1 & x_2 & x_2^2 & \dots & x_2^n\\\\
                    \vdots & \vdots & \vdots & \ddots & \vdots\\\\
                    1 & x_n & x_n^2 & \dots & x_n^n
                \end{pmatrix}
                `}</PLatex>
                <p>
                    Costruiamo il <b>vettore delle incognite</b>:
                </p>
                <PLatex>{r`
                x = 
                \begin{pmatrix}
                    a_0\\\\
                    a_1\\\\
                    a_2\\\\
                    \vdots\\\\
                    a_n
                \end{pmatrix}
                `}</PLatex>
                <p>
                    Costruiamo il <b>vettore dei termini noti</b>:
                </p>
                <PLatex>{r`
                b =
                \begin{pmatrix}
                    y_0\\\\
                    y_1\\\\
                    y_2\\\\
                    \vdots\\\\
                    y_n
                \end{pmatrix}
                `}</PLatex>
                <Example>
                    Per trovare il polinomio di interpolazione è sufficiente risolvere il problema!
                </Example>
                <p>
                    È efficace perchè una volta calcolati i coefficienti essi <b>valgono per tutti i punti</b>, ma
                    ha come svantaggio che la matrice di Vandermonde è <b>spesso malcondizionata.</b>
                </p>
            </Panel>
            <Panel title={"Metodo di Lagrange"}>
                <p>
                    È possibile scrivere il polinomio di interpolazione <b>raccogliendo
                    le <ILatex>{r`y`}</ILatex></b>:
                </p>
                <PLatex>{r`p_n (x) = y_0 L_0 + y_1 L_1 + y_2 L_2 + \dots + y_n L_n`}</PLatex>
                <p>
                    I polinomi <ILatex>{r`L_k`}</ILatex> sono detti <b>polinomi di Lagrange</b>, e hanno le seguenti
                    proprietà:
                </p>
                <ul>
                    <li>
                        Valgono <ILatex>1</ILatex> in corrispondenza del nodo con lo stesso
                        indice, <ILatex>0</ILatex> in corrispondenza dei nodi con indice diverso
                        e <ILatex>{r`0 < n < 1`}</ILatex> in tutti gli altri casi.

                        <PLatex>{r`
                        \begin{cases}
                            L_k(x_k) = 1 \qquad (nel\ nodo)\\
                            L_k(x_j) = 0 \qquad (altri\ nodi)
                        \end{cases}
                    `}</PLatex></li>
                    <li>
                        Si compongono con questo prodotto:

                        <PLatex>{r`L_k = \frac{(x - x_0) \cdot \dots \cdot (x - x_{k-1}) \cdot (x - x_{k+1}) \cdot \dots \cdot (x_k - x_n)}{(x_k - x_0) \cdot \dots \cdot (x_k - x_{k-1}) \cdot (x_k - x_{k+1}) \cdot \dots \cdot (x_k - x_n)}`}</PLatex>
                    </li>
                </ul>
                <Example>Non c'è il termine con <ILatex>{r`x_k`}</ILatex>!</Example>
                <p>
                    Tutti insieme formano la <b>base di Lagrange</b>.
                </p>
                <Example>Si chiama base perchè sono <b>linearmente indipendenti</b>!</Example>
                <p>
                    Questo metodo permette di calcolare il valore del polinomio di interpolazione <b>in un singolo
                    punto</b>:
                </p>
                <Example>
                    <p>
                        Si può risparmiare tempo di calcolo calcolando una singola volta il numeratore
                        con <i>tutti</i> i termini:
                    </p>
                    <PLatex>{r`\omega_n = (x - x_0) \cdot (x - x_1) \cdot \dots \cdot (x - x_n)`}</PLatex>
                    <p>
                        E poi dividendo per il termine che andrebbe escluso:
                    </p>
                    <PLatex>{r`L_k(x) = \frac{ \omega_n }{ (x - x_k) \cdot \prod_{i=0, i \neq k} (x_k - x_i) }`}</PLatex>
                </Example>
                <p>
                    Ha costo computazionale <ILatex>{r`O(n^2)`}</ILatex>.
                </p>
            </Panel>
        </Section>
        <Section title={"Resto di interpolazione"}>
            <Panel title={"Definizione"}>
                <p>
                    È l'<b>errore compiuto durante l'interpolazione</b>.
                </p>
                <p>
                    Se la funzione <ILatex>f</ILatex> è interpolata da <ILatex>p_n</ILatex>, allora esso varrà:
                </p>
                <PLatex>{r`R_n(x) = f(x) - p_n(x)`}</PLatex>
                <p>
                    In particolare, è interessante la sua norma a
                    infinito, <ILatex>{r`\| f - p_n \|_\infty`}</ILatex>, che corrisponde alla distanza massima tra
                    le due funzioni.
                </p>
                <p>
                    Un teorema dice che esso è uguale a:
                </p>
                <PLatex>{r`R_n(x) = \frac{ \omega_n(x) }{ (n + 1)! } \cdot f^{(n+1)}(\xi)`}</PLatex>
            </Panel>
            <Panel title={"Stima"}>
                <p>
                    L'errore nell'interpolazione dipende principalmente da due fattori:
                </p>
                <ul>
                    <li>Come sono <b>distribuiti sull'asse X</b> i punti da interpolare</li>
                    <li>Il grado del polinomio di interpolazione</li>
                </ul>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Fenomeno di Runge"}>
                <p>
                    Fenomeno che si verifica cercando di interpolare la <i>funzione di
                    Runge</i> (<ILatex>{r`\frac{1}{1 + 25x^2}`}</ILatex>).
                </p>
                <p>
                    Scegliendo <b>nodi equispaziati</b>, l'errore di interpolazione sarà <b>enorme</b> vicino ai due
                    estremi dell'intervallo.
                </p>
                <Example>
                    Addirittura, più nodi verranno scelti, più esso sarà alto!
                </Example>
                <p>
                    Si evita scegliendo i nodi in una maniera diversa.
                </p>
            </Panel>
            <Panel title={"Nodi di Chebychev"}>
                <p>
                    Nodi ottenuti partizionando una <b>semicirconferenza</b>, e proiettando le partizioni sul
                    diametro.
                </p>
                <p>
                    La formula usata per ottenere <ILatex>{r`n`}</ILatex> punti è:
                </p>
                <PLatex>{r`x_i = \cos \left( \frac{ (2 \cdot i + 1) \cdot \pi }{ 2 \cdot (n+1) } \right)`}</PLatex>
                <p>
                    <u>Proprietà di min-max</u>: sono la <b>scelta ottimale</b> dei punti di interpolazione.
                </p>
                <PLatex>{r`\omega_n(\star) = \max_{x \in [a, b]} \left| \omega_n(x) \right|`}</PLatex>
                <p>
                    In particolare, si ha che:
                </p>
                <PLatex>{r`\omega_n(\star) = 2 \left( \frac{b-a}{4} \right)^{n+1}`}</PLatex>
            </Panel>
        </Section>
        <Section title={"Problema: Interpolazione a tratti"}>
            <Panel title={"Come funziona?"}>
                <p>
                    Invece che costruire una singola funzione che interpola tutti i punti, per <b>ogni intervallo
                    tra due punti</b> (<i>sottointervallo</i>) si costruisce <b>una funzione apposta</b>.
                </p>
            </Panel>
        </Section>
        <Section title={"Splines"}>
            <Panel title={"Cosa sono?"}>
                <p>
                    Interpolanti che:
                </p>
                <ul>
                    <li>sono <b>polinomiali</b> di grado massimo <ILatex>{r`n`}</ILatex></li>
                    <li>sono <b>continue</b> fino al grado <ILatex>{r`n - 1`}</ILatex></li>
                    <li>connettono <ILatex>{r`m + 2`}</ILatex> punti, e
                        hanno <ILatex>{r`m`}</ILatex> sottointervalli
                    </li>
                    <li>hanno funzioni <b>definite appositamente</b> per ogni sottointervallo</li>
                </ul>
                <Example>
                    <p>
                        Significa che agli estremi dell'intervallo, i valori di tutte le derivate fino al
                        grado <ILatex>{r`n - 1`}</ILatex> devono essere uguali:
                    </p>
                    <PLatex>{r`\forall \ k \leq n-1, \forall \ i \in \{intervalli\}, \quad s_i^{(k)} (x_{i+1}) = s_i^{(k)} (x_{i+1})`}</PLatex>
                </Example>
                <p>
                    Hanno <ILatex>{r`n + m + 1`}</ILatex> gradi di libertà.
                </p>
                <Example>
                    Esistono infinite spline di grado <ILatex>{r`n \geq 2`}</ILatex>!
                </Example>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Spline lineari"}>
                <Example>
                    Sono anche dette <b>interpolanti lineari a tratti</b>.
                </Example>
                <p>
                    Per ogni sottointervallo, costruiamo una <b>funzione lineare</b> passante per i due estremi:
                </p>
                <PLatex>{r`s_i(x) = y_i + \frac{ y_{i + 1} - y_i }{ x_{i + 1} - x_i } \cdot (x - x_i)`}</PLatex>
                <Example>
                    È una linea spezzata!
                </Example>
                <p>
                    Il loro errore è:
                </p>
                <PLatex>{r`\| R \|_\infty = \| f - s \|_\infty \leq \frac{1}{8} \cdot \max_{y \in [a, b]} \left| f''(y) \right| \cdot \left( \max_{i \in \{intervalli\}} (x_{i+1} - x_{i}) \right)^2`}</PLatex>
                <p>
                    Ha come vantaggi complessità computazionale <b>molto più bassa</b> e l'<b>assenza</b> del
                    fenomeno di Runge, ma allo stesso tempo si <b>perde la derivabilità della funzione.</b>
                </p>
                <p>
                    <b>Non</b> hanno gradi di libertà.
                </p>
            </Panel>
            <Panel title={"Spline cubiche"}>
                <p>
                    Spline con <ILatex>{r`n = 3`}</ILatex>, che soddisfano le seguenti uguaglianze:
                </p>
                <PLatex>{r`
                \forall \ i \in \{0,\ \dots\ ,\ m - 1\},\ 
                \begin{cases}
                    s_i (x_{i+1}) = s_{i+1} (x_{i+1})\\\\
                    s'_i (x_{i+1}) = s'_{i+1} (x_{i+1})\\\\
                    s''_i (x_{i+1}) = s''_{i+1} (x_{i+1})
                \end{cases}                    
                `}</PLatex>
                <PLatex>{r`
                \forall \ i \in \{0,\ \dots\ ,\ m + 1\},\ 
                \begin{cases}
                    s_i(x_i) = y_i
                \end{cases}
                `}</PLatex>
                <p>
                    Esse hanno la seguente equazione:
                </p>
                <PLatex>{r`s_i(x) = \alpha_i + \beta_i \ ( x - x_i ) + \gamma_i \ ( x - x_i )^2 + \delta_i \ ( x - x_i )^3`}</PLatex>
                <Example>
                    Spesso si indica con <ILatex>{r`h`}</ILatex> la distanza orizzontale tra due punti di un
                    sottointervallo.
                </Example>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Spline cubica vincolata"}>
                <p>
                    Classe di spline cubiche in cui:
                </p>
                <ul>
                    <li><ILatex>{r`\beta_0`}</ILatex> e <ILatex>{r`\beta_{m+1}`}</ILatex> sono prefissati</li>
                </ul>
                <p>
                    È <b>unica</b>.
                </p>
                <p>
                    Forma il seguente sistema di equazioni:
                </p>
                <PLatex>{r`T z = c`}</PLatex>
                <PLatex>{r`
                    b_i = h_{i+1} \beta_i + 2 ( h_i + h_{i+1} ) + h_{i} \beta_i+2
                `}</PLatex>
                <PLatex>{r`
                    T = 
                    \begin{pmatrix}
                        2 (h_0 + 2 h_1) & h_0 & {\color{Gray} 0} & {\color{Gray} 0} & {\color{Gray} 0} \\\\
                        h_2 & 2 (h_1 + h_2) & h_1 & {\color{Gray} 0} & {\color{Gray} 0} \\\\
                        {\color{Gray} 0} & \ddots & \ddots & \ddots & {\color{Gray} 0} \\\\
                        {\color{Gray} 0} & {\color{Gray} 0} & h_{m-1} & 2 (h_{m-2} + h_{m-1}) & h_{m-2} \\\\
                        {\color{Gray} 0} & {\color{Gray} 0} & {\color{Gray} 0} & h_m & 2 (h_{m-1} + h_m)
                    \end{pmatrix}
                `}</PLatex>
                <PLatex>{r`
                    z =
                    \begin{pmatrix}
                        \beta_1\\\\
                        \beta_2\\\\
                        \vdots\\\\
                        \beta_{m-1}\\\\
                        \beta_{m}
                    \end{pmatrix}
                `}</PLatex>
                <PLatex>{r`
                    c =
                    \begin{pmatrix}
                        b_0 - h_1 \beta_0\\\\
                        b_1\\\\
                        \vdots\\\\
                        b_{m-2}\\\\
                        b_{m-1} - h_{m-1} \beta_{m+1}
                    \end{pmatrix}
                `}</PLatex>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Spline cubica naturale"}>
                <p>
                    Classe di spline cubiche in cui:
                </p>
                <ul>
                    <li><ILatex>{r`s''(x_0) = s''(x_{m+1}) = 0`}</ILatex></li>
                </ul>
                <p>
                    È <b>unica</b>.
                </p>
            </Panel>
            <Panel title={"Spline cubica periodica"}>
                <p>
                    Classe di spline cubiche in cui:
                </p>
                <ul>
                    <li><ILatex>{r`s(x) = s(m+1)`}</ILatex></li>
                    <li><ILatex>{r`s'(x) = s'(m+1)`}</ILatex></li>
                    <li><ILatex>{r`s''(x) = s''(m+1)`}</ILatex></li>
                </ul>
                <p>
                    È <b>unica</b>.
                </p>
            </Panel>
            <Panel title={"Spline cubica not-a-knot"}>
                <p>
                    Classe di spline cubiche in cui:
                </p>
                <ul>
                    <li>Negli
                        intervalli <ILatex>{r`[x_0, x_2]`}</ILatex> e <ILatex>{r`[x_{m-1}, x_{m+1}]`}</ILatex> si
                        presenta <b>obbligatoriamente</b> un polinomio di <b>grado 3</b>.
                    </li>
                </ul>
                <p>
                    È <b>unica</b>.
                </p>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Proprietà di minima curvatura"}>
                <p>
                    Tra tutte le funzioni che interpolano dei punti, le tre classi di funzioni sopraelencate sono
                    quelle che interpolano la funzione più "dolcemente".
                </p>
                <p>
                    Per loro è valida la seguente proprietà:
                </p>
                <PLatex>{r`\int_a^b ( s''(x) )^2 dx \leq \int_a^b ( f''(x) )^2 dx`}</PLatex>
            </Panel>
            <Panel title={"Errore di interpolazione"}>
                <p>
                    Più diminuisce la lunghezza <ILatex>{r`h`}</ILatex> degli intervalli, più aumenta l'accuratezza.
                </p>
                <p>
                    <b>Non</b> si verifica il fenomeno di Runge.
                </p>
                <p>
                    Si ha un'interpolazione anche della <b>derivata prima</b>.
                </p>
            </Panel>
        </Section>
        <Section title={"Problema: Approssimazione di dati sperimentali"}>
            <Panel title={"Perchè?"}>
                <p>
                    Interpolare dati sperimentali non fornisce quasi mai un modello del fenomeno.
                </p>
                <p>
                    Vogliamo costruire una <b>funzione di regressione</b> che, dati molti più dati del grado della
                    funzione, minimizzi il quadrato della distanza tra i punti sperimentali e i punti della funzione
                    di regressione.
                </p>
                <p>
                    Denominiamo:
                </p>
                <ul>
                    <li><ILatex>{r`{\color{Orange} f}`}</ILatex>: la <b>funzione "effettiva"</b> del fenomeno</li>
                    <li><ILatex>{r`{\color{Yellow} q}`}</ILatex>: la <b>funzione di regressione</b> che costruiamo
                        per approssimarlo
                    </li>
                    <li><ILatex>{r`{\color{Red} Q }`}</ILatex>: la <b>funzione "errore di regressione"</b> da
                        minimizzare
                    </li>
                    <li><ILatex>{r`(\ x_i, f(x_i)\ )`}</ILatex>: i <b>punti sperimentali</b></li>
                </ul>
                <p>
                    L'obiettivo è minimizzare l'<b>errore di approssimazione</b> <ILatex>{r`Q`}</ILatex>, ovvero:
                </p>
                <PLatex>{r`\min {\color{Red} Q } = \sum_{i = 1}^m (\ {\color{Yellow} q(x_i)} - {\color{Orange} f(x_i)}\ )^2 `}</PLatex>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Regressione lineare"}>
                <p>
                    Trova la <b>retta</b> <ILatex>{r`{\color{Yellow} q}`}</ILatex> che meglio approssima tutti
                    gli <ILatex>{r`m`}</ILatex> dati sperimentali.
                </p>
                <p>
                    Essendo una retta, avrà <b>due parametri</b>: il termine noto <ILatex>{r`a_0`}</ILatex>, e la
                    pendenza <ILatex>{`a_1`}</ILatex>.
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = a_0 + a_1 \cdot {\color{Green} x}`}</PLatex>
                <p>
                    L'errore da minimizzare per ricavare i parametri sarà:
                </p>
                <PLatex>{r`
                    \min {\color{Red} Q } = \sum_{i = 1}^m ( {\color{Yellow} a_0 + a_1 \cdot x_i} - {\color{Orange} f(x_i)} )^2
                `}</PLatex>
            </Panel>
            <Panel title={"Regressione lineare matriciale"}>
                <p>
                    Possiamo costruire una <b>matrice di regressione</b> <ILatex>{r`A`}</ILatex> contenente tutti
                    i <b>punti sperimentali</b>:
                </p>
                <PLatex>{r`
                    A =
                    \begin{pmatrix}
                        1 & x_1\\\\
                        1 & x_2\\\\
                        \vdots & \vdots\\\\
                        1 & x_m
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Inoltre, se costruiamo il <b>vettore dei parametri</b> <ILatex>{r`\alpha`}</ILatex>:
                </p>
                <PLatex>{r`
                    \alpha =
                    \begin{pmatrix}
                        a_0\\\\
                        a_1
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Avremo che:
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = A \cdot \alpha`}</PLatex>
                <p>
                    Inoltre, potremo calcolare l'errore attraverso la norma:
                </p>
                <PLatex>{r`{\color{Red} Q } = \| A \cdot \alpha - y \|^2`}</PLatex>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Regressione polinomiale"}>
                <p>
                    Trova il <b>polinomio</b> <ILatex>{r`{\color{Yellow} q}`}</ILatex> di
                    grado <ILatex>{r`n-1`}</ILatex> che meglio approssima tutti gli <ILatex>{r`m`}</ILatex> dati
                    sperimentali.
                </p>
                <p>
                    Essendo un polinomio di grado <ILatex>{r`n-1`}</ILatex>, avrà <ILatex>{r`n`}</ILatex> parametri.
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = a_0 + a_1 \cdot {\color{Green} x} + a_2 \cdot {\color{Green} x^2} +\ \dots \ + a_{n-1} \cdot {\color{Green} x^{n-1}`}</PLatex>
                <Example>
                    <p>
                        La regressione lineare è un caso particolare di regressione generale in cui i parametri sono
                        2!
                    </p>
                </Example>
                <p>
                    L'errore da minimizzare per ricavare i parametri sarà:
                </p>
                <PLatex>{r`
                    \min {\color{Red} Q} = \sum_{i = 1}^m ( {\color{Yellow} a_0 + a_1 \cdot x_i + a_2 \cdot x_i^2 +\ \dots \ + a_{n-1} \cdot x_i^{n-1}} - {\color{Orange} y_i} )^2
                `}</PLatex>
            </Panel>
            <Panel title={"Regressione polinomiale matriciale"}>
                <p>
                    Possiamo costruire una <b>matrice di regressione</b> <ILatex>{r`A`}</ILatex> contenente tutti
                    i <b>punti sperimentali</b> a tutti i gradi del polinomio:
                </p>
                <PLatex>{r`
                    A =
                    \begin{pmatrix}
                        1 & x_1 & x_1^2 & \dots & x_1^{n-1} \\\\
                        1 & x_2 & x_2^2 & \dots & x_2^{n-1} \\\\
                        \vdots & \vdots & \vdots & \ddots & \vdots \\\\
                        1 & x_m & x_m^2 & \dots & x_m^{n-1}
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Inoltre, se costruiamo il <b>vettore dei parametri</b> <ILatex>{r`\alpha`}</ILatex>:
                </p>
                <PLatex>{r`
                    \alpha =
                    \begin{pmatrix}
                        a_0\\\\
                        a_1\\\\
                        \vdots\\\\
                        a_{n-1}
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Avremo che:
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = A \cdot \alpha`}</PLatex>
                <p>
                    Inoltre, potremo calcolare l'errore attraverso la norma:
                </p>
                <PLatex>{r`{\color{Red} Q } = \| A \cdot \alpha - y \|^2`}</PLatex>
                <Example>
                    Normalmente, i dati sono molti di più, ma se il numero di
                    parametri <ILatex>{r`n`}</ILatex> fosse uguale al numero di dati <ILatex>{r`m`}</ILatex>, allora
                    si otterrebbe il <b>polinomio di interpolazione</b>!
                </Example>
            </Panel>
        </Section>
        <Section>
            <Panel title={"Regressione generale"}>
                <p>
                    Trova i <b>coefficienti della combinazione lineare</b>
                    <ILatex>{r`{\color{Yellow} q}`}</ILatex> che meglio approssima tutti
                    gli <ILatex>{r`m`}</ILatex> dati sperimentali.
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = a_0 \cdot {\color{Green} \phi_0 (x)} + a_1 \cdot {\color{Green} \phi_1 (x)} + \dots + a_2 \cdot {\color{Green} \phi_2 (x)} +\ \dots\ + a_{n-1} \cdot {\color{Green} \phi_{n-1} (x)}`}</PLatex>
                <Example>
                    <p>
                        La regressione polinomiale è un caso particolare di regressione generale in cui:
                    </p>
                    <PLatex>{r`{\color{Green} \phi_{n} (x)} = x^n`}</PLatex>
                </Example>
                <p>
                    L'errore da minimizzare per ricavare i parametri sarà:
                </p>
                <PLatex>{r`
                    \min {\color{Red} Q } = \sum_{i = 1}^m ( {\color{Yellow} a_0 \cdot \phi_0 (x) + a_1 \cdot \phi_1 (x) + \dots + a_2 \cdot \phi_2 (x) +\ \dots\ + a_{n-1} \cdot \phi_{n-1} (x)} - {\color{Orange} f(x_i)} )^2
                `}</PLatex>
            </Panel>
            <Panel title={"Regressione polinomiale generale"}>
                <p>
                    Possiamo costruire una <b>matrice di regressione</b> <ILatex>{r`A`}</ILatex> contenente tutti
                    i <b>punti sperimentali</b> a tutti i gradi del polinomio:
                </p>
                <PLatex>{r`
                    A =
                    \begin{pmatrix}
                        \phi_0(x_1) & \phi_1(x_1) & \phi_2(x_1) & \dots & \phi_{n_1}(x_1) \\\\
                        \phi_0(x_2) & \phi_1(x_2) & \phi_2(x_2) & \dots & \phi_{n-1}(x_2) \\\\
                        \vdots & \vdots & \vdots & \ddots & \vdots \\\\
                        \phi_0(x_m) & \phi_1(x_m) & \phi_2(x_m) & \dots & \phi_{n-1}(x_m)
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Inoltre, se costruiamo il <b>vettore dei parametri</b> <ILatex>{r`\alpha`}</ILatex>:
                </p>
                <PLatex>{r`
                    \alpha =
                    \begin{pmatrix}
                        a_0\\\\
                        a_1\\\\
                        \vdots\\\\
                        a_{n-1}
                    \end{pmatrix}
                `}</PLatex>
                <p>
                    Avremo che:
                </p>
                <PLatex>{r`{\color{Yellow} q(x) } = A \cdot \alpha`}</PLatex>
                <p>
                    Inoltre, potremo calcolare l'errore attraverso la norma:
                </p>
                <PLatex>{r`{\color{Red} Q } = \| A \cdot \alpha - y \|^2`}</PLatex>
            </Panel>
        </Section>
        <Section title={"Trovare i parametri"}>
            <Panel title={"Caso non degenere"}>
                <p>
                    Caso che prevede che le colonne di <ILatex>{r`A`}</ILatex> siano <b>linearmente indipendenti</b>.
                </p>
                <p>
                    La soluzione <b>esiste</b> sempre, ed è <b>unica</b>.
                </p>
                <p>
                    Per trovarla:
                </p>
                <ul>
                    <li>Fattorizziamo <ILatex>{r`A = Q \cdot \begin{pmatrix} R\\ 0 \end{pmatrix}`}</ILatex>.</li>
                    <li>Calcoliamo <ILatex>{r`w = Q^T \cdot y`}</ILatex>.</li>
                    <li>Teniamo solo i primi <ILatex>n</ILatex> valori di <ILatex>{r`w`}</ILatex> e mettiamoli
                        in <ILatex>{r`w_1`}</ILatex>.
                    </li>
                    <li>Calcoliamo <ILatex>{r`R \cdot \alpha = w_1`}</ILatex>.</li>
                </ul>
            </Panel>
            <Panel title={"Caso generale"}>
                <p>
                    Caso che non preclude alcuna composizione di <ILatex>{r`A`}</ILatex>.
                </p>
                <p>
                    Ci sono <b>infinite</b> soluzioni, con <ILatex>{`n-k`}</ILatex> gradi di libertà.
                </p>
                <p>
                    Si cerca sempre di trovare la <i>soluzione di norma minima</i>, che,
                    se <ILatex>{r`k \leq n \leq m`}</ILatex>, allora è <b>unica</b>.
                </p>
                <p>
                    Per trovarla:
                </p>
                <ul>
                    <li>Fattorizziamo <ILatex>{r`A = U \cdot \Sigma \cdot V^T`}</ILatex> con la <i>fattorizzazione
                        SVD</i></li>
                    <li>Calcoliamo <ILatex>{r`\zeta = U^T \cdot y`}</ILatex></li>
                    <li>
                        <p>
                            Calcoliamo:
                        </p>
                        <PLatex>{r`
                        \gamma =
                        \begin{pmatrix}
                            \frac{z_1}{\sigma_1}\\\\
                            \frac{z_2}{\sigma_2}\\\\
                            \vdots\\\\
                            \frac{z_{k-1}}{\sigma_{k-1}}\\\\
                            \frac{z_k}{\sigma_k}\\\\
                            0\\\\
                            0\\\\
                            \vdots\\\\
                            0
                        \end{pmatrix}                            
                        `}</PLatex>
                    </li>
                    <li>Calcoliamo <ILatex>{r`\alpha = V \cdot \gamma`}</ILatex></li>
                </ul>
                <Example>
                    Gli zeri nella <ILatex>{r`\gamma`}</ILatex> sono i gradi di libertà, sono zero in modo che essi
                    diano la norma minima.
                </Example>
            </Panel>
        </Section>
    </>
}
