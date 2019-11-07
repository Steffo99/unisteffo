import style from "./latex.css";
import { Component } from 'preact';

export default class Latex extends Component {
	render() {
		let equation = `{\\color{White} ${this.props.children} }` 
		return <img src={`https://latex.codecogs.com/png.latex?${equation}`}
			        alt={this.props.children}
				    title={this.props.children}
				    class={style.latex}></img>;
	}
}