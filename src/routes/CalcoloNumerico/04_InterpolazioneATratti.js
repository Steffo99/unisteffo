import style from "./04_InterpolazioneATratti.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
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
                        Se
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
