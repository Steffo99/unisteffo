import style from "./example.css";
import {Component} from "preact";

export default class Example extends Component {
    render() {
        return (
            <blockquote class={style.example}>
                {this.props.children}
            </blockquote>
        )
    }
}
