import {Component} from 'preact'
import Split from "../components/split";
import Latex from "../components/latex";
import Panel from "../components/panel";
import Example from "../components/example";
import Todo from "../components/todo";

const r = String.raw;

export default class ApprendimentoSistemiArtificiali extends Component {
    render() {
        return (
            <div>
                <h1>Apprendimento ed evoluzione in sistemi artificiali</h1>
                <Split title={"Materiale"}>
                    <Panel title={"Aula virtuale"}>
                        <p>
                            <a href={"https://eu.bbcollab.com/collab/ui/session/join/3c92ec729e20402dbbfaaa1b27c24947"}>Su bbcollab.com</a>
                        </p>
                    </Panel>
                    <Panel title={"Slides"}>
                        <ol>
                            <li><a href={"https://t.me/unimorefiles/9"}>Introduzione al corso</a></li>
                            <li><a href={"https://t.me/unimorefiles/10"}>Introduzione alla materia</a></li>
                        </ol>
                    </Panel>
                    <Panel title={"Videolezioni"}>
                        <ol>
                            <li><a href={"https://t.me/unimorefiles/7"}>Introduzione al corso</a></li>
                            <li><a href={"https://t.me/unimorefiles/8"}>Introduzione alla materia</a></li>
                        </ol>
                    </Panel>
                </Split>
            </div>
        )
    }
}
