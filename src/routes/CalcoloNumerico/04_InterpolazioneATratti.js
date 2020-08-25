import style from "./04_InterpolazioneATratti.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Interpolazione a tratti"}>
                <Panel title={"Come funziona?"}>
                    <p>
                        Invece che costruire una singola funzione che interpola tutti i punti, per <b>ogni intervallo tra due punti</b> (<i>sottointervallo</i>) si costruisce <b>una funzione apposta</b>.
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
                        <li>connettono <ILatex>{r`m + 2`}</ILatex> punti, e hanno <ILatex>{r`m`}</ILatex> sottointervalli</li>
                        <li>hanno funzioni <b>definite appositamente</b> per ogni sottointervallo</li>
                    </ul>
                    <Example>
                        <p>
                            Significa che agli estremi dell'intervallo, i valori di tutte le derivate fino al grado <ILatex>{r`n - 1`}</ILatex> devono essere uguali:
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
                        Ha come vantaggi complessità computazionale <b>molto più bassa</b> e l'<b>assenza</b> del fenomeno di Runge, ma allo stesso tempo si <b>perde la derivabilità della funzione.</b>
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
                        Spesso si indica con <ILatex>{r`h`}</ILatex> la distanza orizzontale tra due punti di un sottointervallo.
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
                        <li>Negli intervalli <ILatex>{r`[x_0, x_2]`}</ILatex> e <ILatex>{r`[x_{m-1}, x_{m+1}]`}</ILatex> si presenta <b>obbligatoriamente</b> un polinomio di <b>grado 3</b>.</li>
                    </ul>
                    <p>
                        È <b>unica</b>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Proprietà di minima curvatura"}>
                    <p>
                        Tra tutte le funzioni che interpolano dei punti, le tre classi di funzioni sopraelencate sono quelle che interpolano la funzione più "dolcemente".
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
        </Fragment>
    )
}
