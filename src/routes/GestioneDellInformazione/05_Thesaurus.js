import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Todo} from "bluelib";
import Example from "../../components/Example";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Thesaurus"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        Un <b>albero di token</b> organizzati in una gerarchia di significato.
                    </p>
                    <Example>
                        Il token "mela" avrà come genitore "frutto" e come figli <Link href={"https://it.wikipedia.org/wiki/Renetta"}>"Renetta"</Link>, <Link href={"https://it.wikipedia.org/wiki/Fuji_(mela)"}>"Fuji"</Link> e <Link href={"https://it.wikipedia.org/wiki/Granny_Smith"}>"Granny Smith"</Link>.
                    </Example>
                    <Example>
                        <Link href={"https://wordnet.princeton.edu/"}>WordNet</Link> è un thesaurus generale per la lingua inglese, mentre <Link href={"https://thes.bncf.firenze.sbn.it/thes-dati.htm"}>Nuovo soggettario</Link> è un thesaurus generale per la lingua italiana.
                    </Example>
                </Panel>
            </Section>
        </Fragment>
    )
}
