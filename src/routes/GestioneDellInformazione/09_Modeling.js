import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import Example from "../../components/Example";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Information retrieval models"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        <b>Modelli matematici</b> che <b>ordinano per rilevanza</b> (<i>ranking</i>) i risultati di una query.
                    </p>
                    <p>
                        Formalmente, sono composti da:
                    </p>
                    <ul>
                        <li>I documenti <ILatex>{r`D`}</ILatex></li>
                        <li>La query <ILatex>{r`Q`}</ILatex></li>
                        <li>Una funzione di <i>ranking</i> <ILatex>{r`rank(q_i, d_j) \to \mathbb{R}`}</ILatex> che quantifica la similarità</li>
                    </ul>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Modello classico"}>
                    <Example>
                        I motori di ricerca web usano generalmente questo modello.
                    </Example>
                    <p>
                        <b>Modello IR</b> che rappresenta ogni documento come un insieme ordinato di <b>parole chiave</b> (<i>index terms</i>).
                    </p>
                    <p>
                        Associa un <b>peso</b> a ogni token, e ordina l'insieme in base a quel peso.
                    </p>
                    <p>
                        Generalmente, i pesi sono <b>indipendenti</b> uno dall'altro, e questo permette di <b>calcolarli parallelamente</b>.
                    </p>
                    <p>
                        <u>Bag-of-words</u>: L'ordine delle parole nel documento viene solitamente ignorato dal ranking.
                    </p>
                </Panel>
                <Panel title={"Modello booleano"}>
                    <Example>
                        <code>grep</code> è a tutti gli effetti un modello booleano.
                    </Example>
                    <p>
                        <b>Modello IR classico</b> che dà un peso booleano a ogni documento: <ILatex>{r`1`}</ILatex> se soddisfa tutti i requisiti della query, <ILatex>{r`0`}</ILatex> se non li soddisfa.
                    </p>
                    <p>
                        Ha una <b>precisione perfetta</b>, ma richiede query ben preparate e specifiche.
                    </p>
                    <p>
                        È anche <b>facile da implementare</b>.
                    </p>
                </Panel>
                <Panel title={"Modello vettoriale"}>
                    <Example>
                        Apache Lucene si basa su questo modello.
                    </Example>
                    <p>
                        <b>Modello IR</b> in cui ogni <b>caratteristica</b> di un documento è rappresentata con un <b>valore floating point</b> e l'intero documento è quindi rappresentato da una <b>n-pla</b> di tutte le sue caratteristiche.
                    </p>
                    <p>
                        <u>Similarità cosinusoidale</u>: il ranking si basa sull'angolo tra il "vettore query" e il "vettore documento":
                    </p>
                    <PLatex>{r`
                        rank(d_j, q) = \frac{d_j \cdot q}{\| d_j \| \times \| q \|}
                    `}</PLatex>
                    <p>
                        Spesso si associa un peso a ogni dimensione in modo da variare l'importanza di una data caratteristica; comunemente, per i testi, si usano come pesi le <b>frequenza dei token</b> normalizzate (<i>df</i>) o logaritmiche (<i>idf</i>).
                    </p>
                    <p>
                        Come il modello classico, ignora l'ordine delle parole.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
