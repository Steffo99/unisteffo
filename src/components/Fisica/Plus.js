import style from "./Plus.less";
import { Component } from 'preact';

export default function(props) {
	return <span class={style.plus}>{props.children}</span>;
}
