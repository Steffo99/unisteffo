import style from "./proof.css";
import {Component} from "preact";

export default class Proof extends Component {
    render() {
        return (
            <div class={style.proof}>
                <h4>
                    Dimostrazione
                </h4>
                {this.props.children}
            </div>
        )
    }
}
