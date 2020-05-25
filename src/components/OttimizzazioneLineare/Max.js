import style from "./Styles.less";

export default function (props) {
    return (
        <span class={style.max}>{props.children ? props.children : "max"}</span>
    );
}
