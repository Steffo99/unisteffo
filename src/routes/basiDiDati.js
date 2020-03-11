import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";

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
                        </ol>
                    </Panel>
                    <Panel title={"Slides"}>
                        <ol start={"0"}>
                            <li><a href={"https://t.me/unimorefiles/6"}>Presentazione del corso</a></li>
                        </ol>
                    </Panel>
                </Split>
            </div>
        )
    }
}
