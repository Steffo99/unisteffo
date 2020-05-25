import style from "./Styles.less";

export default function (props) {
    return (
        <span class={style.unfeasible}>{props.children ? props.children : "unfeasible"}</span>
    );
}
