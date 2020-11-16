import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Un approccio probabilistico"}>
                <Panel title={"Probabilità dei token"}>
                    <p>
                        Un supplemento al thesaurus specifico a un certo testo: aggiunge ad ogni token <ILatex>{r`c`}</ILatex> la <b>probabilità</b> <ILatex>{r`P(c)`}</ILatex> che un <b>termine selezionato a caso del testo appartenga al sottoalbero</b> formato dal token e i suoi discendenti.
                    </p>
                    <p>
                        La radice del thesaurus ha sempre probabilità <ILatex>{r`1`}</ILatex>.
                    </p>
                </Panel>
                <Panel title={"Information content"}>
                    <p>
                        Una misura <b>probabilistica</b> di quanto un certo token <ILatex>{r`c`}</ILatex> sia <b>specifico</b> in un certo contesto:
                    </p>
                    <PLatex>{r`
                        IC(c) = - \log \left( P(c) \right)
                    `}</PLatex>
                    <p>
                        È anche detta <i>sorpresa</i> o <i>informazione di Shannon</i>.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
