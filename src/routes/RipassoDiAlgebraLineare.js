import {ILatex, Panel, PLatex, Section, Todo} from "bluelib";
import Example from "../components/Example";

const r = String.raw;


export default function () {
    return (
        <div>
            <h1>Ripasso di Algebra Lineare <small>per <a href={"/calcolonumerico"}>Calcolo
                Numerico</a></small></h1>
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
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
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
        </div>
    )
}