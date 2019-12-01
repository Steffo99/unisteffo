import style from "./plus.css";
import { Component } from 'preact';

export default class Plus extends Component {
	render() {
		return <span class={style.plus}>{this.props.children}</span>;
	}
}