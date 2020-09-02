import {Fragment} from "preact";
import {ILatex, Panel, PLatex, Section} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function () {
    return (
        <Fragment>
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
        </Fragment>
    )
}
