import style from "./split.css";
import { Component } from 'preact';

export default class Split extends Component {
	render() {
	    let title = null;
	    if(this.props.title !== undefined) {
            title = (<h2>{this.props.title}</h2>)
        }

        let children;
        if(Array.isArray(this.props.children)) {
            children = this.props.children.map(element => {
                return (<div class={style.splitchild}>{element}</div>);
            });
        }
        else {
            children = <div class={style.splitchild}>{this.props.children}</div>;
        }
		return (
	        <div class={style.split}>
                {title}
                <div class={style.splitparent}>{children}</div>
            </div>
        );
	}
}
