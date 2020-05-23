import style from "./markdown.css";
import { Component } from 'preact';
import showdown from "showdown";

export default class Markdown extends Component {
	render() {
        let converter = new showdown.Converter();
        converter.setFlavor("github");
        let html = converter.makeHtml(`${this.props.children}`);
        // noinspection CheckTagEmptyBody
        return <div style={style.markdown} dangerouslySetInnerHTML={{__html: html}}></div>;
	}
}
