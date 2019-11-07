import style from "./panel.css";
import { Component } from 'preact';

export default class Panel extends Component {
	render() {
		return <div class={style.panel}>{this.props.children}</div>;
	}
}