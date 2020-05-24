import style from './copyright.css';
import { Component } from 'preact';

export default class Copyright extends Component {
	render() {
		return <div class={style.copyright}>© 2020 - Stefano Pigozzi - <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> - <a href="https://github.com/Steffo99/appuntiweb">Codice sorgente</a> - <a href={"https://ko-fi.com/steffo"}>Supportami</a></div>;
	}
}
