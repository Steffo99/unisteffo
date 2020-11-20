import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import Example from "../../components/Example";
import ToBeContinued from "../../components/ToBeContinued";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Parametri di valutazione"}>
                <Panel title={"Richiamo"}>
                    <p>
                        La <b>frazione dei documenti rilevanti totali restituita</b>:
                    </p>
                    <PLatex>{r`
                        \frac{R \cap A}{R}
                    `}</PLatex>
                </Panel>
                <Panel title={"Precisione"}>
                    <p>
                        La <b>frazione dei documenti restituiti che sono rilevanti</b>:
                    </p>
                    <PLatex>{r`
                        \frac{R \cap A}{A}
                    `}</PLatex>
                </Panel>
            </Section>
            <Section title={"Valutazione dei modelli"}>
                <Panel title={"Come funziona?"}>
                    <p>
                        Si effettuano <i>test</i> e si valutano precisione e richiamo ottenuti.
                    </p>
                    <aside>
                        <u>Test</u>: verifica di un programma in cui l'output corretto è conosciuto a priori.
                    </aside>
                    <p>
                        Il modello IR ideale ha valori di richiamo e precisione di 1, ma nella realtà questi valori tendono ad essere <b>inversamente proporzionali</b>.
                    </p>
                </Panel>
                <Panel title={"Misura a livelli di richiamo fissi"}>
                    <p>
                        Si fissano un certo numero di livelli di richiamo desiderati e si misura la precisione che ha il modello in quei punti, creando una <i>curva di richiamo standard</i>.
                    </p>
                    <p>
                        È possibile ottenere una <i>curva di richiamo interpolata</i> prendendo per ogni punto il valore di massima precisione tra esso e i punti precedenti.
                    </p>
                    <Example>
                        Interpolata mi sembra un termine orribile... Non sarebbe molto meglio <b>monotonica</b>?
                    </Example>
                </Panel>
                <Panel title={"Media o valore singolo?"}>
                    <p>
                        È possibile misurare la <i>curva di richiamo media</i> effettuando la media su più query dei vari valori, e la <i>curva di richiamo a valore singolo</i> effettuando una query sola.
                    </p>
                    <p>
                        Sono entrambe importanti per effettuare una valutazione, perchè la curva media potrebbe <b>mascherare problemi di specifiche query</b> nei modelli.
                    </p>
                </Panel>
            </Section>
            <ToBeContinued/>
        </Fragment>
    )
}
