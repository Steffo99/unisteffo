import style from "./Styles.less";

export default function (props) {
    return (
        <span class={style.min}>{props.children ? props.children : "min"}</span>
    );
}
