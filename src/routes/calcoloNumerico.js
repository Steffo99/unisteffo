import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";

const r = String.raw;

export default class CalcoloNumerico extends Component {
    render() {
        return (
            <div>
                <h1>Calcolo Numerico</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Slides"}>
                        <p>
                            Ultimo aggiornamento: <time>2020-03-11</time>
                        </p>
                        <ul>
                            <li><a href={"https://t.me/unimorefiles/13"}>Richiami di Algebra Lineare</a></li>
                            <li><a href={"https://t.me/unimorefiles/14"}>Slides</a></li>
                            <li><a href={"https://t.me/unimorefiles/15"}>Laboratorio</a></li>
                            <li><a href={"https://t.me/unimorefiles/16"}>Matlab</a></li>
                        </ul>
                        <p>
                            <i>Per slides più aggiornate, visitate <a href={"https://dolly.fim.unimore.it/2019/course/view.php?id=25"}>Dolly</a>!</i>
                        </p>
                    </Panel>
                    <Panel title={"Videolezioni"}>
                        <ol>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/ef3c5cf6f4e74a948f03220bc1c3a87d"}>Introduzione al corso</a></li>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/ef3c5cf6f4e74a948f03220bc1c3a87d"}>Introduzione alla materia</a></li>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/57489722ce4e426194fd8c9cb06a1867"}>Rappresentazione dei numeri</a></li>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/57489722ce4e426194fd8c9cb06a1867"}>Rappresentazione fixed point degli interi</a></li>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/6da751c5e49143eebe203e388ca8a4b8"}>Rappresentazione floating point dei reali</a></li>
                            <li><a href={"https://eu.bbcollab.com/collab/ui/session/playback/load/6da751c5e49143eebe203e388ca8a4b8"}>Operazioni di macchina</a></li>
                        </ol>
                    </Panel>
                    <Panel title={"Team-based Learning"}>
                        <blockquote>
                            <p>
                                Le lezioni in modalità TBL, previste per il corso di Laurea in Informatica, saranno erogate solo quando sarà possibile tornare alla modalità didattica in presenza, per la natura stessa di questa metodologia che non prevede uno svolgimento a distanza.
                            </p>
                            <p>
                                Per il momento, vista l'incertezza della situazione in continua evoluzione, è inutile dare ulteriori indicazioni sulle date o altri aspetti pratici legati al progetto.
                            </p>
                            <p>
                                Appena sarà possibile, gli interessati verranno informati tramite email.
                            </p>
                        </blockquote>
                    </Panel>
                </Split>
            </div>
        )
    }
}
