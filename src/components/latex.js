import style from './latex.css';
import {useContext} from "preact/hooks";
import LatexRenderColor from "../contexts/LatexRenderColor";

export default function(props) {
	let renderColor = useContext(LatexRenderColor);

	// black, blue, brown, cyan, darkgray, gray, green, lightgray, lime, magenta, olive, orange, pink, purple, red, teal, violet, white, yellow
	let inline = props.inline ? `\\inline` : "";

	let equation = `${inline} {\\color{${renderColor}} ${props.children} }`;
	return (
		<img src={`https://latex.codecogs.com/svg.latex?${equation}`}
			 alt={props.children}
			 title={props.children}
			 class={style.latex}
		/>);
}
