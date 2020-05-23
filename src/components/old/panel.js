import style from "./panel.css";
import { Component } from 'preact';

export default class Panel extends Component {
	getStyle() {
		return style.panel;
	};

	render() {
		let title = null;
		if(this.props.title !== undefined) {
			title = (<h3>{this.props.title}</h3>);
		}

		return (
			<div class={this.getStyle()} id={this.props.id}>
				{title}
				{this.props.children}
			</div>
		);
	}
}
