import style from "./minus.css";
import { Component } from 'preact';

export default class Minus extends Component {
	render() {
		return <span class={style.minus}>{this.props.children}</span>;
	}
}
