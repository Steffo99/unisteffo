import style from "./split.css";
import { Component } from 'preact';

export default class Split extends Component {
	render() {
        let percent = 100 / this.props.children.count;
        let children = null;
        if(Array.isArray(this.props.children)) {
            children = this.props.children.map(element => {
                return (<div class={style.splitchild}>{element}</div>);
            });
        }
        else {
            children = <div class={style.splitchild}>{this.props.children}</div>;
        }
		return <div class={style.split}>{children}</div>;
	}
}