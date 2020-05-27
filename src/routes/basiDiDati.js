import {Component} from 'preact'
import Split from "../components/old/split";
import Panel from "../components/Elements/Panel";
import Timer from "../components/old/timer";

const r = String.raw;

export default class BasiDiDati extends Component {
    render() {
        return (
            <div>
                <h1>Basi di dati</h1>
                <Split title={"Esame"}>
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
                        <p>
                            Prossimo appello:
                        </p>
                        <Timer/>
                    </Panel>
                    <Panel title={"Progetto"}>
                        <p>
                            In gruppo, progettare un database secondo <a href={"https://t.me/unimorefiles/23"}>queste</a> specifiche.
                        </p>
                        <p>
                            Termine ultimo per la consegna:
                        </p>
                        <Timer to={"2021-05-31 23:59:59"}/>
                        <p>
                            Consegnando il progetto prima della fine di Luglio si otterrà un bonus!
                        </p>
                        <Timer to={"2020-07-31 23:59:59"}/>
                        <p>
                            Esempi di progetti degli anni passati:
                        </p>
                        <ul>
                            <li><a href={"https://t.me/unimorefiles/25"}>Esempio 1</a></li>
                            <li><a href={"https://t.me/unimorefiles/26"}>Esempio 2</a></li>
                        </ul>
                        <p>
                            Presentando il progetto si otterrà un bonus!
                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
