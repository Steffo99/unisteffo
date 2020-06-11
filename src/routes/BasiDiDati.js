import {Component} from 'preact'
import Section from "../components/Elements/Section";
import Panel from "../components/Elements/Panel";
import Timer from "../components/Elements/Timer";

const r = String.raw;

export default class BasiDiDati extends Component {
    render() {
        return (
            <div>
                <h1>Basi di dati</h1>
                <Section title={"Informazioni"}>
                    <Panel title={"Contatti"}>
                        <ul>
                            <li><a href={"mailto:riccardo.martoglia@unimo.it"}>Prof. Riccardo Martoglia</a></li>
                        </ul>
                    </Panel>
                    <Panel title={"Archivio"}>
                        <p>
                            Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a href={"https://drive.google.com/drive/folders/1q3bOf9czDXq7Bd5-kwdICuz-9Nx1zVp_"}>archivio del corso su Google Drive</a></b>.
                        </p>
                    </Panel>
                </Section>
                <Section title={"Esame"}>
                    <Panel title={"Scritto"}>
                        <p>
                            Uno scritto con tre domande:
                        </p>
                        <ul>
                            <li>Progettazione concettuale e logica</li>
                            <li>Formulazione interrogazione</li>
                            <li>Una domanda tra:
                                <ul>
                                    <li>Studio dato derivato</li>
                                    <li>Progettazione fisica</li>
                                    <li>Tecnologia database</li>
                                </ul>
                            </li>
                        </ul>
                    </Panel>
                    <Panel title={"Appelli"}>
                        <ol>
                            <li><Timer to={"2020-06-24"}/></li>
                            <li><Timer to={"2020-07-09"}/></li>
                            <li><Timer to={"2020-07-28"}/></li>
                        </ol>
                    </Panel>
                </Section>
                <Section>
                    <Panel title={"Progetto"}>
                        <p>
                            In gruppo, progettare un database secondo <a href={"https://t.me/unimorefiles/23"}>queste</a> specifiche.
                        </p>
                        <p>
                            Va consegnato via mail almeno 10 giorni prima dello scritto.
                        </p>
                    </Panel>
                    <Panel title={"Termini di consegna"}>
                        <ol>
                            <li><Timer to={"2020-06-14"}/></li>
                            <li><Timer to={"2020-06-30"}/></li>
                            <li><Timer to={"2020-07-18"}/></li>
                        </ol>
                    </Panel>
                </Section>
                <Section title={"Visualizzazioni utili"}>
                    <Panel title={"B+ Tree"}>
                        <p>
                            <a href={"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"}>Link</a>
                        </p>
                    </Panel>
                </Section>
            </div>
        )
    }
}
