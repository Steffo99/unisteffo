import style from "./thesis.css";
import {Component} from "preact";

export default class Thesis extends Component {
    render() {
        return (
            <div class={style.thesis}>
                <h4>
                    Tesi
                </h4>
                {this.props.children}
            </div>
        )
    }
}
