import style from "./hypothesis.css";
import {Component} from "preact";

export default class Hypothesis extends Component {
    render() {
        return (
            <div class={style.hypothesis}>
                <h4>
                    Ipotesi
                </h4>
                {this.props.children}
            </div>
        )
    }
}
