import {ILatex, Panel, PLatex, Section, Timer} from "bluelib";
import Example from "../components/Example";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Calcolo Numerico</h1>
            <Section title={"Informazioni"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><a href={"mailto:silvia.bonettini@unimore.it"}>Prof.ssa Silvia Bonettini</a></li>
                    </ul>
                </Panel>
                <Panel title={"Archivio"}>
                    <p>
                        Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a
                        href={"https://drive.google.com/drive/folders/1gqY-QIe4UeOSHpcho0R-Nvh2IRAlTFmf"}>archivio del
                        corso su Google Drive</a>.</b>.
                    </p>
                </Panel>
                <Panel title={"Prerequisiti"}>
                    <p>
                        <a href={"/ripassodialgebralineare"}>Prima di studiare Calcolo Numerico, guardati i prerequisiti
                            di Algebra Lineare!</a>
                    </p>
                </Panel>
            </Section>
            <Section title={"Esame"}>
                <Panel title={"Orale"}>
                    <p>
                        E' composto da:
                    </p>
                    <ul>
                        <li>2 domande sugli argomenti teorici</li>
                        <li>1 domanda di implementazione algoritmo in MATLAB</li>
                    </ul>
                </Panel>
                <Panel title={"Appelli"}>
                    <ol>
                        <li><Timer to={"2020-08-31 09:00"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Algoritmi"}>
                <Panel title={"Algoritmi numerici"}>
                    <p>
                        Algoritmi che hanno:
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
                        L'errore relativo di un numero reale rappresentato in virgola mobile è minore o uguale alla <i>precisione
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
                        <li>Hanno più di un elemento neutro.</li>
                        <li>Un numero ha più opposti.</li>
                        <li>Non sono associative.</li>
                        <li>Non sono distributive.</li>
                        <li>Non vale la legge di annullamento del prodotto.</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Errori nelle operazioni di macchina"}>
                <Panel title={"Errore inerente"}>
                    <p>
                        Errore derivato da underflow sui <b>dati</b>.
                    </p>
                    <p>
                        Si indica con <ILatex>{r`\epsilon_{variabile}`}</ILatex>.
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
                        Si indica con <ILatex>{r`\epsilon_{passo}`}</ILatex>.
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

            <Section>
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
            <Section title={"Sistemi lineari"}>
                <Panel title={"Condizionamento"}>

                    <PLatex>{r`\frac{{\color{yellow} \|A\| \cdot \|A^{-1}\|} \cdot \| \Delta b \|}{\| b \|}`}</PLatex>
                    <p>
                        In particolare, le <b>numero di condizionamento</b>:
                    </p>
                    <PLatex>
                        {r`k(A) = `}
                    </PLatex>
                </Panel>
            </Section>
            <Section title={"Fattorizzazione"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        La fattorizzazione è il processo che permette di risolvere sistemi di equazioni lineari
                        rappresentati in forma di matrice.
                    </p>
                    <p>
                        Esistono molteplici algoritmi in grado di realizzarla: mentre tutti portano alla stessa
                        soluzione, possono avere <b>velocità</b> e <b>indici algoritmici</b> diversi.
                    </p>
                    <p>
                        Il sistema lineare da risolvere viene diviso in due parti: la <i>matrice dei coefficienti</i> e
                        il <i>vettore termine noto</i>.
                    </p>
                </Panel>
                <Panel title={"Teorema di Rouché-Capélli"}>
                    <p>

                    </p>
                </Panel>
            </Section>
        </div>
    )
}
