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
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Resto di interpolazione"}>
                <Panel title={"Definizione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Stima"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Fenomeno di Runge"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Nodi di Chebychev"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
        </Fragment>
    )
}
