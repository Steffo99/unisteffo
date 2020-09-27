import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, BaseLink} from "bluelib";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><BaseLink disabled={true}>Prof. ???</BaseLink></li>
                    </ul>
                </Panel>
            </Section>
        </Fragment>
    )
}
