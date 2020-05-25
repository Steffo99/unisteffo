import style from "./Unbounded.less";

export default function (props) {
    return (
        <span class={style.unbounded}>{props.children ? props.children : "unbounded"}</span>
    );
}
