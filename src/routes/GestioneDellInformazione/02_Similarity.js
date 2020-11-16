import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import ToBeContinued from "../../components/ToBeContinued";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Relazioni tra parole"}>
                <Panel title={"Sinonimia"}>
                    <blockquote>
                        synonymy
                    </blockquote>
                    <p>
                        Due parole sono <i>sinonimi</i> quando hanno lo <b>stesso identico significato</b>.
                    </p>
                </Panel>
                <Panel title={"Somiglianza"}>
                    <blockquote>
                        similarity
                    </blockquote>
                    <p>
                        Due parole sono <i>simili</i> rappresentano concetti con <b>caratteristiche in comune</b>.
                    </p>
                </Panel>
                <Panel title={"Correlazione"}>
                    <blockquote>
                        relatedness
                    </blockquote>
                    <p>
                        Due parole sono <i>correlate</i> quando rappresentano <b>concetti vengono usati insieme</b> spesso.
                    </p>
                </Panel>
            </Section>
            <Section title={"Somiglianza path-based"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modo per misurare la somiglianza tra due parole confrontando solo la loro <b>posizione nel thesaurus</b>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Somiglianza path-distance"}>
                    <p>
                        Calcola la somiglianza basandosi sull'<b>inverso della distanza</b> tra le due parole <ILatex>{r`c_1`}</ILatex> e <ILatex>{r`c_2`}</ILatex> nell'albero:
                    </p>
                    <PLatex>{r`
                        sim\_pd(c_1, c_2) = \frac{1}{dist(c_1, c_2) + 1}
                    `}</PLatex>
                </Panel>
                <Panel title={"Somiglianza Wu-Palmer"}>
                    <p>
                        Calcola la somiglianza basandosi sulla <b>profondità dei due nodi</b> e sulla <b>profondità del minimo antenato comune</b> <ILatex>{r`mac`}</ILatex>:
                    </p>
                    <PLatex>{r`
                        sim\_wp(c_1, c_2) = \frac{2 \cdot depth(mac(c_1, c_2))}{depth(c_1) + depth(c_2)}
                    `}</PLatex>
                </Panel>
            </Section>
            <Section title={"Somiglianza information-content-based"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un modo per misurare la somiglianza tra due parole attraverso i loro valori di <b>information content</b>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Somiglianza Resnik"}>
                    <p>
                        Calcola la somiglianza basandosi sull'<b>information content del minimo antenato comune</b> <ILatex>{r`mac`}</ILatex> tra i due termini.
                    </p>
                    <PLatex>{r`
                        sim\_rs(c_1, c_2) = - \log P( mac(c_1, c_2) )
                    `}</PLatex>
                </Panel>
            </Section>
        </Fragment>
    )
}
