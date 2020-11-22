import {Panel, Section} from "bluelib";
import {Fragment} from "preact";
import Example from "../../components/Example";
import Link from "../../components/Link";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Information Retrieval (IR)"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        <b>Processo</b> di <b>raccolta</b> e <b>recupero approssimato</b> di informazioni spesso <b>non strutturate</b>.
                    </p>
                    <p>
                        Riceve in input una <b>query</b>, elabora <b>documenti</b> e restituisce una <b>risposta</b> più rilevante possibile.
                    </p>
                    <p>
                        Un'applicazione che effettua IR si chiama <b>motore di ricerca</b>.
                    </p>
                </Panel>
                <Panel title={"Documenti"}>
                    <p>
                        <b>Raggruppamenti di informazioni</b> che possono avere <b>varie forme</b>.
                    </p>
                    <Example>
                        Potrebbe essere un documento un file, oppure un gruppo di informazioni contenute in quel file (email, slides)...
                    </Example>
                </Panel>
            </Section>
        </Fragment>
    )
}
