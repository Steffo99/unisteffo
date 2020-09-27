import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:mauro.leoncini@unimore.it"}>Prof. Mauro Leoncini</Link></li>
                    </ul>
                </Panel>
            </Section>
        </Fragment>
    )
}
