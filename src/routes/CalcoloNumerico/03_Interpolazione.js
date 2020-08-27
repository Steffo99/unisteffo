import style from "./03_Interpolazione.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Interpolazione"}>
                <Panel title={"Descrizione"}>
                    <p>
                        Si vuole trovare una funzione in grado di <b>approssimarne</b> un'altra, di cui si conoscono però solo alcuni punti.
                    </p>
                    <Example>
                        È utile in un sacco di casi! Ad esempio, quando si vuole scalare un'immagine.
                    </Example>
                    <p>
                        I punti sono detti <b>nodi</b> <ILatex>{r`(x_i, y_i)`}</ILatex>, mentre la funzione costruita su di essi è detta <b>interpolante</b> <ILatex>{r`g`}</ILatex>:
                    </p>
                    <PLatex>{r`g(x_i) = y_i`}</PLatex>
                    <p>
                        Dato un insieme di punti, esistono <b>infinite</b> funzioni interpolanti.
                    </p>
                </Panel>
                <Panel title={"Interpolazione polinomiale"}>
                    <p>
                        Il <u>teorema fondamentale dell'algebra</u> dice che <b>esiste una sola interpolante <i>polinomiale</i></b> che interpola un dato insieme di punti.
                    </p>
                    <p>
                        Con <ILatex>n+1</ILatex> punti, l'interpolante sarà al massimo di grado <ILatex>n</ILatex>, e viene detta <ILatex>{r`p_n`}</ILatex>.
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
                        È efficace perchè una volta calcolati i coefficienti essi <b>valgono per tutti i punti</b>, ma ha come svantaggio che la matrice di Vandermonde è <b>spesso malcondizionata.</b>
                    </p>
                </Panel>
                <Panel title={"Metodo di Lagrange"}>
                    <p>
                        È possibile scrivere il polinomio di interpolazione <b>raccogliendo le <ILatex>{r`y`}</ILatex></b>:
                    </p>
                    <PLatex>{r`p_n (x) = y_0 L_0 + y_1 L_1 + y_2 L_2 + \dots + y_n L_n`}</PLatex>
                    <p>
                        I polinomi <ILatex>{r`L_k`}</ILatex> sono detti <b>polinomi di Lagrange</b>, e hanno le seguenti proprietà:
                    </p>
                    <ul>
                        <li>
                            Valgono <ILatex>1</ILatex> in corrispondenza del nodo con lo stesso indice, <ILatex>0</ILatex> in corrispondenza dei nodi con indice diverso e <ILatex>{r`0 < n < 1`}</ILatex> in tutti gli altri casi.

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
                        Questo metodo permette di calcolare il valore del polinomio di interpolazione <b>in un singolo punto</b>:
                    </p>
                    <Example>
                        <p>
                            Si può risparmiare tempo di calcolo calcolando una singola volta il numeratore con <i>tutti</i> i termini:
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
                        In particolare, è interessante la sua norma a infinito, <ILatex>{r`\| f - p_n \|_\infty`}</ILatex>, che corrisponde alla distanza massima tra le due funzioni.
                    </p>
                    <p>
                        Un teorema dice che esso è uguale a: <Todo>TODO: Non credo serva.</Todo>
                    </p>
                    <PLatex>{r`R_n(x) = \frac{ \omega_n(x) }{ (n + 1)! } \cdot f^{(n+1)}(\xi)`}</PLatex>
                </Panel>
                <Panel title={"Stima"}>
                    <p>
                        <Todo>TODO: Tutta la dimostrazione di queste due affermazioni.</Todo>
                    </p>
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
                        Fenomeno che si verifica cercando di interpolare la <i>funzione di Runge</i> (<ILatex>{r`\frac{1}{1 + 25x^2}`}</ILatex>).
                    </p>
                    <p>
                        Scegliendo <b>nodi equispaziati</b>, l'errore di interpolazione sarà <b>enorme</b> vicino ai due estremi dell'intervallo.
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
                        Nodi ottenuti partizionando una <b>semicirconferenza</b>, e proiettando le partizioni sul diametro.
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
        </Fragment>
    )
}
