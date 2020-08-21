import style from "./Minus.less";

export default function (props) {
    return <span class={style.minus}>{props.children}</span>;
}
