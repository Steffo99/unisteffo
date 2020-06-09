import {Component} from 'preact'
import Section from "../components/Elements/Section";
import Panel from "../components/Elements/Panel";
import Example from "../components/Elements/Example";
import Code from "../components/Rendering/Code";
import Timer from "../components/Elements/Timer";


export default function(props) {
    return (
        <div>
            <h1>Apprendimento ed evoluzione in sistemi artificiali</h1>
            <Section title={"Informazioni"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><a href={"mailto:marco.villani@unimore.it"}>Prof. Marco Villani</a></li>
                    </ul>
                </Panel>
                <Panel title={"Archivio"}>
                    <p>
                        Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a href={"https://drive.google.com/drive/folders/1GcjP1Z5UtRjyAag7qjFQ-kx3s06G8ZoP"}>archivio del corso su Google Drive</a>.</b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Esame"}>
                <Panel title={"Scritto"}>
                    <ul>
                        <li>Scegli 2 tra 6 domande possibili</li>
                        <li>90 minuti</li>
                    </ul>
                </Panel>
                <Panel title={"Appelli"}>
                    <ol>
                        <li><Timer to={"2020-06-23"}/></li>
                        <li><Timer to={"2020-07-08"}/></li>
                        <li><Timer to={"2020-07-22"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"NetLogo"}>
                <Panel title={"Cos'è?"}>
                    <p>
                        NetLogo è un software di modellazione sistemi multiagente, da noi usat
                    </p>
                    <p>
                        Si può <a href={"https://ccl.northwestern.edu/netlogo/download.shtml"}>scaricare</a> o <a href={"https://www.netlogoweb.org/launch"}>usare da browser</a>.
                    </p>
                    <p>
                        Il suo codice sorgente è disponibile su <a href={"https://github.com/NetLogo/NetLogo"}>GitHub</a>, e ha una pagina di <a href={"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"}>documentazione</a>.
                    </p>
                    <p>
                        <b style={"font-size: x-large;"}><a href={"/apprendimento/netlogo"}>Consulta i miei appunti su NetLogo qui!</a></b>
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
