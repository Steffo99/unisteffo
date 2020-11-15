import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import ToBeContinued from "../../components/ToBeContinued";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Document processing"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Una <b>procedura</b> che ottimizza un documento per la ricerca.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"1. Analisi lessicale"}>
                    <p>
                        Passo che trasforma il documento in una <b>lista</b> (<i>bag of words</i>) di <b>parole</b> (<i>token</i>).
                    </p>
                    <p>
                        Deve decidere come considerare i <b>simboli tipografici</b>, il <b>case</b> delle lettere e le <b>cifre</b>.
                    </p>
                </Panel>
                <Panel title={"2. Eliminazione delle stopwords"}>
                    <p>
                        Passo che <b>elimina</b> dalla lista i <b>token inutili</b> ai fini delle ricerche.
                    </p>
                    <p>
                        Esse solitamente sono gli <b>articoli</b> e le <b>preposizioni</b>.
                    </p>
                </Panel>
                <Panel title={"3. Stemming dei token"}>
                    <p>
                        Passo che <b>riduce alla radice</b> tutti i token della lista.
                    </p>
                    <p>
                        Converte i <b>plurali in singolari</b>, <b>passati ai presenti</b>, e così via.
                    </p>
                </Panel>
                <Panel title={"4. Selezione degli index term"}>
                    <p>
                        Passo che <b>seleziona i termini più importanti</b> della lista.
                    </p>
                    <p>
                        Generalmente sfrutta dei <i>parser</i> o dei <i>tagger</i>.
                    </p>
                    <aside>
                        <u>Parser</u>: impreciso ma molto dettagliato, effettua l'analisi grammaticale, logica e del periodo.
                    </aside>
                    <aside>
                        <u>Tagger</u>: preciso ma poco dettagliato, effettua solo l'analisi logica.
                    </aside>
                </Panel>
                <Panel title={"5. Categorizzazione"}>
                    <p>
                        Passo che <b>classifica</b> il documento in una o più <b>categorie</b> del <i>thesaurus</i>.
                    </p>
                    <aside>
                        <u>Thesaurus</u>: gerarchia di categorie, può essere creata <b>manualmente</b> o generata <b>automaticamente</b>.
                    </aside>
                </Panel>
            </Section>
            <Section title={"Similitudine tra parole"}>
                <ToBeContinued/>
                <Panel title={"Cos'è?"}>
                    <p>
                        Misura di quanto due parole abbiano <b>caratteristiche in comune</b>.
                    </p>
                    <p>
                        È simile alla <i>sinonimia tra parole</i>
                    </p>
                    <p>
                        È diversa dalla <i>correlazione tra parole</i>, che misura quanto due parole vengono
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
