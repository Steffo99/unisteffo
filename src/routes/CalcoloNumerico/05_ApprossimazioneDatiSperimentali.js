import style from "./05_ApprossimazioneDatiSperimentali.less";
import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";

const r = String.raw;


export default function (props) {
    return (
        <Fragment>
            <Section title={"Problema: Approssimazione di dati sperimentali"}>
                <Panel title={"Perchè?"}>
                    <p>
                        Interpolare dati sperimentali non fornisce quasi mai un modello del fenomeno.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={""}>

                </Panel>
            </Section>
        </Fragment>
    )
}
