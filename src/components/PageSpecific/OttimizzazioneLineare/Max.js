import style from "./Styles.less";

export default function (props) {
    return (
        <abbr class={style.max} title={"In problemi in cui il primale è di massimizzazione."}>{props.children ? props.children : "max"}</abbr>
    );
}
