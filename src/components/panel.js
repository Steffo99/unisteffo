import style from "./panel.css";
import { Component } from 'preact';

export default class Panel extends Component {
	render() {
		let title = null;
		if(this.props.title !== undefined) {
			title = (<h3>{this.props.title}</h3>);
		}

		return (
			<div class={style.panel} id={this.props.id}>
				{title}
				{this.props.children}
			</div>
		);
	}
}
