import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, CodeDefaultLanguage, Code, BoxColors} from "bluelib";
import Link from "../../components/Link";
import ToBeContinued from "../../components/ToBeContinued";

const r = String.raw;


export default function () {
    return (
        <CodeDefaultLanguage.Provider value={"python"}>

        <Section title={"Python"}>
            <Panel title={"Mordere il pitone"} color={BoxColors.BLUE}>
                <p>
                    Su questo sito non sono presenti i concetti base di Python e della programmazione.
                </p>
                <p>
                    Se ne avete bisogno, potete leggervi <a href={"https://python.swaroopch.com/"}>A Byte of Python</a>, un ottimo libro gratuito e veloce a riguardo :)
                </p>
            </Panel>
            <ToBeContinued/>
        </Section>

        </CodeDefaultLanguage.Provider>
    )
}
