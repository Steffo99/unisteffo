import style from "./02_ZeriDiFunzione.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Ricerca degli zeri di funzione"}>
                <Panel title={"Descrizione"}>
                    <p>
                        Si vogliono trovare i punti (<i>zeri</i>) in cui una funzione <b>continua</b> <ILatex>f : [a, b] \to R</ILatex> vale <ILatex>0</ILatex>.
                    </p>
                    <p>
                        Per il <b>teorema del valore medio</b>, se <ILatex>{r`f(a) \cdot f(b) \leq 0`}</ILatex>, allora esiste sicuramente un punto in cui la funzione vale 0.
                    </p>
                    <p>
                        Denominiamo il punto in cui la funzione vale <ILatex>0</ILatex> come <ILatex>{r`x^*`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"Condizionamento"}>
                    <p>
                        Più la <b>derivata prima</b> della funzione <b>si avvicina allo 0</b>, <b>peggio</b> il problema sarà condizionato.
                    </p>
                    <PLatex>{r`f'(x^*) \simeq 0 \implies mal\ condizionato`}</PLatex>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Metodi dicotomici"}>
                    <p>
                        Sono <b>metodi iterativi</b> in grado di ridurre sempre di più l'intervallo in cui è definita la funzione, facendolo convergere allo zero desiderato.
                    </p>
                    <p>
                        Alcuni di essi sono il <i>metodo dicotomico</i> e il <i>metodo regula falsi</i>.
                    </p>
                    <p>
                        Richiedono <b>una valutazione di funzione non-lineare</b> ad ogni iterazione.
                    </p>
                </Panel>
                <Panel title={"Metodi di Newton"}>
                    <p>
                        Sono <b>metodi iterativi</b> che sfruttano la <b>derivabilità</b> della funzione per ottenere <b>velocità di convergenza più alte</b>, a costo di <b>maggiore complessità computazionale</b>.
                    </p>
                </Panel>
                <Panel title={"Metodi delle approssimazioni successive"}>
                    <p>
                        Sono <b>metodi iterativi</b> che <Todo>TODO</Todo>
                    </p>
                </Panel>
            </Section>
            <Section title={"Metodi dicotomici"}>
                <Panel title={"Metodo di bisezione"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo regula falsi"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
            <Section title={"Metodo delle approssimazioni successive"}>
                <Panel title={"Metodo generale"}>
                    <Todo>TODO</Todo>
                </Panel>
                <Panel title={"Metodo di Newton"}>
                    <Todo>TODO</Todo>
                </Panel>
            </Section>
        </Fragment>
    )
}
