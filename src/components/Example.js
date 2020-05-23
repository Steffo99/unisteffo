import style from "./Example.less";
import {Component} from "preact";

export default function(props) {
    return (
        <div class={style.example}>
            {props.children}
        </div>
    );
}
