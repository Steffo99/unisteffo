import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, BaseLink, Code} from "bluelib";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:federica.mandreoli@unimore.it"}>Prof. Federica Mandreoli</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Collegamenti"}>
                    <ul>
                        <li><Link href={"https://dolly.fim.unimore.it/2020/course/view.php?id=69"}>Pagina Dolly Unimore</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Download videolezioni"}>
                    <p>
                        Puoi scaricare le videolezioni di Gestione dell'informazione con <Link href={"https://github.com/Steffo99/bbbdl"}>bbbdl</Link>:
                    </p>
                    <Code language={"bash"}>
                        bbbdl sync -r https://raw.githubusercontent.com/Steffo99/unimoreinfo-wiki/main/gestionedellinformazione.json
                    </Code>
                </Panel>
            </Section>
        </Fragment>
    )
}
