import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, BoxColors} from "bluelib";
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
            <Section title={"Precisione e richiamo"}>
                <Panel title={"Valutazione dei modelli IR"}>
                    <p>
                        Si effettuano <i>test</i> e si valutano precisione e richiamo ottenuti.
                    </p>
                    <aside>
                        <u>Test</u>: verifica di un programma in cui l'output corretto è conosciuto a priori.
                    </aside>
                    <p>
                        Il modello IR ideale ha valori di richiamo e precisione di 1, ma nella realtà questi valori tendono ad essere <b>inversamente proporzionali</b>.
                    </p>
                    <p>
                        Un fattore significativo nel richiamo e nella precisione è la <b>forma del documento</b>.
                    </p>
                    <Example>
                        Libri interi, capitoli, pagine o frasi; possono essere tutti documenti, cambia solo la loro <i>granularità</i>.
                    </Example>
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
                <Panel title={"Mean Average Precision (MAP)"}>
                    <p>
                        La media tra i valori di più curve di richiamo.
                    </p>
                    <p>
                        È utile per le valutazioni in cui l'utente sta cercando <b>più documenti rilevanti</b> alla volta.
                    </p>
                </Panel>
                <Panel title={"R-recall e R-precision"}>
                    <p>
                        Valori di recall e precision riguardo i primi <ILatex>{r`R`}</ILatex> documenti restituiti.
                    </p>
                    <Example>
                        La prima pagina di Google (10 documenti) considererà i valori di 10-recall e 10-precision.
                    </Example>
                </Panel>
            </Section>
            <Section title={"Misure aggregate"}>
                <Panel title={"Misura F"}>
                    <p>
                        È anche detta <i>media armonica</i>.
                    </p>
                    <p>
                        Un <b>singolo valore</b> che tiene conto sia della precisione <ILatex>{r`p`}</ILatex> sia del richiamo <ILatex>{r`r`}</ILatex>:
                    </p>
                    <PLatex>{r`
                        F = \frac{2}{\frac{1}{p} + \frac{1}{r}}
                    `}</PLatex>
                </Panel>
                <Panel title={"Misura E"}>
                    <p>
                        Una versione più configurabile della Misura F che permette di <b>dare priorità</b> <ILatex>{r`b`}</ILatex> a precisione (<ILatex>{r`b > 1`}</ILatex>) o a richiamo (<ILatex>{r`b < 1`}</ILatex>) in base alle proprie esigenze:
                    </p>
                    <PLatex>{r`
                        E = 1 - \frac{1 + b^2}{\frac{b^2}{r} + \frac{1}{p}}
                    `}</PLatex>
                </Panel>
            </Section>
            <Section title={"Misure cumulative"}>
                <Panel title={"Discounted Cumulative Gain (DCG)"}>
                    <p>
                        Misura per valutare i motori di ricerca online che tiene conto dell'<b>ordine in cui vengono restituiti i documenti</b>.
                    </p>
                    <p>
                        Si basa su <b>valutazioni di rilevanza</b> e su <b>pesi posizionali</b> dei risultati.
                    </p>
                    <Example>
                        Valuta quanto è stata utile questa ricerca:
                        <span style={"font-size: xx-large; padding-left: 8px;"}>
                            ☆☆☆☆☆
                        </span>
                    </Example>
                    <Example>
                        La valutazione del primo risultato viene moltiplicata per <ILatex>{r`\frac{1}{\log_2(1)}`}</ILatex>, la seconda per <ILatex>{r`\frac{1}{\log_2(2)}`}</ILatex>, la terza per <ILatex>{r`\frac{1}{\log_2(3)}`}</ILatex> e così via.
                    </Example>
                </Panel>
                <Panel title={"Normalized DCG (NDCG)"} color={BoxColors.YELLOW}>
                    <p>
                        Miglioramento alla DCG che supporta <b>quantità di risultati differenti</b>.
                    </p>
                    <i>
                        Non dice la formula, e l'esempio non esemplifica un bel niente...
                    </i>
                </Panel>
            </Section>
        </Fragment>
    )
}
