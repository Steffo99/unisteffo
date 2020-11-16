import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex} from "bluelib";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Analisi lessicale"}>
                <Panel title={"Word sense disambiguation"}>
                    <p>
                        Procedura che <b>disambigua tra più significati</b> dello stesso token.
                    </p>
                    <p>
                        Si può realizzare confrontando la somiglianza di ogni significato con tutti gli altri nomi presenti nella frase.
                    </p>
                </Panel>
            </Section>
        </Fragment>
    )
}
