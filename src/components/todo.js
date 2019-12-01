import style from "./todo.css";
import { Component } from 'preact';

export default class Todo extends Component {
	render() {
		return <span class={style.todo}>{this.props.children}</span>;
	}
}