import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";
import Timer from "../components/timer";

const r = String.raw;

export default class BasiDiDati extends Component {
    render() {
        return (
            <div>
                <h1>Basi di dati</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Videolezioni"}>
                        <ol start={"0"}>
                            <li>Presentazione del corso
                                <ul>
                                    <li><a href={"https://t.me/unimorefiles/2"}>Parte 1</a></li>
                                    <li><a href={"https://t.me/unimorefiles/3"}>Parte 2</a></li>
                                    <li><a href={"https://t.me/unimorefiles/4"}>Parte 3</a></li>
                                    <li><a href={"https://t.me/unimorefiles/5"}>Parte 4</a></li>
                                </ul>
                            </li>
                            <li>Introduzione e tecnologia dei sistemi informativi
                                <ul>
                                    <li><a href={"https://t.me/unimorefiles/17"}>Parte 1</a></li>
                                    <li><a href={"https://t.me/unimorefiles/18"}>Parte 2</a></li>
                                    <li><a href={"https://t.me/unimorefiles/19"}>Parte 3</a></li>
                                </ul>
                            </li>
                            <li>
                                Progetto ER + consegna testo progetto 2019/20
                                <ul>
                                    <li><a href={"https://t.me/unimorefiles/20"}>Parte 1</a></li>
                                    <li><a href={"https://t.me/unimorefiles/22"}>Parte 2</a></li>
                                    <li><a href={"https://t.me/unimorefiles/21"}>Parte 3</a></li>
                                </ul>
                            </li>
                        </ol>
                    </Panel>
                    <Panel title={"Slides"}>
                        <ol start={"0"}>
                            <li><a href={"https://t.me/unimorefiles/6"}>Presentazione del corso</a></li>
                            <li>
                                Introduzione e tecnologia dei sistemi informativi
                                <ul>
                                    <li><a href={"https://t.me/unimorefiles/27"}>Introduzione ai sistemi informativi</a></li>
                                    <li><a href={"https://t.me/unimorefiles/28"}>Tecnologia dei sistemi informativi</a></li>
                                </ul>
                            </li>
                            <li>
                                Progettazione ER
                                <ul>
                                    <li><a href={"https://t.me/unimorefiles/33"}>La progettazione della base di dati</a></li>
                                    <li><a href={"https://t.me/unimorefiles/32"}>Il modello entità relazione</a></li>
                                    <li><a href={"https://t.me/unimorefiles/31"}>La definizione delle proprietà</a></li>
                                    <li><a href={"https://t.me/unimorefiles/30"}>Le associazioni (parte 1)</a></li>
                                    <li><a href={"https://t.me/unimorefiles/29"}>Le associazioni (parte 2)</a></li>
                                </ul>
                            </li>
                        </ol>
                    </Panel>
                </Split>
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
