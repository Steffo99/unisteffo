import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, Image} from "bluelib";
import Example from "../../components/Example";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Summaries"}>
                <Panel title={"Cosa sono?"}>
                    <p>
                        Le summary sono <b>brevi spezzoni di testo</b> che permettono all'utente di capire quali documenti siano rilevanti per lui.
                    </p>
                    <Example>
                        <Image src={"https://i.imgur.com/8aMrIDY.png"}/>
                    </Example>
                </Panel>
                <Panel title={"Static summaries"}>
                    <p>
                        Summary fisse che dipendono <b>solo dal documento</b>.
                    </p>
                    <p>
                        Possono essere generate dalle <b>prime parole del documento</b>, dalle <b>frasi più importanti</b> o da <b>metadati</b> del documento stesso (<Link href={"https://ogp.me/"}>OpenGraph</Link>).
                    </p>
                    <Example>
                        Opinione personale: le summary generate da OpenGraph solitamente fanno schifo :(
                    </Example>
                </Panel>
                <Panel title={"Dynamic summaries"}>
                    <p>
                        Summary che dipendono <b>sia dal documento</b>, <b>sia dalla query effettuata</b>.
                    </p>
                    <p>
                        Generalmente, estraggono le frasi vicino alle occorrenze dei termini della query.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
