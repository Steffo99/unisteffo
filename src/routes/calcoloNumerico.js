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
                </Split>
            </div>
        )
    }
}
